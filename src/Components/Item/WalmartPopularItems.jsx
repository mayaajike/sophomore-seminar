import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const WalmartPopularItems = (props) => {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`} className="item-link">
                <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
                <p>{props.name}</p>
                <div className="item-prices">
                    <div className="item-price-walmart">
                    ${props.walmart_price}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default WalmartPopularItems;
