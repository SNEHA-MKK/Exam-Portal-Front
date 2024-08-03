// src/components/AboutUs.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        <Col md="8">
          <h1 className='text-center mb-5'>About Us</h1>
          <p>
            Welcome to our Exam Portal! Our mission is to provide an efficient and user-friendly platform for examiners to create, manage, and conduct online exams seamlessly. We aim to enhance the educational experience by leveraging technology to streamline the examination process.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center my-5">
        <Col md="8">
          <h2>Our Team</h2>
          <p>
            Our team consists of dedicated professionals committed to delivering the best online exam solutions. Meet the team:
          </p>
          <Row>
            <Col md="4">
              <Card>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQey3S6VQ4qIppedXehx8CQYDshaMBwU1UwpQ&s" />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>Product Designer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUs73Mz3FqhV8uy2F5TGw_jGvFdzGirConJA&s" />
                <Card.Body>
                  <Card.Title>Jane Smith</Card.Title>
                  <Card.Text>Lead Developer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLi_BSePjHLv0mWV4jUzOwNwO8Ce_G79Yal19X-9pRK5_H4kQpSxCe6hjBfP2_Ku6bKM&usqp=CAU" />
                <Card.Body>
                  <Card.Title>Emily Johnson</Card.Title>
                  <Card.Text>Quality Assurance Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-md-center my-5">
        <Col md="8">
          <h2>Our Vision</h2>
          <p>
            We believe in the power of education and strive to create solutions that make learning and assessment more accessible, effective, and enjoyable. Our vision is to be the leading provider of online examination platforms, trusted by educational institutions worldwide.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;

