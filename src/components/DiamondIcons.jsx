import React from 'react';
import '../assets/styles/components/DiamondIcons.scss';
import Diamond from '../assets/static/diamond-icon.png';

const DiamondIcons = () => {
    return(        
        <div className="categories__icon-container">
            <img className="diamond-icon" src={Diamond} alt="diamond icon"/>
            <img className="diamond-icon" src={Diamond} alt="diamond icon"/>
            <img className="diamond-icon" src={Diamond} alt="diamond icon"/>
        </div>
    )
} 

export default DiamondIcons;