import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/home.css';
import batataLogo from '../images/batata.svg';
import cripto from '../images/lentes-3.jpg';
import cripto2 from '../images/lentes.jpg';
import Navbar from "../components/navbar"

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        
        <div className="Home">
          <img className="none" src={cripto} alt=""/>
          <img className="none" src={cripto2} alt=""/>
          <div className="home__info">
           <img className="home__confBatata" src={batataLogo} alt=""/>
            <h1 className="home__confTitle home__titleOne">CRIPTO<br/></h1>
            <h1 className="home__confTitle home__titleTwo">CONF</h1>
            <h2 className="home__confDescription">Sistema de registro</h2>
            <Link to ="/"><button
 className="home__confButton" >Registrarme</button></Link>
             
         
       
          
          
            <div className="home_conf">

              

              </div>
            
          </div>
          
          </div>
        
            

         
      
      </React.Fragment>
      
    );
  }
}