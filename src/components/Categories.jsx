import React from 'react';
import '../assets/styles/components/Categories.scss';
import DiamondIcon from '../components/DiamondIcons';

const Categories = ({ children, title }) => (
    <div className="categories">
        <h3 className="categories__title">{title}</h3>
        <DiamondIcon/>
        {children}
    </div>
)

export default Categories;