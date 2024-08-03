import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Alert ,Nav,Image} from "react-bootstrap";
import { Link } from "react-router-dom";

const UserQuizResultPage = () => {
  
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
         
            <Table bordered className="mt-4 text-center">
              <thead>
                <tr>
                  <th>Quiz Id</th>
                  <th>Quiz Name</th>
                  <th>Category Name</th>
                  <th>Obtained Marks</th>
                  <th>Total Marks</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>1</td>
                    <td>mnbb</td>
                    <td>nbjhn</td>
                    <td>70</td>
                    <td>90</td>
                    <td>9/07/24</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>mnbb</td>
                    <td>nbjhn</td>
                    <td>70</td>
                    <td>90</td>
                    <td>9/07/24</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>mnbb</td>
                    <td>nbjhn</td>
                    <td>70</td>
                    <td>90</td>
                    <td>9/07/24</td>
                  </tr>
                
              </tbody>
            </Table>

            
         
            <Alert variant="info" className="mt-4">
              No results to display. Attempt any <Link to="/quizzes">Quiz</Link>.
            </Alert>
          
        </Col>
      </Row>
    </Container>
  );
};

export default UserQuizResultPage;
