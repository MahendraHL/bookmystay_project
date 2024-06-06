import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const carouselImage ={
  width: "350px", 
  height: "300px" 
}
const carouselItem={
  backgroundColor:"Gainsboro"
}

function HotelCarousel({ images }) {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Carousel interval={1000} style={carouselItem}>
              {images.map((imageGroup, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-around">
                    {imageGroup.map((image, idx) => (
                     <img
                     key={idx}
                     className="d-block"
                     style={carouselImage}
                     src={image}
                     alt={`Slide ${idx}`}
                   />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HotelCarousel;
