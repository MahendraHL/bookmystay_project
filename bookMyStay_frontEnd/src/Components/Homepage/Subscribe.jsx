import React, { useState } from 'react';
import './Subscribe.css'; // Import your CSS file for styling
import { Container } from 'react-bootstrap';
import axios from 'axios';


const Subscribe = ({ onSearch }) => {
  const [emailId, setEmailId] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [setError] = useState('');

  const handleChange = (event) => {
    setEmailId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/v1/bookmystay/subscription", {
        emailId
      });
      if (res.data.message) {
        setError(res.data.message);
        alert(res.data.message)
        window.location.reload(); // Refresh the page
      } else {
        setError('');
        setError('already subscribed. Please choose another.');
        alert('already subscribed')
      }
    } catch (error) {
      console.error("Error to subscribe:", error);
      setError('Please try again later.');
    }
  };



  return (
    <Container fluid style={{ width: "100%", height: "30%", justifyContent: "center", textAlign: "center", backgroundColor: "midnightblue", padding: "3%", color: "white" }}>
      <p style={{ font: "32px sans blue", fontWeight: "bolder" }}>Stay in the know</p>
      <p style={{ font: "20px sans blue" }}>Sign up to get marketing emails from Booking.com, including promotions, rewards, travel experiences and information about Booking.com’s and Booking.com Transport Limited’s products and services.</p><br />
      <form className={`search-bar ${isFocused ? 'focused' : ''}`} onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter your mail"
          value={emailId}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </Container>
  );
};

export default Subscribe;
