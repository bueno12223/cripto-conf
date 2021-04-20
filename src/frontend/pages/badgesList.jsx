import React from "react";
import { Link } from 'react-router-dom';
import Bundle from '../components/bundle';
import { connect } from 'react-redux';
import Loader from '../components/loader';
import "./styles/badgesList.css";

const BadgesList = (props) =>  {
  if(props.users.length == 0)(
    <Loader></Loader>
  )
  return(
    <React.Fragment>
      <div className="Badges__conatiner container">
        <ul className="Badges list-unstyled row">
          <section className='Badges_buttons_container'>
            <Link to="/badgesNew"><button className="btn btn-primary Badges__button">Nuevo Bage</button></Link>
            <Link to='/admin'><button className="btn btn-secondary Badges__button">Iniciar Sesión como admininstrador</button></Link>
          </section>
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