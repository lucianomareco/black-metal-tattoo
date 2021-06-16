import React from 'react';
import FirstSection from './FirstSection';
import PiercingsSection from './PiercingsSection';
import PaintingsSection from './PaintingsSection';
import TattooersSection from './TattooersSection';
import MapSection from './MapSection';
import TattoosSection from './TattoosSection';
import MachineSection from './MachineSection';
import 'bootstrap/dist/css/bootstrap.min.css';



import '../assets/styles/App.scss';

const Home = () => {

    return (
        <>
            <FirstSection/>
            <MachineSection/>
            <TattooersSection/>
            <MapSection/>
            <TattoosSection/>
            <PiercingsSection/>
            <PaintingsSection/>
        </>
    );
};
export default Home;