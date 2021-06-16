import React from 'react';
import logo from '../assets/imgs/logo.png';
import cross from '../assets/imgs/cross.png';
import background from '../assets/imgs/home-background.jpg';
import '../assets/styles/components/FirstSection.scss';



const FirstSection = () => {
 
  return (

    <section className="home" id="home">
      <div className="home--img-container" style={{ backgroundImage: `url(${background})` }}>
          <article className="home--logo-container">
              <img src={logo}/>
           </article>
          <div className="home--tittle-container">
            <h1>BLACK METAL</h1>
            <div className="home--subtitle-container">
              <h2>TATTOO</h2><img src={cross}/><h2>STUDIO</h2>
            </div>
          </div>
      </div>
    </section>
  );
}
export default FirstSection;
