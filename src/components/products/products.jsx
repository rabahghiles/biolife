import React from 'react';
import Product from "../product/product";

const Products = ({categories,panier, handleProductAdd, handleProductRemove}) => {
    return (
        <div className="gr-products">
            {
                getProduct(categories, panier, handleProductAdd, handleProductRemove)
            }
        </div>
    );
}

const getProduct = (categories,panier,handleProductAdd, handleProductRemove) => {
    return categories.map( category => {
        return category.liste.map( product => <Product key={product.id} handleProductRemove={handleProductRemove} handleProductAdd={handleProductAdd} category={category.category_name} product={product} panier={panier}/>)
    })
}
 
export default Products;