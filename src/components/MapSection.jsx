import React from 'react';
import '../assets/styles/components/MapSection.scss';
import GoogleMaps from 'simple-react-google-maps';
import RedButton from './RedButton';


const MapSection = () => (

    <section className="mapSection" id="location">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 data-container">
              <h3>UBICACIÓN</h3>
              <p>Tte. Gral. Bergamini 2760, El Palomar, Provincia de Buenos Aires.</p>
              <RedButton text="Abrir en Google Maps"/>
          </div>
          <div className="col-lg-6 d-flex justify-content-center m-lg-auto map-container">
            <GoogleMaps
            apiKey={"AIzaSyArbBxbHgxIQ00o9eSK0e0xFSOIdY-ipI8"}
            style={{height:"400px", width:"270px"}}
            zoom={16}
            center={{
              lat: -34.630451078448644,
              lng: -58.58095296406432
            }}
            markers={[{ lat: -34.630451078448644, lng: -58.58095296406432 }]}
            />
          </div>
        </div>
      </div>
    </section>
)

export default MapSection;