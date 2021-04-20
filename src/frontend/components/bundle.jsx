import md5 from 'md5';
import React from 'react'
import "./styles/bundle.css"

const Bundle = (props) => {
    return(
        <div className="Bundle"> 
            <div className="Bundle_section-name">
                <img className='Bundle_avatar' src={props.email ? `https://www.gravatar.com/avatar/${md5(props.email)}?d=identicon`: null}alt="Avatar"/>
                <h1 className='bundle_name'>{props.name}</h1>
            </div>
            <div className="Bundle_section-info">
                <h3>{props.type}<br></br>{props.nacionality}</h3> 
            </div>
        </div>
        )
}
export default Bundle;