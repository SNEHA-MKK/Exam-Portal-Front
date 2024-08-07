import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Alert } from 'react-bootstrap';
import { getAdminResults } from '../../services/allAPI';


function ResultAdmin() {

    const [results, setResults] = useState([]);
    console.log(results);


    const fetchAllUsersResults = async () => {
        const token = sessionStorage.getItem('token'); // Assuming token is stored in localStorage

        if (token) {

            const reqHeader = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };

            try {

                const result = await getAdminResults(reqHeader);

                console.log(result.data);
                setResults(result.data);
            } catch (error) {
                console.error('Error fetching all users results:', error);
            }
        }
    };

    useEffect(() => {
        console.log('djfh');

        fetchAllUsersResults();
    }, []);


    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <Table bordered className="mt-4 text-center">
                            <thead>
                                <tr>
                                    <th>Serial no</th>
                                    <th>User Id</th>
                                    {/* <th>User Name</th> */}
                                    <th>Quiz Name</th>
                                    <th>Category Name</th>                                
                                    <th>Obtained Marks</th>
                                    <th>Total Marks</th>
                                    {/* <th>Date</th> */}
                                </tr>
                            </thead>
                            <tbody>

                                {results?.length > 0 ?
                                    results?.map((item, index) => (
                                        <tr >
                                            <td>{index+1}</td>
                                            <td>{item.userId}</td>
                                            <td>{item.quizId}</td>
                                            <td>{item.category}</td>
                                            <td>{item.score}</td>
                                            <td>{item.total}</td>
                                            
                                            {/* <td>9/07/24</td> */}
                                        </tr>
                                    ))

                                    :
                                    <tr>
                                        <td colSpan="7">
                                            <Alert variant="info" className="mt-4">
                                                No results to display.
                                            </Alert>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ResultAdmin
