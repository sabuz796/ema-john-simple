import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { clearLocalShoppingCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'
// import Cart from '../components/Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([])
    const [orderedPlaced, setOrderedPlaced] = useState(false)

    let handlePlaceOrder = ()=>{
        setCart([])
        setOrderedPlaced(true)
        clearLocalShoppingCart()
        console.log('place ordered');
    }
    
    let removeProduct = (productKey)=>{
        console.log('remove hoise');
        let newCart = cart.filter(item => item.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey)
        
    }
    useEffect(()=>{
        let savedCart = getDatabaseCart()
        let productKeys = Object.keys(savedCart)
        let cartsProduct = productKeys.map(key =>{
            let product = fakeData.find(item => item.key === key)
            product.quantity = savedCart[key]
            return product
        })
        setCart(cartsProduct)
        
    },[])
    let thankYou
    if(orderedPlaced){
        thankYou = <img src={happyImage} alt="" />
    }
    return (
        <div className = 'shop-container'>
            <div className = 'product-container'>
            <h1>This is cart review: {cart.length}</h1>
            {
                cart.map(pd =>
                     <ReviewItem removeProduct = {removeProduct} 
                     key = {pd.key }product = {pd} ></ReviewItem>)
            }
            {
                thankYou
            }
            </div>
            <div >
                <Cart cart = {cart}>
                    <button onClick = {handlePlaceOrder }>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;