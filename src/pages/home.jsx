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
          <img src={cripto} alt=""/>
          <div className="home__batata">
            
          </div>
          <div className="home__logo"></div>
          <button></button>
        </div>
      
      </React.Fragment>
      
    );
  }
}