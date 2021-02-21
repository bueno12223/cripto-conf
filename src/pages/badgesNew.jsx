import React from "react"
import {Link } from 'react-router-dom'
import "./styles/badgesNew.css"

import Bundle from "../components/bundle"

export default class badgesNew extends React.Component{
    render() {
        return(
            <React.Fragment>
              <div className="badges_container">
                <div className="badges_bundle">
                    <Bundle
                    name="Jesus"
                    origin="Earth"
                    gender="Human"
                    url="https://lh3.googleusercontent.com/ogw/ADGmqu_BLKAAVGV6W6mkmvxf_yGp10nXixihjFm9BLF3wQ=s32-c-mo"
                    ></Bundle>
                </div>
    
                <div className="badges_form">
                  {/* <BadgeForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues={this.state.form}
                  /> */}
                </div>
              </div>
          </React.Fragment>)

} }