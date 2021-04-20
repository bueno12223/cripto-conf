import React from "react";
import { Link } from 'react-router-dom';
import Bundle from '../components/bundle';
import { connect } from 'react-redux';
import Hero from '../components/hero';
import "./styles/badges.css";

const BadgesList = (props) =>  {
  return(
    <React.Fragment>
      <div className="Badges__conatiner">
        <Link to="/badgesNew"><button className="btn btn-primary">Nuevo Bage</button></Link>
          <ul className="list-unstyled containter">
            {props.users.map(badge => {
              return (
                <li>
                  <Bundle
                    key={badge.id}  
                    name={badge.name}
                    type={badge.type}
                    email={badge.email}
                    nacionality={badge.nacionality}>
                  </Bundle>  
                </li>
              );
            })}
          </ul> 
      </div>
  </React.Fragment>
        )
}

const mapStateToProps = state => {
    return {users: state}
}
export default connect(mapStateToProps, null)(BadgesList);