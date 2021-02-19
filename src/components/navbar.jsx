import React from "react"
import batataLogo from '../images/batata.svg';
import "./styles/navbar.css"

const Navbar = () => {
    return(
        <div className="header">
            <div className="header__batataContainer">
            <img className="header__batata" src={batataLogo} alt="logo de batata-bit"/>
            <h4 className ="header__words">Batata-bit</h4>
            </div>
            {/* <img className="header__login" src="https://img.icons8.com/metro/52/ffffff/user-male-circle.png"/> */}
           

        </div>
           

            
    )
}
export default Navbar