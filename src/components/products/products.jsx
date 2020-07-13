import React from 'react';
import Product from "../product/product";
import { useSelector } from 'react-redux';

export default () => {
    const categories = useSelector( state => state.products);
    return <div className="gr-products">{getProducts(categories)}</div>
}

const getProducts = (categories) => {
    return categories.map( category => {
        return category.liste.map( product => <Product key={product.id} product={product} />)
    })
}