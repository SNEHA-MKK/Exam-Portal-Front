import React from 'react'
import { Table, Container, Row, Col, Image, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

function UserProfilePage() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={2} className="d-none d-md-block bg-dark text-light vh-100 d-flex flex-column align-items-center py-4">
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
                        <Link to={'/quizResults'} >Results</Link>
                        <Nav className="flex-column w-100 mt-5">
                            <Nav.Link href="#" className="text-light text-center mb-3">Dashboard</Nav.Link>
                            <Nav.Link href="#" className="text-light text-center mb-3">Exams</Nav.Link>
                            <Nav.Link href="#" className="text-light text-center">Settings</Nav.Link>
                        </Nav>
                    </Col>

                    <Col md={10} className="text-center mt-5 mb-5">
                        <Image
                            className="border border-success"
                            width="20%"
                            height="35%"
                            roundedCircle
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        />

                        <Table bordered className="mt-4 mx-auto w-50">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>Sneha Mohandas</td>
                                </tr>
                                <tr>
                                    <td>Username</td>
                                    <td>snehaMace</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>7034014860</td>
                                </tr>
                                <tr>
                                    <td>Role</td>
                                    <td>Software Developer</td>
                                </tr>
                                <tr>
                                    <td>Account Status</td>
                                    <td>mshdgfge</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default UserProfilePage



