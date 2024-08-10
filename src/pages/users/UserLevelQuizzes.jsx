// import React, { useEffect, useState } from 'react'
// import { Container, Row, Col, Card, Table, Alert, Button } from 'react-bootstrap';
// import UserHeader from '../../components/UserHeader';
// import Footer from '../../components/Footer';
// import { useParams } from 'react-router-dom';
// import { rankAndStatusApi } from '../../services/allAPI';

// function UserLevelQuizzes() {

//     const [rank, setRank] = useState([])
//     // console.log(rank[0]);
//     const ranks =rank[0]

//     const { id } = useParams()
//     // console.log(id);


//     const fetchUserRanks = async (id) => {
//         const token = sessionStorage.getItem('token'); // Assuming token is stored in sessionStorage

//         if (token) {

//             const reqHeader = {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             };

//             try {

//                 const result = await rankAndStatusApi(id, reqHeader);

//                 console.log(result.data);
//                 setRank(result.data[0] || null);
//             } catch (error) {
//                 console.error('Error fetching all users results:', error);
//             }
//         }
//     };

//     useEffect(() => {
//         console.log('djfh');
//         fetchUserRanks(id);
//     }, []);

//     return (
//         <>
//             <Container fluid >
//                 <UserHeader />

//                 <div style={{ backgroundImage: "url('https://e0.pxfuel.com/wallpapers/448/62/desktop-wallpaper-graduation-clipart-graduation-graduation-cap.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
//                     <Row  >
//                         <Col>
//                             <h1 className="text-center my-5 text-danger">Rank & Status</h1>
//                         </Col>
//                     </Row>
//                     <Row className=' d-flex justify-content-center ' style={{ height: '60vh' }} >



//                         <Col md={4} className="my-2" >
//                             <Card className="text-center p-3 shadow rounded">
//                                 <Card.Body>
//                                     <Card.Title>Rank : <span className='text-danger'>{ranks.rank}</span></Card.Title>
//                                     {/* <Card.Title>Status : <span className='text-danger'>fhgj</span></Card.Title> */}
//                                     <Card.Title>Category : <span className='text-danger'>{ranks.category}</span></Card.Title>
//                                     <Card.Title>Quiz : <span className='text-danger'>{ranks.quizId
//                                     }</span></Card.Title>
//                                     <Card.Title>Score : <span className='text-danger'>{ranks.score}</span></Card.Title>
//                                     <Card.Title>Out Of : <span className='text-danger'>{ranks.total}</span></Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </Col>

//                     </Row>
//                 </div>

//                 <Footer />
//             </Container>
//         </>
//     )
// }

// export default UserLevelQuizzes




import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import { rankAndStatusApi } from '../../services/allAPI';

function UserLevelQuizzes() {
    const [rank, setRank] = useState(null); // Initialize as null
    const { id } = useParams();

    const fetchUserRanks = async (id) => {
        const token = sessionStorage.getItem('token');

        if (token) {
            const reqHeader = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };

            try {
                const result = await rankAndStatusApi(id, reqHeader);
                setRank(result.data[0] || null); // Set to the first item or null
            } catch (error) {
                console.error('Error fetching all users results:', error);
            }
        }
    };

    useEffect(() => {
        fetchUserRanks(id);
    }, [id]);

    if (!rank) {
        // If rank is null or undefined, display a loading message or a placeholder
        return (
            <>
                <Container fluid>
                    <UserHeader />
                    <Row className="d-flex justify-content-center" style={{ height: '60vh' }}>
                        <Col md={4} className="my-5">
                            <Card className="text-center p-3 shadow rounded">
                                <Card.Body>
                                    <Card.Title className='text-danger'>You have'nt attended the quiz,Thus cant generate the result</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Footer />
                </Container>
            </>
        );
    }

    return (
        <>
            <Container fluid>
                <UserHeader />

                <div style={{ backgroundImage: "url('https://e0.pxfuel.com/wallpapers/448/62/desktop-wallpaper-graduation-clipart-graduation-graduation-cap.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <Row>
                        <Col>
                            <h1 className="text-center my-5 text-danger">Rank & Status</h1>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center" style={{ height: '60vh' }}>
                        <Col md={4} className="my-2">
                            <Card className="text-center p-3 shadow rounded">
                                <Card.Body>
                                    <Card.Title>Rank: <span className='text-danger'>{rank.rank}</span></Card.Title>
                                    <Card.Title>Category: <span className='text-danger'>{rank.category}</span></Card.Title>
                                    <Card.Title>Quiz: <span className='text-danger'>{rank.quizId}</span></Card.Title>
                                    <Card.Title>Score: <span className='text-danger'>{rank.score}</span></Card.Title>
                                    <Card.Title>Out Of: <span className='text-danger'>{rank.total}</span></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <Footer />
            </Container>
        </>
    );
}

export default UserLevelQuizzes;
