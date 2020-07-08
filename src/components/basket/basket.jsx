import React from 'react';
import Header from "../basket-header/basket-header";
import Footer from "../basket-footer/basket-footer";
import Products from "../basket-products/basket-products";



const Basket = () => {
    return <div className="gr-basket-content">
        <Header />
        <div></div>
        <Products />
        <Footer />
    </div>

}

export default Basket;