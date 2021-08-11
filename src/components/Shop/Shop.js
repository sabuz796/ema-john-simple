import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    // console.log(fakeData);
   let [products, setProducts] =  useState(first10)
    // console.log(first10);
    let [cart, setCart] = useState([])
    
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
    
    let handleCartButton= (product)=>{
        // console.log('im clicked', product);
        // ... means previous initial cart 
        let toBeAdded = product.key
        let sameProduct = cart.find(item => item.key === toBeAdded)
        // console.log(sameProduct, 'same Product');
        let count = 1
        let newCart
        if(sameProduct){
             count = sameProduct.quantity + 1
             sameProduct.quantity = count
             let others = cart.filter(pd => pd.key !== toBeAdded )
             newCart = [...others, sameProduct]
        }
        else{
            product.quantity = 1
            newCart = [...cart, product]
        }
        
        setCart(newCart)
        
        addToDatabaseCart(product.key, count)
    }
    
    return (
        <div className = 'shop-container'>
            <div className="product-container">
            <h1>This is shop component</h1>
            <h3>{products.length}</h3>
    
            {
            products.map(data => <Product key = {data.key} showAddToCart = {true} handleCartButton = {handleCartButton} product = {data}></Product>)
           
            
            }
          
            </div>
            <div className="cart-container">
                <Cart cart = {cart}>
                <Link to = '/review'><button>Review Order</button></Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;