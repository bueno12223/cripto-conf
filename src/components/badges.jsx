import React from 'react';
import { Link } from 'react-router-dom';

import './styles/badges.css';

class BadgesListItem extends React.Component {
  render() {
    return (
        <React.Fragment>
            <div className="BadgesListItem">
          <img src={this.props.badge.image} className="BadgesListItem__avatar" alt=""/>
          <div className="badges_description">
              <p>
              <strong>
            {this.props.badge.name}
          </strong>
          <br />{this.props.badge.origin.name}
          <br />{this.props.badge.species}

              </p>

              
                
          
        </div>
      </div>
        

        </React.Fragment>
      
     
    );
  }
}

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3></h3>
          <Link className="btn" to="/badges">
            registrarme
          </Link>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              
              <li key={badge.id}>
                
                <BadgesListItem badge={badge}></BadgesListItem>
               
                 
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;