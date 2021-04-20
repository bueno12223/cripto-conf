import React from "react";
import batataLogo from '../images/batata.svg';
import { Link } from 'react-router-dom';
import "./styles/navbar.css";

const Navbar = () => {
    return(
        <header className="header row">
            <Link to="/" className='header__batataContainer'>
            <img className="header__batata" src={batataLogo} alt="logo de batata-bit"/>
            <h2 className ="header__words">Batata-bit</h2>
            </Link>
        </header>  
    )
}
export default Navbar