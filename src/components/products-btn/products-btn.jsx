import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../actions';


export const AddBtn1 = ({product}) => { 
    const dispatch = useDispatch();
    return <div className="gr-btn-add-container">
        <button className="gr-product-remove" onClick={() => dispatch(removeFromBasket(product.id))} >-</button>
        <span>{product.quantity}</span>
        <button className="gr-product-add" onClick={() => dispatch(addToBasket(product))} >+</button>
    </div>
}


export const AddBtn2 = ({product}) => {
    const dispatch = useDispatch();
    return <button className="gr-product-add2" onClick={() => dispatch(addToBasket(product))} >
        Ajouter au panier <i className="fas fa-shopping-cart"></i>
    </button>
}