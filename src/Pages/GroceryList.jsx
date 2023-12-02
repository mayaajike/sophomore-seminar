import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import './CSS/GroceryList.css';
import { Link } from 'react-router-dom';
// import NavigationBar from './NavigationBar';

const GroceryList = ({ onSaveList, savedLists }) => {
  const [newItem, setNewItem] = useState('');
  const [listName, setListName] = useState('');  // Fix: Initialize as an empty string
  const [groceryList, setGroceryList] = useState([]);

  useEffect(() => {
    setGroceryList([]);
    setNewItem('');
    setListName('');
  }, [savedLists]);

  const commonItems = {
    Egg: 1.99,
    Vegetable: 2.49,
    Bread: 2.99,
    Cheese: 4.99,
    Flour: 3.49,
    Milk: 2.79,
    "Canned tomatoes": 1.59,
    "Frozen vegetables": 3.29,
    Bean: 1.99,
    Apple: 0.99,
    // ... (other common items and prices)
  };

  const getRandomPrice = () => {
    return (Math.random() * (10 - 1) + 1).toFixed(2);
  };

  const calculateAveragePrice = (items) => {
    if (items.length === 0) return 0;
    const total = items.reduce((acc, item) => acc + item.price, 0);
    return total / items.length;
  };

  const calculateRecommendedStore = (items) => {
    if (items.length === 0) return 'No recommendation';

    const averagePrice = calculateAveragePrice(items);

    if (averagePrice === 0) return 'No recommendation';

    const targetAveragePrice = calculateAveragePrice(items.filter(item => item.store === 'Target'));
    const walmartAveragePrice = calculateAveragePrice(items.filter(item => item.store === 'Walmart'));

    if (targetAveragePrice < walmartAveragePrice) {
      return 'Target';
    } else {
      return 'Walmart';
    }
  };

  const calculateTotalPrice = (items) => {
    return items.reduce((acc, item) => acc + item.price, 0);
  };
  const saveList = () => {
    if (groceryList.length > 0 && listName.trim() !== '') {
      const newList = {
        name: listName,
        items: [...groceryList],
        store: calculateRecommendedStore(groceryList),
      };
  
      // Call the onSaveList function to update the state in the parent component
      onSaveList(newList);
  
      // Clear the current list and the input
      setGroceryList([]);
      setNewItem('');
      setListName('');
    }
  };
  

  const addItem = () => {
    if (newItem.trim() !== '') {
      const [itemName] = newItem.split(' ');

      // Check if the item is a common item
      const price = commonItems[itemName] || getRandomPrice();

      const newItemObject = {
        name: itemName,
        price: parseFloat(price),
        store: Math.random() < 0.5 ? 'Walmart' : 'Target',
      };

      setGroceryList([...groceryList, newItemObject]);
      setNewItem('');
    }
  };

  return (
    
    <div className='container'>
         {/* <NavigationBar /> */}
         
      <div className='blueRectangle'>
        <div className='groceryHeading'>GROCERY LIST</div>
      </div>
    
      <div className='content'>
        

        <InputGroup className="mb-3">
          <FormControl
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add item (e.g., Apple)"
            className='textInput'
          />
          <Button
            variant="primary"
            onClick={addItem}
            className='blueThemeButton'
          >
            Add
          </Button>
        </InputGroup>
        <ul className="list-group mb-3">
          {groceryList.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.name} - ${item.price.toFixed(2)} - Store: {item.store}
            </li>
          ))}
        </ul>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            placeholder="Enter list name"
          />
          <Button
            variant="success"
            onClick={saveList}
            className='blueThemeButton'
          >
            Save List
          </Button>
        </InputGroup>

        <h2>Saved Lists</h2>
        <ListGroup>
          {savedLists && savedLists.length > 0 ? (
            savedLists.map((list, index) => (
              <ListGroup.Item key={index} className='savedList'>
                <div className='savedListName'>{list.name}</div>
                <ul className='savedListItem'>
                  {list.items.map((item, i) => (
                    <li key={i}>
                      {item.name} - ${item.price.toFixed(2)} - Store: {item.store}
                    </li>
                  ))}
                </ul>
                <div className='savedListFooter'>
                  Average Price: ${calculateAveragePrice(list.items).toFixed(2)}
                  <br />
                  Total Price: ${calculateTotalPrice(list.items).toFixed(2)}
                  <br />
                  Recommended Store: {list.store}
                </div>
              </ListGroup.Item>
            ))
          ) : (
            <p>No saved lists available.</p>
          )}
        </ListGroup>
      </div>
    </div>
  );
};

export default GroceryList;