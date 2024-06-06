import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const SignUp = () => {
  const [contactPersonName, setContactPersonName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [locationId, setLocationId] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [availableRooms, setavailableRooms] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [description, setdescription] = useState('');
  const [roomType, setRoomType] = useState('');
  const [price, setPrice] = useState('');
  const [validated, setValidated] = useState(false)
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false || emailError ||  phoneNumberError) {
      event.stopPropagation();
      setValidated(true);
    }
      else{

    try {
      const res = await axios.post("http://localhost:8080/api/v1/bookmystay/property", {
        contactPersonName,
        hotelName,
        locationId,
        availableRooms,
        isAvailable,
        price,
        roomType,
        email,
        phoneNumber

      });
      if (res.data.error) {
        setError(res.data.message);
      } else {
        setError('');
        if (res.data.message) {
          alert(res.data.message)
          window.location.reload(); // Refresh the page
        } 
        else {
          setError('Email and PropertyId is already present. Please choose another.');
        }
      }
    } catch (error) {
      console.error("Error to create:", error);
      setError('Please try again later.');
    }
  }
  };

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    const cleanedPhoneNumber = inputPhoneNumber.replace(/\D/g, '');
    if (cleanedPhoneNumber.length === 10) {
      setPhoneNumber(cleanedPhoneNumber);
      setPhoneNumberError('');
    } else if (cleanedPhoneNumber.length < 10) {
      setPhoneNumber(cleanedPhoneNumber);
      setPhoneNumberError('Phone number must have 10 digits');
    }
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if (/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(inputEmail)) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid Gmail address');
    }
  };
  

  return (
    <div >
      <Container fluid className="signup-bg">
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card>
              <Card.Body className='bg-input'>
                <div className="mb-3 mt-4 form-container">
                  <h2 className="w-bold mb-4 text-center custom-heading">List Your Property</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Contact Person</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        value={contactPersonName}
                        onChange={(e) => setContactPersonName(e.target.value)}
                        required
                        className="rounded-pill custom-input"
                      />
                       <Form.Control.Feedback type="invalid">
            Please provide a valid Name.
          </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicPhoneNumber">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="Enter your Phone Number"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            required
                            className="rounded-pill custom-input"
                          />
                           <Form.Control.Feedback type="invalid">
            Please provide a valid Phone Number.
          </Form.Control.Feedback>
                          {phoneNumberError && (
                            <Form.Text className="text-danger">
                              {phoneNumberError}
                            </Form.Text>
                          )}
                        </Form.Group>
                   
                        <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="rounded-pill custom-input"
                      />
                       <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
                      {emailError && (
                        <Form.Text className="text-danger">
                          {emailError}
                        </Form.Text>
                      )}
                    </Form.Group>

                    <Form.Group controlId="formBasicHotelName">
                      <Form.Label>Hotel Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Hotel name"
                        value={hotelName}
                        onChange={(e) => setHotelName(e.target.value)}
                        required
                        className="rounded-pill custom-input"
                      />
                       <Form.Control.Feedback type="invalid">
            Please provide a valid Hotel Name.
          </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicHotelName">
                      <Form.Label>Hotel Description</Form.Label>
                      <Form.Control
                      as="textarea" 
                      rows={2}
                        placeholder="Enter Hotel description"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        required
                        className="rounded-pill custom-input"
                      />
                       <Form.Control.Feedback type="invalid">
            Please provide a hotel description.
          </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
          controlId="formHorizontalRoomType"
        >
          <Form.Label>
            Stay Type
          </Form.Label>
            <Form.Select
              name="roomType"
              onChange={(e) => setRoomType(e.target.value)}
              required
              className="rounded-pill custom-input"
              value={roomType}
            >
              <option value="">Select</option>
              <option value="HOTEL">Hotel</option>
              <option value="APARTMENT">Apartment</option>
              <option value="RESORT">Resort</option>
              <option value="VILLA">Villa</option>
              <option value="CABIN">Cabin</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
            Please Select a valid Room type.
          </Form.Control.Feedback>
          </Form.Group>

                    <Form.Group controlId="formBasicAvailableRooms">
                      <Form.Label>Available Rooms</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Available Rooms "
                        value={availableRooms}
                        onChange={(e) => setavailableRooms(e.target.value)}
                        required
                        className="rounded-pill custom-input"
                      />
                       <Form.Control.Feedback type="invalid">
            Please provide a valid available Rooms.
          </Form.Control.Feedback>
                    </Form.Group>
        

                    <Form.Group controlId="formBasicPrice">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Price "
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="rounded-pill custom-input"
                      />
                       <Form.Control.Feedback type="invalid">
            Please provide a valid Price.
          </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group
          controlId="formHorizontalRoomType"
        >
          <Form.Label>
            Location
          </Form.Label>
            <Form.Select
              name="location"
              onChange={(e) => setLocationId(e.target.value)}
              required
              className="rounded-pill custom-input"
              value={locationId}
            >
              <option value="">Select</option>
              <option value="1">MYSURU</option>
              <option value="2">BENGALURU</option>
              <option value="3">MURUDESHWAR</option>
              <option value="4">MANGALORE</option>
            
            </Form.Select>
            <Form.Control.Feedback type="invalid">
            Please select a valid location.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          controlId="formHorizontalIsAvailable"
        >
          <Form.Label>
            Is Available
          </Form.Label>
            <Form.Select
              name="isAvailable"
              onChange={(e) => setIsAvailable(e.target.value)}
              required
              className="rounded-pill custom-input"
              value={isAvailable}
            >
              <option value="">Select</option>
              <option value="true">YES</option>
              <option value="false">NO</option>
            
            </Form.Select>
            <Form.Control.Feedback type="invalid">
            Please select a valid .
          </Form.Control.Feedback>
        </Form.Group>
                    <br /><br />
                    <div className="d-grid">
                      <Button variant="primary" type="submit" className="btn btn-primary rounded-pill custom-button">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div> 
  );
};

export default SignUp;
