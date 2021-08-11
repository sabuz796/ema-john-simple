import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {

    let {productKey} = useParams()
    let product = fakeData.find(item => item.key === productKey)
    console.log(product);
    return (
        <div>
            <h1> {productKey} Coming soon ...</h1>
            <Product showAddToCart = {false} product = {product}></Product>
        </div>
        
    );
};

export default ProductDetail;