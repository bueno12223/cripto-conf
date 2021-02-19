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
          <img className="home__infoBatata" src={batataLogo} alt=""/>
            
            <div className="home_conf">
            <h1 className="home__confTitle home__titleOne">CRIPTO<br/></h1>
            <h1 className="home__confTitle home__titleTwo">CONF</h1>
          </div>
          <button></button>
          </div>
          
            
          </div>
         
      
      </React.Fragment>
      
    );
  }
}