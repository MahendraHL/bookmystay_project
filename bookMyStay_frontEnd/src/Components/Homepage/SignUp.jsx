import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validated, setValidated] = useState(false)
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    if (form.checkValidity() === false || emailError || passwordError || phoneNumberError) {
      event.stopPropagation();
      setValidated(true);
    }
      else{

    try {
      const res = await axios.post("http://localhost:8080/api/v1/bookmystay/postcustomer", {
        name, phoneNumber, email,password
      });
      if (res.data.error) {
        setError(res.data.message);
      } else {
        setError('');
        if (res.data.message) {
          alert(res.data.message)
          navigate("/Login");
          window.location.reload(); // Refresh the page
          
        } 
        else {
          setError('Email is Already Register. Please Login.');
        }
      }
    } catch (error) {
      console.error("Error to register:", error);
      setError('Failed to register. Please try again later.');
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

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&+=!]).{8,16}$/;
    if (passwordPattern.test(inputPassword)) {
      setPasswordError('');
    } else {
      setPasswordError('Password must be 8 to 16 characters with at least one digit, one letter, and one special character');
    }
  };

  
  

  return (
    <div>
      <Container fluid className="signup-bg">
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card>
              <Card.Body className='bg-input'>
                <div className="mb-3 mt-4 form-container">
                  <h2 className="w-bold mb-4 text-center custom-heading">BookingMyStay</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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

                      <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                className="rounded-pill custom-input"
                              />
                              <Form.Control.Feedback type="invalid">
            Please provide a Password.
          </Form.Control.Feedback>
                              {passwordError && (
                                <Form.Text className="text-danger">
                                  {passwordError}
                                </Form.Text>
                              )}
                            </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="rounded-pill custom-input"
                      />
                      <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
                    </Form.Group> <br /><br />
                    <div className="d-grid">
                      <Button variant="primary" type="submit" className="btn btn-primary rounded-pill custom-button">
                        Sign Up
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
