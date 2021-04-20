import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import "./styles/badgeFrom.css"

const badgesForm  = (props) => {
  return(
    <div className="form">
      <h1>Nuevo <b> Badge</b></h1> 
  <form className="form-input">
    <div className="form-group">
      <label>Nombre y Apellido</label><br/>
      <input
        onChange={props.onChange}
        className="form-control"
        type="text"
        name="name"
        value={props.formValues.name}
      />
    </div>

    <div className="form-group">
      <label>Especie</label><br/>
      <input
        onChange={props.onChange}
        className="form-control"
        type="text"
        name="gender"
        value={props.formValues.gender}
      />
    </div>

    <div className="form-group">
      <label>Origen</label><br/>
      <input
        onChange={props.onChange}
        className="form-control"
        type="text"
        name="origin"
        value={props.formValues.origin}
      />
    </div>
    <Link to="/badgesNew">
    <button onClick={props.handleSubmit} className="btn btn-primary form-button">
      Guardar
    </button>
    </Link>
    
  </form>
</div>
  )
    
}
export default badgesForm;