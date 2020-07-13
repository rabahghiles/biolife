import React from 'react';
import {AddBtn1, AddBtn2}  from '../products-btn/products-btn';
import { useSelector } from 'react-redux';

export default ({product}) => {
    const style = {
        "backgroundImage": "url('https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80')",
        "backgroundPosition": "center",
        "backgroundSize": "cover",
        "height": "180px",
    }
    const basketProducts = useSelector( state => state.basket);

    return <div className="gr-product">
        <div className="gr-product-image" style={style}></div>
        <div className="gr-product-infos">
            <h3 className="gr-product-name">{product.name}</h3>
            <p className="gr-product-price">{product.price} euros / {product.unity}</p>
            {isInBasket(product,basketProducts)}
        </div>
    </div>
}

const isInBasket = (product,basketProducts) => {
    let index = basketProducts.findIndex( bProduct => bProduct.id === product.id)
    return (index > -1)
    ?<AddBtn1 product={basketProducts[index]} />
    :<AddBtn2 product={product} />
}