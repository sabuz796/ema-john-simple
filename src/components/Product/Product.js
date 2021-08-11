import React from 'react';
import './Product.css'
// ---font awesome library
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
    
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    // console.log(props.product);
    const {img, name, seller, price, stock, star, feature, key} = props.product
    return (
        <div className = 'single-product-container'>
            {/* <h1>{element}</h1> */}
            <div>
                <img src={img} alt="" />
            </div>
            <div className = 'section'>
                <div>
                    <h4 className = 'product-name'><Link to = {"/product/"+ key}>{name}</Link></h4>
                    <p>by: {seller}</p>
                    <h4>${price}</h4>
                    <p>{stock} left in stock - order soon</p>
                    {props.showAddToCart === true && <button onClick = {()=> props.handleCartButton(props.product)}>{cartIcon} Add to cart</button>}
                </div>
                <div>
                    <p>feature</p>
                    <p>star</p>
                    {/* <p>{star}</p>
                    <p>{feature}</p> */}
                     {/* <p>{props.product.features[0].description}</p> */}
                </div>
               
            </div>

        </div>
    );
};

export default Product;