import React from 'react'
import './Popular.css'
import data_product from '../Assets/walmart_popular_data'
import Item from '../Item/WalmartPopularItems'

const Popular = () => {
    return (
        <div className='popular'>
            <h1>BEST SELLERS AT WALMART</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) =>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} walmart_price={item.new_price} />;
                })}
            </div>
        </div>
    )
}

export default Popular