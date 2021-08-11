import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product
    const removeProduct = props.removeProduct
    return (
        <div className = 'review-item'>
            <h4 className = 'product-name'>{name}</h4>
            <p>Quantity: {quantity}</p><br />
            <p><small>Price: ${price}</small></p>
            <button onClick = {()=>removeProduct(key)} >Remove</button>
        </div>
    );
};

export default ReviewItem;