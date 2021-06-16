import React from 'react';
import Gallery from './Gallery';
import DiamondIcon from './DiamondIcons';
import '../assets/styles/components/PaintingsSection.scss'
import paintingsList from '../../paintingsList.js';





const PaintingsSection = () => {
    return(
        <section className="paintingsSection" id="paintings">
            <h3>CUADROS</h3>
            <DiamondIcon/>
            <Gallery items={paintingsList}/>
        </section>
    )
}

export default PaintingsSection;