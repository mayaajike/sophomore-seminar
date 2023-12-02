import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import HomeCategory from './Pages/HomeCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import ChatBot from './Pages/ChatBot';
import GroceryList from './Pages/GroceryList';
import { useState } from 'react';
import VoiceAssistant from './Pages/VoiceAssistant';
import PriceSearch from './Pages/PriceSearch';

function App() {
  const [savedLists, setSavedLists] = useState([]);

  const handleSaveList = (newList) => {
    setSavedLists([...savedLists, newList]);
  };

  const handleAddToGroceryList = (item) => {
    // Handle adding the selected item to the grocery list
    // For simplicity, adding directly to the savedLists state
    setSavedLists([...savedLists, { name: 'Temporary List', items: [item], store: 'Walmart' }]);
  };
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shopping lists' element={<GroceryList onSaveList={handleSaveList} savedLists={savedLists}/>} /> ;
        <Route path='/ai recipe helper' element={<ChatBot />}/>; 
        <Route path='/price search' element={<PriceSearch />}/>; 
        <Route path='/voice assistant' element={<VoiceAssistant />}/>; 
        <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />}/>
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
