import React from 'react';
import Categories from './Categories';
import Cards from './Cards';
import tattooersList from '../../tattooersList';
import CarouselCards from './CarouselCards'

import '../assets/styles/components/TattooersSection.scss';




const TattooersSection = () => {
    return(
        <div className="tattooersSection" id="tattooers">
        { tattooersList != undefined && (
            
                <Categories title="ARTISTAS">
                    <Cards/>
                    <CarouselCards/>
                </Categories>   
            ) 
        }
    </div>  
    );
};
export default TattooersSection;