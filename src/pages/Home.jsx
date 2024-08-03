// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import homeImg from '../assets/exam-bg.jpg';

function Home() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto justify-content-between">
              <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
              <Nav.Link href="#about" className='text-light'>About</Nav.Link>
              <Nav.Link href="#contact" className='text-light'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='bg-dark p-5' style={{ minHeight: "70vh" }}>
        <Container>
          <Row>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <h1 className='text-light'>Online Exam Portal</h1>
              <p className='text-light mt-4 mb-4'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem excepturi delectus eveniet voluptatum ex nesciunt facere aut suscipit cum sunt expedita, iusto repudiandae id perspiciatis sed nostrum voluptate consequatur veniam.
              </p>
              <button className='btn bg-danger text-light w-25'>Get Started</button>
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <img className='img-fluid rounded' src={homeImg} alt="Exam Portal" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
