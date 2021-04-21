import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import "./styles/badgeFrom.css"
import InputCountry from './InputCountry'

const badgesForm  = (props) => {
  const handleCountry = (e) => {
    props.onChange(e)
  }
  return(
    <div className='form-container'>
      <h1>Nombre y Apellido</h1> 
      <form className="form-input">
        <div className="form-group col-8">
          <label>Nombre y Apellido</label>
          <input
            value={props.formValues.firstName} 
            name="firstName" onChange={props.onChange} 
            type="text" aria-label="First name" 
            className="form-control"/>
          <input 
            value={props.formValues.lastName} 
            name="lastName" onChange={props.onChange} 
            type="text" aria-label="First name" 
            className="form-control"/>
        </div>

        <div className="form-group col-8">
          <label>Correo</label>
          <input
            value={props.formValues.email} 
            name="email" onChange={props.onChange} 
            type="text" aria-label="First name" 
            className="form-control"/>
        </div>

        <div className="form-group col-8">
          <label>nacionalidad</label><br/>
          <InputCountry
            onChange={e => handleCountry(e) }
            ></InputCountry>
        </div>

        <div className="form-group col-8">
          <label>Tipo</label><br/>
          <select 
          className="form-select" 
          name='type'
          onChange={props.onChange}
          value={props.formValues.type}>
            <option value="0"></option>
            <option value="presencial">presencial</option>
            <option value="online">Online</option>
          </select>
        </div>
        <Link to="/">
        <button onClick={props.handleSubmit} className="btn btn-primary form-button">Guardar</button>
        </Link>
        
      </form>
  </div>
  )
    
}
export default badgesForm;