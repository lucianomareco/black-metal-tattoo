import React from 'react';
import Gallery from './Gallery';
import DiamondIcon from '../components/DiamondIcons';
import '../assets/styles/components/TattoosSection.scss'
import tattoosList from '../../tattoosList.js';





const TattoosSection = () => {
    return(
        <section className="tattoosSection" id="tattoos">
            <h3>TATUAJES</h3>
            <DiamondIcon/>
            <Gallery items={tattoosList}/>
        </section>
    )
}

export default TattoosSection;