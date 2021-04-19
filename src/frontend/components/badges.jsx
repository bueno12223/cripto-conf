import React from 'react';
import { Link } from 'react-router-dom';
import Bundle from '../components/bundle';
import './styles/badges.css';

class BadgesListItem extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Bundle gender={this.props.badge.gender} origin={this.props.badge.origin.name} url={this.props.badge.image} name={this.props.badge.name}></Bundle>
        

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