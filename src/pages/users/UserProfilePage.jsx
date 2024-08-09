import React, { useEffect, useState } from 'react'
import { Table, Container, Row, Col, Image, Nav, Button } from "react-bootstrap";
import UserHeader from '../../components/UserHeader';
import { getUserProfile } from '../../services/allAPI';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

function UserProfilePage() {

    const [profile, setUserProfile] = useState({})
    console.log(profile);


    const getUserDetails = async () => {
        console.log('insde getUserDetaikls');

        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token");
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };

            try {

                const result = await getUserProfile(reqHeader);
                console.log(result.data);
                setUserProfile(result.data);


            } catch (error) {


                console.error('Error fetching quiz topper:', error);
            }
        }
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    return (
        <>
            <Container fluid>
                <UserHeader />
                <Row>
                    <Col md={12} className="text-center mt-5 ">
                        <Image
                            className="border border-success"
                            width="13%"
                            height="45%"
                            roundedCircle
                            src="https://banner2.cleanpng.com/20190205/tyl/kisspng-image-computer-icons-portable-network-graphics-ava-users-svg-png-icon-free-download-529385-onlin-5c59c257a086d4.9889939115493863276575.jpg"
                        />

                        <Table bordered className="mt-4 mx-auto w-50">
                            <tbody>
                                <tr>
                                    <td><b>Name</b></td>
                                    <td>{profile.username}</td>
                                </tr>
                                <tr>
                                    <td><b>Email</b></td>
                                    <td>{profile.mailId}</td>
                                </tr>
                                <tr>
                                    <td><b>Phone</b></td>
                                    <td>{profile.phone}</td>
                                </tr>
                                {/* <tr>
                                    <td>Role</td>
                                    <td>Software Developer</td>
                                </tr> */}
                                <tr>
                                    <td><b>Qualification</b></td>
                                    <td>{profile.qualification}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                </Row>
                
               <Link to={'/quizzes'} style={{textDecoration:'none'}} className='d-flex justify-content-center align-tems-center mb-3'> <Button variant='danger' >Quiz</Button></Link>

               <Footer/>
            </Container>
        </>
    )
}

export default UserProfilePage



