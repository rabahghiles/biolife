import React from 'react';
import Product from "../product/product";

const Products = () => {
    return (
        <div className="gr-products">
            <Product isInBasket={true} />
            <Product isInBasket={true} />
            <Product isInBasket={false} />
            <Product isInBasket={false} />
            <Product isInBasket={true} />
            <Product isInBasket={false} />
        </div>
    );
}

const getProduct = (categories,panier,handleProductAdd, handleProductRemove) => {
    return categories.map( category => {
        return category.liste.map( product => <Product key={product.id} handleProductRemove={handleProductRemove} handleProductAdd={handleProductAdd} category={category.category_name} product={product} panier={panier}/>)
    })
}
 
export default Products;