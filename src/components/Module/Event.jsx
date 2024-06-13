// src/components/Products.jsx
import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

const Event = ({ handleAddToWishlist }) => {
  const items = [
    {
      id: 1,
      product_name: "WHITE WALKER DAILY",
      price: 955,
      image: "/image/latest-game-1.jpg",
    },
    {
      id: 2,
      product_name: "HUNTER KILLER II",
      price: 955,
      image: "/image/latest-game-2.jpg",
    },
    {
      id: 3,
      product_name: "CYBERPUNK DAILY",
      price: 955,
      image: "/image/latest-game-3.jpg",
    },
   
  ];

  return (
    <Container >
      <Row className="d-flex justify-content-center">
        {items.map((elem) => (
          <Col key={elem.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={process.env.PUBLIC_URL + elem.image} />
              <Card.Body>
                <Card.Title>{elem.product_name}</Card.Title>
                <Card.Text>${elem.price}</Card.Text>
                <Button variant="primary">Entry Fees</Button>
                <Link to="/wishlist" class="btn mx-4" ><MDBIcon className="me mdn-icon" icon="heart" size="lg" /></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Event;
