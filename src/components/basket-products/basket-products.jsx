import React from 'react';
import Product from "../basket-product/basket-product";
import { useSelector } from 'react-redux';


export default () => {
    const products = useSelector( state => state.basket);
    return <ul className="gr-b-products">
        {getProducts(products)}
    </ul>
}


const getProducts = (products) => {
    return products.map(  product => <Product key={product.id} product={product} />)
}