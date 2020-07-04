import React from 'react';


const AddBtn2 = ({id, handleProductAdd}) => {
    return <button
            className="gr-product-add2"
            onClick={() => handleProductAdd(id)} >
                Ajouter au panier <i className="fas fa-shopping-cart"></i>
            </button>
}

export default AddBtn2;