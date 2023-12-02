import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                {/* static text could add {product.description} like my other suggestion */}
                <p> Eating healthy means following a healthy eating pattern that includes a variety of nutritious foods and drinks</p>
                <p>
                It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.                </p>
            </div>
        </div>
    )
}

export default DescriptionBox