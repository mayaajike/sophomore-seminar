import React, { useState, useEffect } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import './CSS/VoiceAssistant.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import soundwaves from "../Components/Assets/soundwaves.gif"
// import NavigationBar from './NavigationBar';

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  TypingIndicator,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const VoiceAssistant = () => {
  let navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const [typing, setTyping] = useState(false);
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [messages, setMessages] = useState([
    {
      message:
        "Hello I am smart grocery list tell me what ingredients you have so I can assist you with a recipe",
      sender: "ChatGPT",
    },
  ]);

  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = function () {
      let voices = window.speechSynthesis.getVoices();
      setVoiceIndex(
        voices.findIndex(
          (voice) =>
            voice.name ===
            "Microsoft Natasha Online (Natural) - English (Australia)"
        )
      );
    };
  }, []);

  const handleSend = async (message) => {
    SpeechRecognition.stopListening();
    setIsListening(false);

    const newMessage = {
      message: transcript,
      sender: "user",
      direction: "outgoing",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  const handleStop = () => {
    navigate("/ConvoEnd");
    setIsListening(false);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content:
        "you are a smart grocery helper take the ingredients given and help create budget-friendly meal options",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      temperature: 0,
      max_tokens: 150,
      messages: [systemMessage, ...apiMessages],
    };

    let environment = require("../.env.local.json");

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${environment[0].API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        const gptMessage = data.choices[0].message.content;

        setMessages([
          ...chatMessages,
          {
            message: gptMessage,
            sender: "ChatGPT",
          },
        ]);

        let voices = window.speechSynthesis.getVoices();
        let speech = new SpeechSynthesisUtterance();
        speech.text = data.choices[0].message.content;
        if (voices.length > 0) {
          speech.voice = voices[voiceIndex];
        }
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
        setTyping(false);
      });
  }

  return (
    <div className="body">
      <div className='container'>
        {/* Blue Rectangle and Heading */}
        <div className='blueRectangle'>
        <div className='heading'>Voice Recipe Assistant</div>
        {/* <NavigationBar></NavigationBar> */}
        </div>
        
        {/* Chat container on the left */}
        <div className='chatContainer'>
          <MainContainer>
            <ChatContainer>
              <MessageList
                className="message-list"
                typingIndicator={
                  typing ? (
                    <TypingIndicator content="Smart Grocery list is thinking" />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  return (
                    <Message
                      key={i}
                      model={{
                        message: message.message,
                        direction: message.direction,
                        sender: message.sender,
                      }}
                    ></Message>
                  );
                })}
              </MessageList>
            </ChatContainer>
          </MainContainer>
        </div>

        {/* Button container on the right */}
        <div className='buttonContainer'>
          <h2 className="title italicTitle" >
            "Always here to help"
          </h2>

          <div className='buttonsWrapper'>
  <button
    type="button"
    className= 'start-button'
    onClick={() => {
      SpeechRecognition.startListening();
      setIsListening(true); // Microphone is active
    }}
    title="Start"
  >
    Play
    <i className="fas fa-play"></i>
  </button>
  <button
    type="button"
    className='send-button'
    onClick={handleSend}
    title="Send"
  >
    Send
    {/* <i className="fas fa-pause"></i> */}
    <FontAwesomeIcon icon={faArrowUp} />
  </button>
</div>
{/* <div className="d-grid gap-2 stop-button-container">
  <button
    type="button"
    className={`btn btn-outline-danger stop-button ${styles.button}`}
    onClick={handleStop}
    title="End"
  >
    Done
  </button>
</div> */}

          <div className='imageDescription'>
            {isListening && <img src={soundwaves} alt="You are speaking" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;