import React from 'react';

const SideBarre = ({data}) => {
    
    return (
        <div className="gr-sidebar">
            <nav className="gr-nav">
                <a href="#" className="gr-nav-link gr-nav-link-actif">Fraises (4)</a>
                <a href="#" className="gr-nav-link">Bananes (2)</a>
                <a href="#" className="gr-nav-link">Pommes (7)</a>
            </nav>
        </div>
    )

}

const getLinks = (categories) => {
    return categories.map( category => {
        let classes = (category.isActive)?"gr-nav-link gr-nav-link-actif":"gr-nav-link"
        return <a key={category.id} className={classes} href="#">{category.category_name} ({category.liste.length})</a>
    })
}

export default SideBarre;