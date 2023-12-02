import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { HomeContext } from '../../Context/HomeContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(HomeContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    {/* display walmart price */}
                    <div className="productdisplay-right-price-old">Walmart Price: ${product.old_price}</div>
                    {/* display target price */}
                    <div className="productdisplay-right-price-new">Target Price: ${product.new_price}</div>
                </div>
                {/* static product description, i recommend adding the description to the product page and just inserting {product.description} */}
                <div className="productdisplay-right-description">
                Grocery Items means supply items, non-food items, foodstuffs, and drinks. This includes dairy products, produce, coffee, tea, candies, nuts, snack mixes, bakery products, meat, seafood, alcoholic beverages, and more. Also could include items that aren't ready for immediate consumption, vitamins, herbs, and supplements.                </div>
                {/* might be irrelevant since it is a food website */}
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="product-display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}}>ADD TO LIST</button>
                <p className='productdisplay-right-category'><span>Category :</span>Grocery, Food, Edible</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Cheap, Latest</p>

            </div>
        </div>
    )
}

export default ProductDisplay