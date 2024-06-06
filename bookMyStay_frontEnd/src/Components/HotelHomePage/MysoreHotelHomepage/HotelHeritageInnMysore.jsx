/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import axios from "axios";
import HotelCarouselImages from "../HotelCarouselImages";
import HotelNavBar from "../HotelNavBar";
import HotelDetailsData from "../HotelDetailsData";
import { Container } from "react-bootstrap";

function HotelHeritageInnMysore() {
  const [hotelName, setHotelName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchHotelDetails("Hotel Heritage Inn Mysore"); // Adjust the hotel name here
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.8356318731558!2d76.58139947613829!3d12.39393409603168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf791612966b3b%3A0xc2b61a540835f870!2sHeritage%20Shelters%20Resort!5e0!3m2!1sen!2sin!4v1714331538331!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ fontFamily: "Serif", backgroundColor: "whitesmoke" }}
        ></iframe>
      </Container>{" "}
      <br />
    </div>
  );
}

export default HotelHeritageInnMysore;
