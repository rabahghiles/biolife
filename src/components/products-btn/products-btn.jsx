import React from 'react';

export const AddBtn1 = () => { 
    return (
        <div className="gr-btn-add-container">
            <button className="gr-product-remove" >-</button>
            <span>3</span>
            <button className="gr-product-add">+</button>
        </div>
    )
}


export const AddBtn2 = () => {
    return <button
            className="gr-product-add2" >
                Ajouter au panier <i className="fas fa-shopping-cart"></i>
            </button>
}