// src/components/Products.jsx
import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

const Products = ({ handleAddToWishlist }) => {
  const items = [
    {
      id: 1,
      product_name: "Product 1",
      price: 955,
      image: "/image/shop-img-1.jpg",
    },
    {
      id: 2,
      product_name: "Product 2",
      price: 955,
      image: "/image/shop-img-2.jpg",
    },
    {
      id: 3,
      product_name: "Product 3",
      price: 955,
      image: "/image/shop-img-3.jpg",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/shop-img-4.jpg",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/image/shop-bg.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px 0', // Optional: Adjust padding for better spacing
      }}
    >
      <Container>
        <Row>
          {items.map((elem) => (
            <Col key={elem.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + elem.image} />
                <Card.Body>
                  <Card.Title>{elem.product_name}</Card.Title>
                  <Card.Text>${elem.price}</Card.Text>
                  <Button variant="primary">Buy Now</Button>
                  <Link to="/wishlist" className="btn mx-4"><MDBIcon className="me mdn-icon" icon="heart" size="lg" /></Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
