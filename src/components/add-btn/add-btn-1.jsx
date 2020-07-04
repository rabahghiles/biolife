import React from 'react';


const AddBtn1 = ({id, quantity, handleProductAdd, handleProductRemove}) => { 
    return (
        <div className="gr-btn-add-container">
            <button className="gr-product-remove" onClick={() => handleProductRemove(id)} >-</button>
            <span>{quantity}</span>
            <button onClick={() => handleProductAdd(id)} className="gr-product-add">+</button>
        </div>
    )
}
 
export default AddBtn1;