import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import toggle from '../assets/imgs/toggle.png';


const Header = () => (

//    <header>  
//       <nav>
//          <Link to='/'>
//             <div className="logo">
//             BLACK METAL TATTOO
//             </div>
//          </Link>   
//          <label for="btn" className="icon">
//          <span className="fa fa-bars"></span>
//          </label>
//          <input type="checkbox" id="btn"/>
//          <ul>
//             <li>
//                <label for="btn-1" className="show">ARTISTAS +</label>
//                <a href="#">ARTISTAS</a>
//                <input type="checkbox" id="btn-1"/>
//                <ul>
//                   <li><a href="#">Lourdes Ávalos</a></li>
//                   <li><a href="#">Agustín Ortega</a></li>
//                   <li><a href="#">Facundo Gritti</a></li>
//                   <li><a href="#">Santiago Mansilla</a></li>
//                   <li><a href="#">Brian Acosta</a></li>
//                </ul>
//             </li>
//             <li><a href="#">TATUAJES</a></li>
//             <li><a href="#">PIERCING</a></li>
//             <li><a href="#">CUADROS</a></li>
//             <li><a href="#">UBICACIÓN</a></li>
//          </ul>
//       </nav>
//   </header>

      <header>
         <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
               <a className="d-lg-none letter-logo" href="#">BLACK METAL TATTOO'S</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" ><img className="toggle" src={toggle}/></span>
               </button>
               <div className="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-lg-0">
                  <li className="nav-item">
                        <a  href="#tattooers">ARTISTAS</a>
                     </li>
                     
                     {/* <li className="nav-item dropdown">
                        <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ARTISTAS
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <li><a className="dropdown-item" href="#">AGUSTIN ORTEGA</a></li>
                           <li><hr className="dropdown-divider"/></li>
                           <li><a className="dropdown-item" href="#">LOURDES AVALOS</a></li>
                           <li><hr className="dropdown-divider"/></li>
                           <li><a className="dropdown-item" href="#">FACUNDO GRITTI</a></li>
                           <li><hr className="dropdown-divider"/></li>
                           <li><a className="dropdown-item" href="#">BRIAN ACOSTA</a></li>
                           <li><hr className="dropdown-divider"/></li>
                           <li><a className="dropdown-item" href="#">SANTIAGO MANSILLA</a></li>
                        </ul>
                     </li> */}
                     <li className="nav-item">
                        <a  href="#tattoos">TATUAJES</a>
                     </li>
                     <li className="nav-item">
                        <a  href="#piercings">PIERCING'S</a>
                     </li>
                  </ul>
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <a  href="#paintings">CUADROS</a>
                     </li>
                     <li className="nav-item">
                        <a  href="#location">UBICACION</a>
                     </li>
                     <li className="nav-item ">
                        <a href="#about">QUIENES SOMOS</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
);

export default Header;
