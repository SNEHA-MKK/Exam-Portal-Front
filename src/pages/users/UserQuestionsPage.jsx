// import React, { useEffect, useState } from 'react'
// import { Button, Container, Row, Col, Card, InputGroup } from "react-bootstrap";
// import { useParams } from 'react-router-dom';


// function UserQuestionsPage() {

//     const { id } = useParams();
//     console.log(id);

//     const [userQuestion, setUserQuestion] = useState([])

//     const getAllUserQuestion = async (id) => {

//         if (sessionStorage.getItem("token")) {
//             const token = sessionStorage.getItem("token")

//             const reqHeader = {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}`
//             }

//             const result = await getAllUserQuestion(id, reqHeader)
//             console.log(result.data);
//             setUserQuestion(result.data)

//         }

//     }


//     useEffect(() => {
//         getAllUserQuestion(id)
//     }, [])

//     return (
//         <>
//             <Container fluid>
//                 <Row>
//                     <Col>
//                         <h2 className="my-4">Questions : sndjnkjfk kjfndk kehrb ehfnj mdsm twet</h2>
//                     </Col>
//                 </Row>
//                 <Row className="justify-content-between">
//                     <Col md={4} className="my-2">
//                         <Button
//                             className="w-100"
//                             variant="primary"
//                         >
//                             Submit Quiz
//                         </Button>
//                     </Col>
//                     <Col md={4} className="my-2">
//                         <Card className="text-center p-3">

//                             <h4 className="mt-3">20:18</h4>
//                             Timer
//                         </Card>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md={12}>
//                         {userQuestion?.map((item) => (
//                             <Row className="mb-2">
//                                 <Col xs={12} className="mb-2">
//                                     <h5>{item.question}</h5>
//                                 </Col>
//                                 <Col xs={12}>
//                                     <InputGroup

//                                     >
//                                         <Row className="w-100">
//                                             <Col xs={12} md={6} className="d-flex mb-2">
//                                                 <InputGroup.Radio value={item.option1} aria-label="option 1" />
//                                                 <span className="ms-2">{item.option1}</span>
//                                             </Col>
//                                             <Col xs={12} md={6} className="d-flex mb-2">
//                                                 <InputGroup.Radio value={item.option2} aria-label="option 2" />
//                                                 <span className="ms-2">{item.option2}</span>
//                                             </Col>
//                                             <Col xs={12} md={6} className="d-flex mb-2">
//                                                 <InputGroup.Radio value={item.option3} aria-label="option 3" />
//                                                 <span className="ms-2">{item.option3}</span>
//                                             </Col>
//                                             <Col xs={12} md={6} className="d-flex mb-2">
//                                                 <InputGroup.Radio value={item.option4} aria-label="option 4" />
//                                                 <span className="ms-2">{item.option4}</span>
//                                             </Col>
//                                         </Row>
//                                     </InputGroup>
//                                 </Col>

//                                 <Col xs={12}>
//                                     <p className="my-2">Correct Answer: {item.answer}</p>
//                                     <hr />
//                                     <div className="d-flex justify-content-between">
//                                         <Button
//                                             variant="outline-success"

//                                             className="me-2"
//                                         >
//                                             Update
//                                         </Button>
//                                         <Button variant="outline-danger">
//                                             Delete
//                                         </Button>
//                                     </div>
//                                 </Col>

//                             </Row>
//                         ))
//                         }
//                     </Col>



//                 </Row>
//             </Container>
//         </>
//     )
// }

// export default UserQuestionsPage



import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Card, InputGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { evaluateUserAnswers, getAllUserQuestions } from '../../services/allAPI';

function UserQuestionsPage() {
    const { id } = useParams();
    console.log(id);

    const [userQuestion, setUserQuestion] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [result, setResult] = useState(null);
    console.log(result);


    const fetchAllUserQuestions = async (id) => {
        if (sessionStorage.getItem('token')) {
            const token = sessionStorage.getItem('token');

            const reqHeader = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };

            try {

                const result = await getAllUserQuestions(id, reqHeader)
                console.log(result.data);
                setUserQuestion(result.data);
            } catch (error) {
                console.error('Error fetching user questions:', error);
            }
        }
    };

    const handleAnswerChange = (questionId, answer) => {
        setUserAnswers({ ...userAnswers, [questionId]: answer });
    };

    const handleSubmit = async () => {
        const token = sessionStorage.getItem('token');

        const reqHeader = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };

        try {
            const result = await evaluateUserAnswers(id, userAnswers, reqHeader);
            if (result.status == 200) {
                setResult(result.data);
            } else {
                alert('user can only attend one time')
            }

        } catch (error) {
            console.error('Error evaluating answers:', error);
        }
    };

    useEffect(() => {
        fetchAllUserQuestions(id);
    }, [id]);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h2 className="my-4">Questions : sndjnkjfk kjfndk kehrb ehfnj mdsm twet</h2>
                    </Col>
                </Row>
                <Row className="justify-content-between">
                    <Col md={4} className="my-2">
                        <Button className="w-100" variant="primary" onClick={handleSubmit}>
                            Submit Quiz
                        </Button>
                    </Col>
                    <Col md={4} className="my-2">
                        <Card className="text-center p-3">
                            <h4 className="mt-3">20:18</h4>
                            Timer
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {userQuestion.map((item, index) => (
                            <Row key={index} className="mb-2">
                                <Col xs={12} className="mb-2">
                                    <h5>{item.question}</h5>
                                </Col>
                                <Col xs={12}>

                                    <InputGroup>
                                        <Row className="w-100">
                                            {['option1', 'option2', 'option3', 'option4'].map((option, index) => (
                                                <Col key={index} xs={12} md={6} className="d-flex mb-2">
                                                    <InputGroup.Radio
                                                        name={`question-${item._id}`}
                                                        value={item[option]}
                                                        onChange={() => handleAnswerChange(item._id, item[option])}
                                                        aria-label={`option ${index + 1}`}
                                                    />
                                                    <span className="ms-2">{item[option]}</span>

                                                </Col>
                                            ))}
                                        </Row>
                                    </InputGroup>

                                    {/* <InputGroup>
                                        <Row className="w-100">
                                            <Col xs={12} md={6} className="d-flex mb-2">
                                                <InputGroup.Radio value={item.option1} aria-label="option 1" />
                                                <span className="ms-2">{item.option1}</span>
                                            </Col>
                                            <Col xs={12} md={6} className="d-flex mb-2">
                                                <InputGroup.Radio value={item.option2} aria-label="option 2" />
                                                <span className="ms-2">{item.option2}</span>
                                            </Col>
                                            <Col xs={12} md={6} className="d-flex mb-2">
                                                <InputGroup.Radio value={item.option3} aria-label="option 3" />
                                                <span className="ms-2">{item.option3}</span>
                                            </Col>
                                            <Col xs={12} md={6} className="d-flex mb-2">
                                                <InputGroup.Radio value={item.option4} aria-label="option 4" />
                                                <span className="ms-2">{item.option4}</span>
                                            </Col>
                                        </Row>
                                    </InputGroup> */}
                                </Col>
                                <hr />

                            </Row>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default UserQuestionsPage;



