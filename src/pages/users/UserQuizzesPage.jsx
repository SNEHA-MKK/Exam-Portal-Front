import React, { useEffect, useState } from "react";
import { Card, Col, Row, Container, Button ,Nav,Image} from "react-bootstrap";

const UserQuizzesPage = () => {


  return (
    <Container fluid>
      <Row>
        <Col md={2} className="d-none d-md-block position-sticky top-0 bg-dark text-light vh-100 d-flex flex-column align-items-center py-4">
        <Image
                            src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
                            alt="Profile"
                            height="80px"
                            width="80px"
                            className="mb-2"
                            roundedCircle
                        />
                        <h3 className="text-light">WELCOME</h3>
                        <h6 className="text-light">Sneha Mohandas</h6>
                        <Nav className="flex-column w-100 mt-5">
                            <Nav.Link href="#" className="text-light text-center mb-3">Dashboard</Nav.Link>
                            <Nav.Link href="#" className="text-light text-center mb-3">Exams</Nav.Link>
                            <Nav.Link href="#" className="text-light text-center">Settings</Nav.Link>
                        </Nav>
        </Col>
        <Col md={10}>
          <Container className="text-center mt-3">

            <div className="row mt-5">
                <div className="col-md 4">
                <Card bg="light" text="dark" className="h-100">
                          <Card.Body>
                            <Card.Title>kjghjhb</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              jjhbjh
                            </Card.Subtitle>
                            <Card.Text>loremjhj jhjjjjjjjjjjjj yuuuuuuuuuuuu jh kjnbfg sres</Card.Text>
                            <div className="d-flex flex-wrap justify-content-around">
                              <Button
                                variant="success"
                                className="m-1"
                                
                              >
                                Start
                              </Button>

                              <Button
                                variant="outline-secondary"
                                className="m-1"
                              >
                                20 Minutes
                              </Button>

                              <Button
                                variant="outline-secondary"
                                className="m-1"
                              >
                                9 Questions
                              </Button>

                              <Button
                                variant="outline-secondary"
                                className="m-1"
                              >
                                Marks : 90
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                </div>
                <div className="col-md 4">
                <Card bg="light" text="dark" className="h-100">
                          <Card.Body>
                            <Card.Title>kjghjhb</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              jjhbjh
                            </Card.Subtitle>
                            <Card.Text>loremjhj jhjjjjjjjjjjjj yuuuuuuuuuuuu jh kjnbfg sres</Card.Text>
                            <div className="d-flex flex-wrap justify-content-around">
                              <Button
                                variant="success"
                                className="m-1"
                                
                              >
                                Start
                              </Button>

                              <Button
                                variant="outline-secondary"
                                className="m-1"
                              >
                                20 Minutes
                              </Button>

                              <Button
                                variant="outline-secondary"
                                className="m-1"
                              >
                                9 Questions
                              </Button>

                              <Button
                                variant="outline-secondary"
                                className="m-1"
                              >
                                Marks : 90
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                </div>
                <div className="col-md 4">
                <Card bg="light" text="dark" className="h-100">
                          <Card.Body>
                            <Card.Title>kjghjhb</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              jjhbjh
                            </Card.Subtitle>
                            <Card.Text>loremjhj jhjjjjjjjjjjjj yuuuuuuuuuuuu jh kjnbfg sres</Card.Text>
                            <div className="d-flex flex-wrap justify-content-around">
                              <Button
                                variant="success"
                                className="m-1"
                                
                              >
                                Start
                              </Button>

                              <Button
                                variant="outline-secondary"
                                className="m-1"
                              >
                                20 Minutes
                              </Button>

                              <Button
                                variant="outline-secondary"
                                className="m-1"
                              >
                                9 Questions
                              </Button>

                              <Button
                                variant="outline-secondary"
                                className="m-1"
                              >
                                Marks : 90
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                </div>
            </div>
           
            
              <p className="mt-5 text-danger text-center">No Quizzes Available</p>
            
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default UserQuizzesPage;
