// BookingCancel.jsx

import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";
import { Container, Form, Alert, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BookingCancel() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [error, setError] = useState("");
  const [disabledButtons, setDisabledButtons] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getBookings();
  }, []);

  useEffect(() => {
    const disabledButtonsFromStorage =
      JSON.parse(localStorage.getItem("disabledButtons")) || [];
    setDisabledButtons(disabledButtonsFromStorage);
  }, []);

  const getBookings = async () => {
    try {
      const customerId = sessionStorage.getItem("customerid");
      console.log("Customer ID:", customerId);
      if (!customerId) {
        console.log("Customer ID not found in sessionStorage");
        return;
      }

      const response = await axios.get(
        `http://localhost:8080/api/v1/bookmystay/getbooking/${customerId}`
      );
      console.log("fetching", response);

      // Check if response data exists and is an array
      if (response.data && Array.isArray(response.data.data)) {
        console.log(response.data.data);
        setBookings(response.data.data);
      } else {
        console.log("Invalid response data:", response.data);
      }
    } catch (error) {
      console.log("error while fetching", error);
    }
  };

  const handleCancelBooking = (booking) => {
    setSelectedBooking(booking);
    setShowFormModal(true);
  };

  const handleCloseForm = () => {
    setShowFormModal(false);
    setError(""); // Clear error on modal close
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8080/api/v1/bookmystay/cancelbooking",
        {
          email: sessionStorage.getItem("email"),
          hotelName: selectedBooking.hotelName,
          bookingId: selectedBooking.bookingId,
          isCancelled: true,
        }
      );

      if (response.data.message) {
        alert("Booking Cancelled");
        // Update the state to reflect the cancelled booking
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking.bookingId === selectedBooking.bookingId
              ? { ...booking, cancelled: true }
              : booking
          )
        );
        // Update the disabledButtons state to disable the cancelled button
        setDisabledButtons((prevButtons) => [
          ...prevButtons,
          selectedBooking.bookingId,
        ]);
        // Close the booking cancelled form modal
        handleCloseForm();
        // Update localStorage with the modified disabledButtons
        localStorage.setItem(
          "disabledButtons",
          JSON.stringify([...disabledButtons, selectedBooking.bookingId])
        );
      } else {
        console.error("Error:", response.data.error);
        setError(response.data.error); // Set error message if cancellation fails
      }
    } catch (error) {
      console.error("Booking Cancelled:", error);
      setError("Error cancelling booking"); // Set generic error message for network errors
    }
  };

  const handleLogout = () => {
    // Clear disabledButtons state when user logs out
    setDisabledButtons([]);
  };

  return (
    <>
      <h2
        className="w-bold mb-4 text-center custom-heading"
        style={{
          marginBottom: "20px",
          color: "#333",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Your Booking Details
      </h2>
      {bookings.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>
          You haven't booked any hotels yet.
        </p>
      ) : (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table aria-label="simple table" className="custom-table">
            <TableBody>
              <TableRow>
                <TableCell>Booking Id</TableCell>
                <TableCell>Hotel Name</TableCell>
                <TableCell>Check-In Date</TableCell>
                <TableCell>Check-out Date</TableCell>
                <TableCell>Number of person</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
              {bookings.map((booking, index) => (
                <TableRow key={index}>
                  <TableCell>{booking.bookingId}</TableCell>
                  <TableCell>{booking.hotelName}</TableCell>
                  <TableCell>{booking.checkInDate}</TableCell>
                  <TableCell>{booking.checkOutDate}</TableCell>
                  <TableCell>{booking.noOfPerson}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ mr: 1 }}
                      onClick={() => handleCancelBooking(booking)}
                      disabled={
                        booking.cancelled ||
                        disabledButtons.includes(booking.bookingId)
                      }
                    >
                      {booking.cancelled ? "Cancelled" : "Booking Cancel"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Booking Cancelled Form Modal */}
      <Modal show={showFormModal} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Cancel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  defaultValue={sessionStorage.getItem("email")}
                  readOnly
                />
              </Form.Group>
              <Form.Group controlId="formBasicHotelName">
                <Form.Label>Hotel Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Hotel Name"
                  defaultValue={
                    selectedBooking ? selectedBooking.hotelName : ""
                  }
                  readOnly
                />
              </Form.Group>
              <Form.Group controlId="formBasicBookingId">
                <Form.Label>Booking ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Booking ID"
                  defaultValue={
                    selectedBooking ? selectedBooking.bookingId : ""
                  }
                  readOnly
                />
              </Form.Group>
              <Alert variant="danger" show={error !== ""}>
                {error}
              </Alert>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookingCancel;
