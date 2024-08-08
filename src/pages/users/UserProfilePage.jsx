import React from 'react'
import { Table, Container, Row, Col, Image, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';

function UserProfilePage() {
    return (
        <>
            <Container fluid>
                <UserHeader />
                <Row>
                    <Col md={12} className="text-center mt-5 mb-5">
                        <Image
                            className="border border-success"
                            width="15%"
                            height="45%"
                            roundedCircle
                            src="https://i.pinimg.com/originals/86/63/78/866378ef5afbe8121b2bcd57aa4fb061.jpg"
                        />

                        <Table bordered className="mt-4 mx-auto w-50">
                            <tbody>
                                <tr>
                                    <td><b>Name</b></td>
                                    <td>Sneha Mohandas</td>
                                </tr>
                                <tr>
                                    <td><b>Email</b></td>
                                    <td>snehaMace</td>
                                </tr>
                                <tr>
                                    <td><b>Phone</b></td>
                                    <td>7034014860</td>
                                </tr>
                                {/* <tr>
                                    <td>Role</td>
                                    <td>Software Developer</td>
                                </tr> */}
                                <tr>
                                    <td><b>Qualification</b></td>
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



