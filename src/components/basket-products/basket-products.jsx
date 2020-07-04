import React from 'react';
import Product from "../basket-product/basket-product";

const Products = ({panier,handleProductAdd,handleProductRemove}) => {
    const products = panier.map( product => <Product
        key={product.id}
        product={product}
        handleProductAdd={handleProductAdd}
        handleProductRemove={handleProductRemove}
    />)
    return <ul className="gr-b-products">            
        {products}
    </ul>
}
 
export default Products;