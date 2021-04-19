import React, {Component} from 'react'
import "./styles/bundle.css"

export default class Bundle extends Component{
    render(){
        return(
                <div className="Bundle">
                    <div className="Bundle_section-name">
                        <img
                            className="Bundle_avatar"
                            src={this.props.url}
                            alt="Avatar"
                        />
                    <h1 className='bundle_name'>
                        {this.props.name}

                    </h1>
        </div>

        <div className="Bundle_section-info">
          <h3>{this.props.gender}</h3>
          <h3>{this.props.origin}</h3>
        </div>
      </div>
        )
    }
}