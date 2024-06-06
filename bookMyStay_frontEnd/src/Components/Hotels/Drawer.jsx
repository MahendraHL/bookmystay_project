import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import './Drawer.css'; // Import your CSS file

function Drawer() {
    return (
        <div className="drawer-container"> 
            <Container fluid className="scroll-container">

                <Row>
                    <Col>
                        <Card border="light" className="filter-card">
                            <Card.Header>Filter By:</Card.Header>

                            <Card.Body>
                                <Card.Title>Stars</Card.Title>
                                <Card.Text>
                                    <Form >
                                        <input
                                            type="text"
                                            placeholder="Search for hotels or places..."
                                            className="filter-input" />
                                    </Form><br />
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <label key={index} className="checkbox-label">
                                            <Checkbox />
                                            <span>
                                                {[...Array(index)].map((_, i) => (
                                                    <StarIcon key={i} />
                                                ))}
                                            </span>
                                        </label>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card border="light" className="filter-card">
                            <Card.Body>
                                <Card.Title>Ratings</Card.Title>
                                <Card.Text>
                                    {[4, 3.5, 2.5].map((rating) => (
                                        <label key={rating} className="checkbox-label">
                                            <Checkbox />
                                            <span className="rating-span">{rating}+</span>
                                        </label>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card border="light" className="filter-card">
                            <Card.Body>
                                <Card.Title>Price Range</Card.Title>
                                <Card.Text>
                                    {[999, 1000, 2000, 3000, 4000, 5000, 6000, 7000].map((price) => (
                                        <label key={price} className="checkbox-label">
                                            <Checkbox />
                                            <span>Up to {price}</span>
                                        </label>
                                    ))}
                                    <label className="checkbox-label">
                                        <Checkbox />
                                        <span>7000+</span>
                                    </label>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card border="light" className="filter-card">
                            <Card.Body>
                                <Card.Title>Hotel Type</Card.Title>
                                <Card.Text>
                                    {["Apartments", "Villas", "Resorts", "Hotels", "Hostels"].map((type) => (
                                        <label key={type} className="checkbox-label">
                                            <Checkbox />
                                            <span>{type}</span>
                                        </label>
                                    ))}
                                    <br />
                                    <Button variant="primary" size="lg">Apply Filters</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Drawer;
