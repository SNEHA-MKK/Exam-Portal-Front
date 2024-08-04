import React, { useEffect, useState } from "react";
import { Card, Col, Row, Container, Button, Nav, Image } from "react-bootstrap";
import { getAllUserQuiz } from "../../services/allAPI";
import { Link } from "react-router-dom";

const UserQuizzesPage = () => {

  const [userQuiz, setUserQuiz] = useState([])
  

  const getAllUserQuizzez = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await getAllUserQuiz(reqHeader)
      console.log(result.data);
      setUserQuiz(result.data)

    }

  }

  useEffect(() => {
    getAllUserQuizzez()
  }, [])



  return (
    <Container fluid>
      <Row>

        <Col md={12}>
          <Container className="text-center mt-3">

            <div className="row mt-5">


              {userQuiz.map((item) => (
                <div className="col-md 4">
                  <Card bg="light" text="dark" className="h-100">
                    <Card.Body>
                      <Card.Title className="mb-3">Category : <span className="text-danger">{item.category}</span></Card.Title>
                      <Card.Subtitle className="mb-4 text-muted">
                        <h3>{item.title}</h3>
                      </Card.Subtitle>
                      <Card.Text>{item.description}</Card.Text>
                      <div className="d-flex flex-wrap justify-content-around">
                        <Link to={`/questions/${item._id}`} >
                          <Button
                            variant="success"
                            className="m-1"
  
                          >
                            Start
                          </Button>
                        </Link>

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
                          {item.numberOfQuestions} Questions
                        </Button>

                        <Button
                          variant="outline-secondary"
                          className="m-1"
                        >
                          Marks : {item.maxMarks}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))
              }


             
            </div>



          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default UserQuizzesPage;
