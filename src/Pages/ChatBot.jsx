import React, { useState, useEffect } from "react";
import './CSS/ChatBot.css';
import Navbar from "../Components/Navbar/Navbar";
// import NavigationBar from './NavigationBar';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";


const Text = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello I am Your Smart Grocery List Recipe Helper. Please enter ingredients that you have so that I may asssit you with coming up with recipes. ",
      sender: "ChatGPT",
    },
  ]);
  const [savedLists, setSavedLists] = useState([]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setTyping(true);

    await processMessageToChatGPT(newMessages);
  };

  const processMessageToChatGPT = async (chatMessages) => {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content:
        "Respond like my assistant that's helping me make delicious low-cost meals using the ingredients I have",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      temperature: 0,
      max_tokens: 200,
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
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setTyping(false);
      });
  };

  return (
    <div className='container'>
      <div className='blueRectangle'>
      {/* <Navbar /> */}
        <div className='heading'>RECIPE HELPER</div>
      </div>
      <MainContainer className="main-container">
        <ChatContainer className="chat-container">
        <MessageList className="message-list" >
            {messages.map((message, i) => (
              <Message key={i} model={message} />
            ))}
            {typing && (
              <div className="typing-indicator">Smart Grocery List is thinking...</div>
            )}
          </MessageList>
          <MessageInput className="message-input" placeholder="Type your message here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
  
};

export default Text;