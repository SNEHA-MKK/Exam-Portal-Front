import React, { useEffect, useState } from "react";
import { Button, ListGroup, Container, Row, Col, Nav, Image } from "react-bootstrap";
import AdminHeader from "../../../components/AdminHeader";
// import { useParams } from "react-router-dom";
import AddQuizzes from "../../../components/AddQuizzes";
import { Link, useParams } from "react-router-dom";
import { getAllAdmQuiz } from "../../../services/allAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



const AdminQuizzesPage = () => {


    const [adminQuiz, setAdminQuiz] = useState([])

    const { id } = useParams();
    console.log(id);

    const getAllQuizzez = async (id) => {

        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")

            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }

            const result = await getAllAdmQuiz(id, reqHeader)
            console.log(result.data);
            setAdminQuiz(result.data)

        }

    }

    useEffect(() => {
        getAllQuizzez(id)
    }, [])


    return (
        <Container fluid>
            <AdminHeader />
            <Row className="mt-5">

                <Col md={12}>


                    <AddQuizzes id={id} />

                    {adminQuiz?.length > 0 ?

                        adminQuiz?.map((item) => (
                            <ListGroup className="my-2">
                                <ListGroup.Item className="d-flex flex-column flex-md-row align-items-start">
                                    <div className="flex-grow-1">
                                        <div className="fw-bold">{item.title}</div>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="d-flex flex-wrap">

                                        <Link to={`/adminQuizzes/:id/adminQuestions/${item._id}`} ><Button variant="success">Questions</Button></Link>

                                        <Button variant="light" className="m-1">
                                            Marks: {item.maxMarks}
                                        </Button>
                                        <Button variant="light" className="m-1">
                                            {item.numberOfQuestions} Questions
                                        </Button>
                                        <button>edit</button>


                                        <FontAwesomeIcon icon={faTrash} className='text-danger mx-3' />
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        ))

                        :
                        <h2 className="text-danger text-center mt-5 mb-4">No quizzes are present. Try adding some quizzes.</h2>}

                </Col>
            </Row>
        </Container>
    );
};

export default AdminQuizzesPage;
