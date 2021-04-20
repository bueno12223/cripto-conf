import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import Bundle from "../components/bundle"
import BadgeForm from "../components/badgesForm"
import { onSubmit } from '../actions';
import batata from "../images/batata.svg"

import "./styles/badgesNew.css"
import { connect } from 'react-redux';

const badgesNew = (props) => {
  const [data, setData] = useState({
    name: null,
    email: null,
    type: null,
    nacionality: null
  })
  const handleChange = e => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    });
  }
  const handleSubmit = () => {
    props.onSubmit(data)
  }
  return( 
    <div className="badges_container">
      <div className="Badges__hero"></div>
      <div className="badges">
          <Bundle
            name={data.name}
            email={data.email}
            type={data.type}
            url={batata}
            nacionality={data.nacionality}
            onSubmit={handleSubmit()}
          ></Bundle>
      </div>
      <div className="badges">
        <BadgeForm
          onChange={handleChange}
          handleSubmit={handleChange}
          formValues={data}/>
      </div>
    </div>
    )

} 
const mapStateToProps = {
  onSubmit
}
export default connect(null, mapStateToProps)(badgesNew);