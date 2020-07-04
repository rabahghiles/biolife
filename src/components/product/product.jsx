import React from 'react';
import AddBtn1 from '../add-btn/add-btn-1';
import AddBtn2 from '../add-btn/add-btn-2';

const Product = ({product, panier, handleProductAdd, handleProductRemove}) => {
    const style = {
        "backgroundImage": "url('"+product.path+"')",
        "backgroundPosition": "center",
        "backgroundSize": "cover",
        "height": "180px",
    }

    return (
        <div className="gr-product">
            <div className="gr-product-image" style={style}></div>
            <div className="gr-product-infos">
                <h3 className="gr-product-name">{product.name}</h3>
                <p className="gr-product-price">{product.price} euros / {product.unity}</p>
                {   
                    isInBasket(product, panier, handleProductAdd, handleProductRemove)   
                }
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