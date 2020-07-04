import React from 'react';
import Header from "../basket-header/basket-header";
import Footer from "../basket-footer/basket-footer";
import Products from "../basket-products/basket-products";


const Basket = ({panier,handleProductAdd,handleProductRemove}) => {
    return <div className="gr-basket-content">
        <Header />
        <div></div>
        <Products panier={panier}
            handleProductAdd={handleProductAdd}
            handleProductRemove={handleProductRemove}
        />
        <Footer panier={panier} />
    </div>

}
 

export default Basket;