import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import "./styles/badgesNew.css"
import "./styles/badges.css"
import batata from "../images/batata.svg"

import Bundle from "../components/bundle"
import BadgeForm from "../components/badgesForm"


export default class badgesNew extends Component{
  state = {
    form: {
      name: '',
      origin: '',
      gender: '',
      specie: ""
    },
  };
  handleChange = e => {
    
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    if(e.type == "click"){
      console.log(this.state.form)
    }

  };
    render() {
        return(
              
              <div className="badges_container">
                <div className="Badges__hero"></div>
                <div className="badges">
                    <Bundle
                    name={this.state.form.name}
                    gender={this.state.form.gender }
                    origin={this.state.form.origin}
                    url={batata}
                    ></Bundle>
                </div>
    
                <div className="badges">
                  <BadgeForm
                    onChange={this.handleChange}
                    handleSubmit={this.handleChange}
                    formValues={this.state.form}
                  />
                </div>
              </div>
          )

} }