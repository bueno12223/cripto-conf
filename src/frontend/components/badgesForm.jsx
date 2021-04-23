import React from 'react';
import { Alert, Button, Fade } from 'react-bootstrap';
import "./styles/badgeFrom.css"
import InputCountry from './InputCountry'

const badgesForm  = (props) => {
  const handleCountry = (e) => {
    props.onChange(e)
  }
  console.log(props.showAlert)
  return(
    <div className='form-container'>
      <Alert  variant='danger' transition={Fade} show={props.showAlert}  >
        Aún no has llenado todos los campos
      </Alert>  
      <h1>Nombre y Apellido</h1> 
      <form className="form-input">
        <div className="form-group col-8">
          <label>Nombre y Apellido</label>
          <input           
            value={props.formValues.firstName} 
            name="firstName" onChange={props.onChange} 
            type="text" aria-label="First name" 
            className="form-control"
            required/>
          <input 
            value={props.formValues.lastName} 
            name="lastName" onChange={props.onChange} 
            type="text" aria-label="First name" 
            className="form-control"
            required/>
        </div>

        <div className="form-group col-8">
          <label>Correo</label>
          <input
            required
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
            required
            className="form-select" 
            name='type'
            onChange={props.onChange}
            value={props.formValues.type}>
            <option defaultValue></option>
            <option value="presencial">presencial</option>
            <option value="online">Online</option>
          </select>
        </div>
        <Button variant="primary" size="lg" onClick={ props.handleSubmit } className="form-button">Guardar</Button>
        
      </form>
  </div>
  )
    
}
export default badgesForm;