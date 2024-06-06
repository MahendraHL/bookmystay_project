/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import axios from "axios";
import HotelCarouselImages from "../HotelCarouselImages";
import HotelNavBar from "../HotelNavBar";
import HotelDetailsData from "../HotelDetailsData";
import { Container } from "react-bootstrap";

function EmeraldClarksInnSuites() {
  const [hotelName, setHotelName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchHotelDetails("Emerald Clarks Inn Suites"); // Adjust the hotel name here
  }, []);

  const fetchHotelDetails = async (hotelName) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/bookmystay/propertybyname/${encodeURIComponent(
          hotelName
        )}`
      );
      const responseData = response.data;
      sessionStorage.setItem("hotelName", responseData.data.hotelName);
      sessionStorage.setItem("propertyId", responseData.data.propertyId);

      if (responseData.error === false) {
        const hotelData = responseData.data;

        setHotelName(hotelData.hotelName);
        setDescription(hotelData.description); // Assuming description is also available in the response
        console.log(responseData.data);
      } else {
        console.error("Error fetching hotel details:", responseData.message);
      }
    } catch (error) {
      console.error("Error fetching hotel details:", error);
    }
  };

  return (
    <div>
      <HotelCarouselImages />
      <HotelNavBar />
      <Container fluid className="heading-container">
        <h2 className="section-name">{hotelName}</h2>
        <p>{description}</p>
      </Container>
      <HotelDetailsData />
      <Container
        className="location"
        style={{
          border: "1px solid black",
          width: "52%",
          alignContent: "left",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.707298314787!2d76.64183027565775!3d12.268076329910702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6fd7adb628db%3A0xd7c8c7ac593a0760!2sEmerald%20Clarks%20Inn%20Suites!5e0!3m2!1sen!2sin!4v1717056572629!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{
            border: "0",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </Container>{" "}
      <br />
    </div>
  );
}

export default EmeraldClarksInnSuites;
