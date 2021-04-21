import md5 from 'md5';
import React from 'react';
import Batata from '../images/batata.svg'
import "./styles/bundle.css"

const Bundle = (props) => {
    return(
        <div className="Bundle"> 
            <div className="Bundle_section-name">
                <img className='Bundle_avatar' src={props.email ? `https://www.gravatar.com/avatar/${md5(props.email)}?d=identicon`: Batata}alt="Avatar"/>
                <h1 className='bundle_name'>{props.firstName}<br></br>{props.lastName}</h1>
            </div>
            <div className="Bundle_section-info">
                <h3>{props.type}</h3>
                <img className='Bundle_section_img' src={props.nationality ? `https://flagcdn.com/${props.nationality.toLowerCase()}.svg`: null} alt=""/>
            </div>
        </div>
        )
}
export default Bundle;