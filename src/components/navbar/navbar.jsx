import React from 'react';
import {Link} from "react-router-dom";

const NavBarre = ({nbrArticle}) => {
    return (
        <div className="gr-header">
            <Link className="gr-header-link" to="/products"><i className="fas fa-carrot"></i></Link>
            <Link className="gr-header-link" to="/about"><i className="fas fa-info"></i></Link>
            <Link className="gr-header-link" to="/basket">
                <i className="fas fa-shopping-basket"></i>
                <span className="gr-article-number">{nbrArticle}</span>
            </Link>
        </div>
    )
}

export default NavBarre