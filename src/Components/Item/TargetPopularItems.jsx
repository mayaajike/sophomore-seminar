import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const TargetPopularItems = (props) => {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`} className="item-link">
                <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
                <p>{props.name}</p>
                <div className="item-prices">
                    <div className="item-price-target">
                        ${props.target_price}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TargetPopularItems;
