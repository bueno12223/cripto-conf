import React from 'react'
import Navbar from "./navbar"

function layout (props) {
        return (
            <div>
                <Navbar></Navbar>
                {props.children}

            </div>
                
            
            );
    
}
export default layout