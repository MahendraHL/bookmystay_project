import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button';
import axios from "axios";

var colstyle1 = {
  textAlign: "center",
  padding: "5%"
}
var colstyle2 = {
  textAlign: "center",
  padding: "5%"
}
var tstyle = {
  backgroundColor: "transparent",
  border: "1px solid black"
}


function Feedback() {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState(window.sessionStorage.getItem("email"));
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    else {
      try {
        const res = await axios.post("http://localhost:8080/api/v1/bookmystay/postfeedback", {
          name, email, mobileNumber, message
        });

        if (res.data.message) {
          setError(res.data.message);
          alert(res.data.message);
          setName('');
          setEmail('');
          setMobileNumber('');
          setMessage('');
          setValidated(false); // Reset validated state after successful submission

        }
      } catch (error) {
        console.error("Error to subscribe:", error);
        setError('Please try again later.');
      }
    }
  };

  return (
    <Container style={{ backgroundColor: "whitesmoke" }}>
      <Row style={{ margin: "10%" }}>
        <Col style={colstyle1}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h3>Feedback</h3> <br />
            <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={tstyle} required />
            <Form.Control.Feedback type="invalid">
              Please provide a Name.
            </Form.Control.Feedback>
            <br />
            <Form.Control type="tel" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} style={tstyle} required />
            <Form.Control.Feedback type="invalid">
              Please provide a Mobile Number.
            </Form.Control.Feedback>
            <br />
            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={tstyle} required />
            <Form.Control.Feedback type="invalid">
              Please provide a Email.
            </Form.Control.Feedback>
            <br />
            <FloatingLabel controlId="floatingTextarea2" label="Message">
              <Form.Control as="textarea" placeholder="Leave a comment here" value={message} onChange={(e) => setMessage(e.target.value)} style={{ height: "100px", backgroundColor: "transparent", border: "1px solid black" }} required />
              <Form.Control.Feedback type="invalid">
                Please provide a Comments.
              </Form.Control.Feedback>
            </FloatingLabel>
            <br />
            <br />
            <Button as="input" type="submit" value="Submit" />
          </Form>
        </Col>
        <Col style={colstyle2}>
          <h3>Address</h3><br />
          <p>
            Book My Stay Private Limited
            <br />
            Near Hottagalli industrial Area,
            <br />
            6/858-M, Silent shores,
            <br />
            Mysore 570018,
            <br /> Karnataka, India.
            <br /><br />
            Mail : mailto:customercare@bookmystay.com
            <br />
            Mobile : 82868 66766
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Feedback;
