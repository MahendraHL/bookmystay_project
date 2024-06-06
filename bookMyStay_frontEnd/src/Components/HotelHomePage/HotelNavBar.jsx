import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link as ScrollLink } from 'react-scroll';

function HotelNavBar() {
  return (
    <div>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <ScrollLink 
            activeClass="active"
            to="section-name"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            style={{ color: "black", fontSize: "18px", fontWeight: "500" }}
          >
            Description
          </ScrollLink>
        </Nav.Item>

        <Nav.Item>
          <ScrollLink 
            activeClass="active"
            to="amenities"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            style={{ color: "black", fontSize: "18px", fontWeight: "500" }}
          >
            Amenities
          </ScrollLink>
        </Nav.Item>
        
        <Nav.Item>
          <ScrollLink 
            activeClass="active"
            to="rating"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            style={{ color: "black", fontSize: "18px", fontWeight: "500" }}
          >
            Hotel Rating & Review
          </ScrollLink>
        </Nav.Item>
        
        <Nav.Item>
          <ScrollLink 
            activeClass="active"
            to="room"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            style={{ color: "black", fontSize: "18px", fontWeight: "500" }}
          >
            Room Category
          </ScrollLink>
        </Nav.Item>
        
        <Nav.Item>
          <ScrollLink 
            activeClass="active"
            to="policy"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            style={{ color: "black", fontSize: "18px", fontWeight: "500" }}
          >
            Hotel Policies
          </ScrollLink>
        </Nav.Item>
        
        <Nav.Item>
          <ScrollLink 
            activeClass="active"
            to="terms"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            style={{ color: "black", fontSize: "18px", fontWeight: "500" }}
          >
            Terms and Conditions
          </ScrollLink>
        </Nav.Item>
        
        <Nav.Item>
          <ScrollLink 
            activeClass="active"
            to="nearby"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            style={{ color: "black", fontSize: "18px", fontWeight: "500" }}
          >
            Near By
          </ScrollLink>
        </Nav.Item>
        
        <Nav.Item>
          <ScrollLink 
            activeClass="active"
            to="location"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            style={{ color: "black", fontSize: "18px", fontWeight: "500" }}
          >
            Location
          </ScrollLink>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default HotelNavBar;
