import React, { useState } from 'react';
import './CSS/PriceSearch.css';
import magnifyingGlass from '../Components/Assets/magnifying_glass.png'; // Placeholder image
import ham1 from '../Components/Assets/ham1.png';
import ham2 from '../Components/Assets/ham2.png';
import egg1 from '../Components/Assets/egg1.png';
import egg2 from '../Components/Assets/egg2.png';
import milk1 from '../Components/Assets/milk1.png';
import milk2 from '../Components/Assets/milk2.png';
import milk3 from '../Components/Assets/almondmilk.jpeg';
import ham from '../Components/Assets/smokedham.jpeg'
// import NavigationBar from './NavigationBar';

const PriceSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(true); // Added state for showing intro

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      switch (searchQuery.toLowerCase()) {
        case 'egg':
          setSearchResults(getMockDataForEgg());
          setShowIntro(false); // Hide intro when results are available
          break;
        case 'milk':
          setSearchResults(getMockDataForMilk());
          setShowIntro(false);
          break;
        case 'ham':
          setSearchResults(getMockDataForHam());
          setShowIntro(false);
          break;
        default:
          setSearchResults([]);
          setShowIntro(true); // Show intro when no results
      }
    }, 1000);
  };

  const getMockDataForEgg = () => [
    {
      id: 1,
      name: 'Organic Brown Eggs',
      walmartPrice: '$2.99',
      targetPrice: '$3.29',
      imageUrl: egg1,
    },
    {
      id: 2,
      name: 'Free-Range White Eggs',
      walmartPrice: '$2.49',
      targetPrice: '$2.89',
      imageUrl: egg2,
    },
    // Add more mock data for eggs
    {
      id: 3,
      name: 'Omega-3 Enriched Eggs',
      walmartPrice: '$3.99',
      targetPrice: '$4.29',
      imageUrl: egg1,
    },
  ];

  const getMockDataForMilk = () => [
    {
      id: 1,
      name: 'Whole Milk',
      walmartPrice: '$1.99',
      targetPrice: '$2.19',
      imageUrl: milk1,
    },
    {
      id: 2,
      name: '2% Reduced Fat Milk',
      walmartPrice: '$1.79',
      targetPrice: '$1.99',
      imageUrl: milk2,
    },
    // Add more mock data for milk
    {
      id: 3,
      name: 'Almond Milk',
      walmartPrice: '$2.49',
      targetPrice: '$2.79',
      imageUrl: milk3,
    },
  ];

  const getMockDataForHam = () => [
    {
      id: 1,
      name: 'Black Forest Ham',
      walmartPrice: '$4.99',
      targetPrice: '$5.49',
      imageUrl: ham1,
    },
    {
      id: 2,
      name: 'Honey Glazed Ham',
      walmartPrice: '$6.49',
      targetPrice: '$6.99',
      imageUrl: ham2,
    },
    // Add more mock data for ham
    {
      id: 3,
      name: 'Smoked Ham',
      walmartPrice: '$5.29',
      targetPrice: '$5.79',
      imageUrl: ham,
    },
  ];

  return (
    <div className='container'>
      <div className='iconContainer'>
      </div>

      <div className='blueRectangle'>
        <div className='pricesearchText'>PRICE SEARCH</div>
      </div>
      {/* <NavigationBar></NavigationBar> */}
    


      <form onSubmit={handleSearch} className='searchForm'>
        <input type="text" name="search" placeholder="Search" className='search' />
      </form>
   

      {loading && <p>Loading...</p>}

      {showIntro && ( // Conditional rendering for intro section
        <div className='introSection'>
          <img src={magnifyingGlass} alt="Search" className='introImage' />
          <p className='introText'>
            Start by searching for products to see prices and compare deals at Walmart and Target.
          </p>
        </div>
      )}

      {searchResults.length > 0 && ( // Conditional rendering for search results
        <div className='horizontalFoodSectionContainer'>
          {searchResults.map((product) => (
            <div key={product.id} className='horizontalFoodItem'>
              <h3>{product.name}</h3>
              <img src={product.imageUrl} alt={product.name} className='foodImage' />
              <p>Walmart Price: {product.walmartPrice}</p>
              <p>Target Price: {product.targetPrice}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceSearch;