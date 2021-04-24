import React from 'react';
import Navbar from "./navbar";
import Hero from './hero';

function Layout (props) {
        return (
            <div>
                <Navbar></Navbar>
                <Hero></Hero>
                {props.children}
            </div>
            );
    
}
export default Layout