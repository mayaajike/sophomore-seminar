import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
// shop page incase you forget
const Home = () => {
    return (
        <div>
            {/* hero page is the new arrivals only could be the first page with the 3 squares  */}
            <Hero/> 
            {/* popular page is the popular in womens could be popular or best sellers in walmart */}
            <Popular />
            {/* offers page is exclusive offers for you could be popular or best sellers in target */}
            <Offers />
            {/* new collections page, get creative */}
            {/* <NewCollections /> */}
            {/* keep great addition */}
            <NewsLetter />
        </div>
    )
}

export default Home