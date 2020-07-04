import React from 'react';
import Product from '../product/product';


const Footer = ({panier}) => {
    let total = 0;
    panier.forEach( product => total = parseFloat(total) + (product.price*product.quantity));
    return <div className="gr-b-footer">Total à payer : {total.toFixed(2)} euro(s)</div>
}

export default Footer;
