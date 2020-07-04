import React from 'react';

const SideBarre = ({data}) => {
    
    return (
        <div className="gr-sidebar">
            <nav className="gr-nav">
                {getLinks(data)}
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