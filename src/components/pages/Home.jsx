import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Products from "../Module/Products";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Event from "../Module/Event";
import '../../App.css'; // Import the corrected CSS file

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="container-fluid container-fluid-hero">
        <Container>
          <Row>
            <Col className="my-5" xs={12} md={6}>
              <h5 className="hero-text-yellow">WORLD GAMING</h5>
              <h1 className="hero-text-white">
               <b> Create <span className="hero-span">Manage</span> Matches</b>
              </h1>
              <p className="hero-white">
                Find technology or people for digital projects in public sector
                and find
                <br />
                an individual specialist, developer, or researcher.
              </p>
            </Col>
            <Col xs={6} md={6}>
              <img
                className="d-block my-4 hero-banner"
                src={process.env.PUBLIC_URL + "/image/herobanner.png"}
                alt="Hero Banner"
              />
            </Col>
          </Row>
        </Container>
        <div className="container-md">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100 my-3 carousel-image"
                src={process.env.PUBLIC_URL + "/image/cr2.webp"}
                alt="First Slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 my-3 carousel-image"
                src={process.env.PUBLIC_URL + "/image/cr1.jpg"}
                alt="Second Slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 my-3 carousel-image"
                src={process.env.PUBLIC_URL + "/image/cr3.jpg"}
                alt="Third Slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="d-flex justify-content-center">
          <Card className="my-4 card-sale">
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/image/sale.jpg"}
            />
          </Card>
        </div>
        <Event />
      </div>
      <div className="container-fluid container-fluid-section">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="d-flex justify-content-center">
              <img
                className="d-block my-4 sale-image"
                src={process.env.PUBLIC_URL + "/image/sale1.jpg"}
                alt="Sale 1"
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                className="d-block my-4 sale-image"
                src={process.env.PUBLIC_URL + "/image/sale2.jpg"}
                alt="Sale 2"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Products/>
      </div>
    </>
  );
}

export default Home;
