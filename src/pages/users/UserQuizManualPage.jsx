import React from 'react'
import { Button, Container, Row, Col, Card, Nav, Image } from "react-bootstrap";

function UserQuizManualPage() {
  return (
    <>
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
          <Col md={10} className="mx-auto">

            <Card className="my-4 p-4">
              <Card.Body>
                <Card.Title as="h5" className="text-center">
                  Read the instruction of this page carefully
                </Card.Title>
                <Card.Text className="text-center text-muted">
                  One more step to go
                </Card.Text>
                <hr />
                <Card.Title as="h3" className="text-center">
                  mhvhgmjbj
                </Card.Title>
                <Card.Text>lorem jhjhgj hbhjbj etsr fygy ljkn rdtdy uhjkn dxffch uhujhj</Card.Text>
                <hr />
                <Card.Title as="h3">Important Instructions</Card.Title>
                <ul>
                  <li>This quiz is only for practice purpose.</li>
                  <li>
                    You have to submit quiz within <strong>20 minutes</strong>.
                  </li>
                  <li>You can attempt the quiz any number of times.</li>
                  <li>
                    There are <strong>10 questions</strong>{" "}
                    in this quiz.
                  </li>
                  <li>This quiz is only for practice purpose.</li>
                  <li>
                    Total Marks for this quiz is <strong>100</strong>.
                  </li>
                  <li>All questions are of MCQ type.</li>
                </ul>
                <hr />
                <Card.Title as="h3">Attempting Quiz</Card.Title>
                <ul>
                  <li>
                    Click <strong>Start Quiz</strong> button to start the quiz.
                  </li>
                  <li>
                    The timer will start the moment you click on the Start Quiz
                    button.
                  </li>
                  <li>
                    You cannot resume this quiz if interrupted due to any reason.
                  </li>
                  <li>
                    Click on <strong>Submit Quiz</strong> button on completion of
                    the quiz.
                  </li>
                  <li>
                    Result of the test is generated automatically in PDF format.
                  </li>
                </ul>
                <div className="text-center">
                  <Button
                    className="my-3"

                    variant="primary"
                  >
                    Start Quiz
                  </Button>
                </div>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UserQuizManualPage

