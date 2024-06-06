import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Alert,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import axios from "axios";

const BookingHotel = () => {
  const [formData, setFormData] = useState({
    propertyId: sessionStorage.getItem("propertyId"),
    checkInDate: "",
    checkOutDate: "",
    email: sessionStorage.getItem("email"),
    noOfPerson: "",
    hotelName: sessionStorage.getItem("hotelName"),
  });
  const [emailError, setEmailError] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");

  const hotelName = sessionStorage.getItem("hotelName");
  const propertyId = sessionStorage.getItem("propertyId");
  const email = sessionStorage.getItem("email");

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false || emailError) {
      event.stopPropagation();
      setValidated(true);
    } else {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/bookmystay/postbooking",
          formData
        );

        if (res.data.error) {
          setError(res.data.error);
        } else {
          setError("");
          if (res.data.message) {
            alert(res.data.message);
            window.location.reload();
          }
        }
      } catch (error) {
        console.error("Error to create:", error);
        setError("Hotel is not present.");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: inputEmail,
    }));
    if (/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(inputEmail)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid Gmail address");
    }
  };

  const handleCheckInDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      checkInDate: selectedDate,
      checkOutDate: formatDate(
        new Date(
          new Date(selectedDate).setDate(new Date(selectedDate).getDate() + 1)
        )
      ),
    }));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <Container fluid className="booking-bg">
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card>
              <Card.Body className="bg-booking">
                <div className="mb-3 mt-4 form-container">
                  <h2 className="w-bold mb-4 text-center custom-heading">
                    Booking
                  </h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <br />

                    <Form.Group controlId="formHorizontalHotelName">
                      <Form.Label>Hotel Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Hotel Name"
                        name="hotelName"
                        value={hotelName}
                        onChange={handleInputChange}
                        required
                        className="rounded-pill custom-input"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Hotel name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="rounded-pill custom-input"
                      />
                      {emailError && (
                        <Form.Text className="text-danger">
                          {emailError}
                        </Form.Text>
                      )}
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckInDate">
                      <Form.Label>Check In Date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter your Check in date"
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={handleCheckInDateChange}
                        min={formatDate(new Date())} // Set minimum date as today
                        required
                        className="rounded-pill custom-input"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Check In Date.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckOutDate">
                      <Form.Label>Check Out Date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter your Check out date"
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={handleInputChange}
                        min={formatDate(new Date(formData.checkInDate))} // Set minimum date as selected Check In date
                        required
                        className="rounded-pill custom-input"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Check Out Date.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <br />
                    <Form.Group controlId="formHorizontalNoOfPerson">
                      <Form.Label>Add Person</Form.Label>
                      <Form.Select
                        name="noOfPerson"
                        onChange={handleInputChange}
                        required
                        className="rounded-pill custom-input"
                        value={formData.noOfPerson}
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Form.Select>
                    </Form.Group>
                    <br />
                    <div className="d-grid">
                      <Button
                        className="btn btn-primary rounded-pill custom-button"
                        variant="primary"
                        type="submit"
                      >
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

export default BookingHotel;
