import { Container, NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import CallIcon from '@mui/icons-material/Call';
import BusinessIcon from '@mui/icons-material/Business';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();


  const dispalyAlert = () => {
    alert('EmailUs:- mailto:bookmystay@gmail.com ContactUs:- 9638527410')
  }

  const feedBackForm = () => {
    navigate("/ListYourProperty");
  }

  const titleStyle = {
    color: "#1F75FE",
    fontStyle: "italic",
    fontSize: "50px",
    textDecoration: "underline"
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top" style={{ backgroundColor: "blue", fontFamily: 'fantasy', fontWeight: 'lighter', fontStyle: 'italic' }}>
        <Container fluid>

          <div style={titleStyle}>
            BookMyStay
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto"></Nav>

            <Nav>

              <NavLink onClick={dispalyAlert}><CallIcon></CallIcon>24/7 Help / Support</NavLink>
              <NavLink onClick={feedBackForm}> <BusinessIcon></BusinessIcon>List Your Property</NavLink>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >

    </>
  );
}

export default NavBar;