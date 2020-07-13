import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../actions';

export default ({product}) => {
    const dispatch =  useDispatch();
    const style = {
        height: "50px",
        width: "50px",
        margin: "0 auto",
        borderRadius: "3px",
        boxShadow: '1px 1px 5px #ccc',
        backgroundImage: 'url("https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
    return <li className="gr-b-product">
        <div>
            <div style={style}></div>
        </div>
        <div>{product.name}</div>
        <div>{product.price} euros / {product.unity}</div>
        <div>x {product.quantity}</div>
        <div>{getPrice(product.price,product.quantity)} euro(s)</div>
        <div className="gr-b-product-actions">
            <button className="gr-b-remove" onClick={() => dispatch(removeFromBasket(product.id))}>-</button>
            <span>{product.quantity}</span>
            <button className="gr-b-add" onClick={() => dispatch(addToBasket(product))}>+</button>
        </div>
    </li>
}

const getPrice = (price,quantity) => {
    return (price * quantity).toFixed(2)
} 