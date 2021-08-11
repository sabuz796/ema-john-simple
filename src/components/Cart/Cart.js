import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';
// import Product from '../Product/Product';

const Cart = (props) => {
    console.log(props.cart, 'dekhi ki hoy');
    let cart = props.cart
    // cart.map(item => console.log(item.price, 'aije ami '))
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total= total + element.price * element.quantity     
        // debugger 
    }

    let shippingCost = 0;

     if(total > 35){
        shippingCost = 0
    }
    else if(total >15){
        shippingCost = 4.99
    }
    else if(total > 0){
        shippingCost = 15.99
    }
    let tax = (total * (10/100)).toFixed(2)
    let grandTotal = (total + shippingCost+ parseFloat(tax)).toFixed(2)
    // let finalPrice = grandTotal * element.quantity

    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items ordered: {cart.length} </p>
            <p>Product price: {total.toFixed(2)}</p>
            <p>Shipping cost: {shippingCost}</p>
            <p>Tax + Vat:{tax}</p>
            <p>Total price: {grandTotal}</p>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;