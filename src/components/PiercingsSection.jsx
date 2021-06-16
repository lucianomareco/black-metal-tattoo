import React from 'react';
import Gallery from './Gallery';
import DiamondIcon from '../components/DiamondIcons';
import '../assets/styles/components/PiercingsSection.scss'
import piercingsList from '../../piercingsList.js';





const PiercingsSection = () => {
    return(
        <section className="piercingsSection" id="piercings">
            <h3>PIERCING'S</h3>
            <DiamondIcon/>
            <Gallery items={piercingsList}/>
        </section>
    )
}

export default PiercingsSection;