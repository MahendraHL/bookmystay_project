import React from "react";
import { Col, Container, Row, ProgressBar } from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

function HotelDetails({ amenities, rating, rooms, policies, terms, nearby }) {
  const handleBookNowClick = () => {
    const isAuthenticated = window.sessionStorage.getItem("email");

    if (isAuthenticated) {
      window.location.href = "/BookingHotel"; 
    } else {
      window.location.href = "/Login";
    }
  };

  return (
    <div className="hotel-details-container">
      {/* Amenities */}
      <div id="amenities" className="section">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h1 className="section-title">Amenities</h1>
            </Col>
          </Row>
        </Container>
        <br />
        <Container fluid className="amenities-container">
          <Row>
            {/* Render amenities */}
            {amenities.map((amenity, index) => (
              <Col key={index} xs={6} md={3} className="amenity-item">
                <div className="amenity-icon">{amenity.icon}</div>
                <span className="amenity-name">{amenity.name}</span>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Rating */}
      <div id="rating" className="section">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h1 className="section-title">Hotel Rating</h1>
            </Col>
          </Row>
        </Container>
        <div id="rating">
          <Container
            fluid
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "5px",
              backgroundColor: "#d6ece9f8",
            }}
          >
            <Row>
              <Col xs={12} md={12} className="d-flex">
                <Col sx={6} md={6}>
                  <h3>Customer Review</h3>
                  <h2 style={{ color: "green" }}>4.0</h2>
                  <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={4} readOnly />
                  </Stack>
                </Col>
                <Col sx={6} md={6}>
                  <p>Rating breakdown</p>
                  <ProgressBar
                    now={50}
                    label={`5.0 / 5.0`}
                    style={{ backgroundColor: "white" }}
                  />
                  <br />
                  <ProgressBar
                    now={80}
                    label={`4.0 / 5.0`}
                    style={{ backgroundColor: "white" }}
                  />
                  <br />
                  <ProgressBar
                    now={30}
                    label={`3.0 / 5.0`}
                    style={{ backgroundColor: "white" }}
                  />
                  <br />
                  <ProgressBar
                    now={10}
                    label={`2.0 / 5.0`}
                    style={{ backgroundColor: "white" }}
                  />
                  <br />
                  <ProgressBar
                    now={9}
                    label={`1.0 / 5.0`}
                    style={{ backgroundColor: "white" }}
                  />
                </Col>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Rooms */}
      <div id="room" className="section">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h1 className="section-title">Choose Your Room</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>Room Category</th>
                    <th>Shared Type</th>
                    <th>Price</th>
                    <th>Book</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render room options */}
                  {rooms.map((room, index) => (
                    <tr key={index}>
                      <td>
                        <img src={room.image} alt="" width={200} />
                      </td>
                      <td>{room.sharedType}</td>
                      <td>{room.price}</td>
                      <td>
                        <Link
                          to="/BookingHotel"
                          onClick={() => {
                            window.scrollTo(0, 0);
                            handleBookNowClick();
                          }}
                        >
                          <button className="btn btn-primary">Book Now</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Policies */}
      <div id="policy" className="section">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h2 className="section-title">Hotel Policies</h2>
              <ul className="policy-list">
                {/* Render policies */}
                {policies.map((policy, index) => (
                  <li key={index}>{policy}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Terms */}
      <div id="terms" className="section">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h2 className="section-title">Terms and Conditions</h2>
              <ul className="terms-list">
                {/* Render terms */}
                {terms.map((term, index) => (
                  <li key={index}>{term}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Nearby */}
      <div id="nearby" className="section">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h2 className="section-title">
                <LocationOnIcon /> What's Nearby?
              </h2>
              <ul className="nearby-list">
                {/* Render nearby locations */}
                {nearby.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HotelDetails;
