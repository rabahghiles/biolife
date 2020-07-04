import React from 'react';



const Product = ({product,handleProductAdd,handleProductRemove}) => {
    
    const style = {
        height: "50px",
        width: "50px",
        margin: "0 auto",
        borderRadius: "3px",
        boxShadow: '1px 1px 5px #ccc',
        backgroundImage: 'url("'+product.path+'")',
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
            <button className="gr-b-remove" onClick={() => handleProductRemove(product.id)} >-</button>
            <span>{product.quantity}</span>
            <button className="gr-b-add" onClick={() => handleProductAdd(product.id)}>+</button>
        </div>
    </li>
}

const getPrice = (price,quantity) => {
    return (price * quantity).toFixed(2)
} 

 
export default Product;