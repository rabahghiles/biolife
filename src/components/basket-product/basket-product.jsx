import React from 'react';

const Product = () => {
    
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
        <div>Banane du Brésile</div>
        <div>0.8 euros / Kg</div>
        <div>x 4</div>
        <div>50 euro(s)</div>
        <div className="gr-b-product-actions">
            <button className="gr-b-remove">-</button>
            <span>4</span>
            <button className="gr-b-add">+</button>
        </div>
    </li>
}

const getPrice = (price,quantity) => {
    return (price * quantity).toFixed(2)
} 

 
export default Product;