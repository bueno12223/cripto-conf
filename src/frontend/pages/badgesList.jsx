import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, Form , FormGroup } from 'react-bootstrap';
import Bundle from '../components/bundle';
import Loader from '../components/loader';
import "./styles/badgesList.css";

const BadgesList = (props) =>  {
  const [display, setDisplay] = useState(false);

  const handleClose = () => setDisplay(false);
  const handleShow = () => setDisplay(true);

  if(props.users.length == 0)(
    <Loader></Loader>
  )
  return(
    <React.Fragment>
      <div className="Badges__conatiner">
        <ul className="Badges list-unstyled row">
          <section className='Badges_buttons_container'>
          <Link to="/badgesNew"><Button size="lg" variant="primary" className="Badges__button">Nuevo Bage</Button></Link>
          <Button variant="primary" size="lg" onClick={handleShow} className="btn btn-secondary Badges__button">Cambiar mis datos</Button>
          </section>
          <Modal style={{ marginTop: '25%', color: 'var(--warm-black)' }} show={display} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Buscar usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Escribe tu email y recibirás un correo con un link para modificar tu usuario
              <Form.Group>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Enviar
              </Button>
            </Modal.Footer>
      </Modal>
            {props.users.map(badge => {

              return (
                <li key={badge.name}>
                  <Bundle
                    firstName={badge.firstName}
                    lastName={badge.lastName}
                    type={badge.type}
                    email={badge.email}
                    nationality={badge.nationality}>
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