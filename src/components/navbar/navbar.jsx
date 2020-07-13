import React from 'react';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

export default () => {
    const products = useSelector( state => state.basket);
    return <div className="gr-header">
        <Link className="gr-header-link" to="/products"><i className="fas fa-carrot"></i></Link>
        <Link className="gr-header-link" to="/about"><i className="fas fa-info"></i></Link>
        <Link className="gr-header-link" to="/basket">
            <i className="fas fa-shopping-basket"></i>
            <span className="gr-article-number">{products.length}</span>
        </Link>
    </div>
}