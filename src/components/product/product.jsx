import React from 'react';
import {AddBtn1, AddBtn2}  from '../products-btn/products-btn';

const Product = ({isInBasket}) => {
    const style = {
        "backgroundImage": "url('https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80')",
        "backgroundPosition": "center",
        "backgroundSize": "cover",
        "height": "180px",
    }

    return (
        <div className="gr-product">
            <div className="gr-product-image" style={style}></div>
            <div className="gr-product-infos">
                <h3 className="gr-product-name">Banane d'algérie</h3>
                <p className="gr-product-price">4 euros / Kg</p>
                {isInBasket?<AddBtn1 />:<AddBtn2 />}
            </div>
        </div>
    )
}

const isInBasket = (product, panier, handleProductAdd, handleProductRemove) => {
    let index = panier.findIndex(pproduct => {
        return pproduct.id === product.id 
    })
    return (index > -1)
    ?<AddBtn1 id={product.id} quantity={panier[index].quantity} handleProductAdd={handleProductAdd} handleProductRemove={handleProductRemove} />
    :<AddBtn2 id={product.id} handleProductAdd={handleProductAdd} />
}

export default Product;