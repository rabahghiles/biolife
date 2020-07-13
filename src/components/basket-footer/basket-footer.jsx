import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
    const products = useSelector( state => state.basket);
    return <div className="gr-b-footer">Total à payer : {getPrice(products)} euro(s)</div>
}

const getPrice = (products) => {
    let totalPrice = 0;
    products.forEach(product => totalPrice += product.price * product.quantity);
    return totalPrice.toFixed(2);
}
