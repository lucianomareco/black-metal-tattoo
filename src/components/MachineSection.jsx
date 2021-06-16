import React from 'react';
import '../assets/styles/components/MachineSection.scss'
import TattooMachine from '../assets/imgs/tattooMachine.png';



const MachineSection = () => {
    return(
      <div className="container-fluid machineSection" id="about">
        <div className="row">
            <div className="col-md-6 image-container">
                <img src={TattooMachine} alt="Maquina de tatuajes" />
            </div>
            <div className="col-12 col-md-6 data-container">
            <h3>¿Quienes somos?</h3>
            <h2 className="title">BLACK METAL TATTOO'S</h2>
            <p>En el 2020 nos unimos para abrir nuestro propio estudio privado de tatuajes. Con mucho esfuerzo, logramos llevarlo a cabo, desde entonces disfrutamos cada día que vamos al trabajo, no solo porque amamos lo que hacemos, sino, que además tenemos el placer de hacerlo con buena compañia. Nos esforzamos por ver a los clientes satisfechos, por eso siempre encontrarás el local con todas sus medidas de higene, ordenado y con buena música para disfrutar el momento. 
            </p>
            <a href="https://www.instagram.com/blackmetaltattoos" target="_blanck"><i className="fab fa-instagram"> /blackmetaltattoos</i></a>
            </div>  
        </div>
      </div>  
    );
};

export default MachineSection;