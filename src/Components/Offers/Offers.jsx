import React from 'react'
import '../Popular/Popular.css'
import data_product from '../Assets/target_popular_data'
import Item from '../Item/TargetPopularItems'

const Offers = () => {
    return (
        <div className='popular'>
            <h1>BEST SELLERS AT TARGET</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) =>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} target_price={item.old_price} />;
                })}
            </div>
        </div>
    )
}

export default Offers