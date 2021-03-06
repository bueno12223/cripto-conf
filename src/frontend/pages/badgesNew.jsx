import React, {useState} from 'react'
import Bundle from "../components/bundle"
import BadgeForm from "../components/badgesForm"
import { registerUser } from '../actions';
import batata from "../images/batata.svg"

import "./styles/badgesNew.css"
import { connect } from 'react-redux';

const badgesNew = (props) => {
  const [data, setData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    type: null,
    nationality: null,
    showAlert: false
  })
  const handleChange = e => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    });
  }
  const handleSubmit = () => {
    const {firstName,lastName,email,type,nationality} = data
    if(firstName && lastName && email && type && nationality){
      props.registerUser(data, '/')
    }else{
      setData({...data, showAlert: true})
      setTimeout(() => setData({...data, showAlert: false}), 5000)
    }
  }
  return( 
    <div className="Badges_list">
    <div className=" row justify-content-center">
      <div className=" col-12">
          <Bundle
            firstName={data.firstName}
            lastName={data.lastName}
            email={data.email}
            type={data.type}
            url={batata}
            nationality={data.nationality}
          ></Bundle>
      </div>
      <div className=" form_container col-12">
        <BadgeForm
        showAlert={data.showAlert}
          onChange={handleChange}
          handleSubmit={handleSubmit}
          formValues={data}/>
      </div>
    </div>
    </div>
    )

} 
const mapStateToProps = {
  registerUser
}
export default connect(null, mapStateToProps)(badgesNew);