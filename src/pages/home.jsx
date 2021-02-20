import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/home.css';
import batataLogo from '../images/batata.svg';
import cripto from '../images/lentes.jpg';
import Navbar from "../components/navbar"

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        
        <div className="Home">
          <img className="home__background" src={cripto} alt=""/>
          <div className="home__info">
          
            <div className="home_conf">
            <img className="home__confBatata" src={batataLogo} alt=""/>
            <h1 className="home__confTitle home__titleOne">CRIPTO<br/></h1>
            <h1 className="home__confTitle home__titleTwo">CONF</h1>
            <h2 className="home__confDescription">Sistema de registro</h2>
          <button className="home__confButton">Registrarme</button>
          </div>
          
          </div>
          
            
          </div>
         
      
      </React.Fragment>
      
    );
  }
}