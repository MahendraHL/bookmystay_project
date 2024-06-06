import axios from "axios";
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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const [logState, setIsLogState] = useState(false);
  const navigate = useNavigate();

  const fetchData = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/bookmystay/signin",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data.data);
      window.sessionStorage.setItem("name", response.data.data.name);
      window.sessionStorage.setItem("email", response.data.data.email);
      window.sessionStorage.setItem(
        "customerid",
        response.data.data.customerid
      );

      if (response.data.message) {
        setError(response.data.message);
        alert(`Welcome to BookMyStay`);
        navigate("/", { state: { isLogged: true } });
      }
    } catch (error) {
      console.error("Login unsuccessful:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false || emailError || passwordError) {
      event.stopPropagation();
    } else {
      try {
        await fetchData(email, password);
      } catch (error) {
        console.error("Error during form submission:", error);
        alert("SignIn is fail");
      }
    }

    setValidated(true);
  };

  const getMoveToPage = () => {
    window.scrollTo(0, 0);
    navigate("/SignUp");
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if (/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(inputEmail)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid Gmail address");
    }
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&+=!]).{8,16}$/;
    if (passwordPattern.test(inputPassword)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password must be 8 to 16 characters with at least one digit, one letter, and one special character"
      );
    }
  };

  return (
    <div>
      <Container fluid className="login-bg">
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card>
              <Card.Body className="bg-input">
                <div className="mb-3 mt-4 form-container">
                  <h2 className="w-bold mb-4 text-center custom-heading">
                    BookingMyStay
                  </h2>
                  <p className="mb-5 text-center">
                    Please enter your login and password!
                  </p>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
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
                      {emailError && (
                        <Form.Text className="text-danger">
                          {emailError}
                        </Form.Text>
                      )}
                    </Form.Group>
                    <br />
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
                      {passwordError && (
                        <Form.Text className="text-danger">
                          {passwordError}
                        </Form.Text>
                      )}
                    </Form.Group>
                    <br />
                    <div className="d-grid">
                      <Button
                        className="btn btn-primary rounded-pill custom-button"
                        variant="primary"
                        type="submit"
                      >
                        SignIn
                      </Button>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="mb-0">
                        Don't have an account?{" "}
                        <span
                          className="text-primary fw-bold"
                          onClick={getMoveToPage}
                        >
                          Sign Up
                        </span>
                      </p>
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

export default Login;
