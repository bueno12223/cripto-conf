import React from "react"
import batataLogo from '../images/batata.svg';
import {Link } from 'react-router-dom';
import "./styles/navbar.css"

const Navbar = () => {
    return(
        <div className="header">
            <div className="header__batataContainer">
                <Link to="/">
                <img className="header__batata" src={batataLogo} alt="logo de batata-bit"/>
                <h4 className ="header__words">Batata-bit</h4>
                </Link>
           
            </div>
            
           

        </div>
           

            
    )
}
export default Navbar