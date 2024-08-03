import React from 'react'
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Questions from "../../components/Questions";


function UserQuestionsPage() {
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
                        <Button
                            className="w-100"
                            variant="primary"
                        >
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
                        <Questions />;
                    </Col>

                    <Col md={12}>
                        <Questions />;
                    </Col>

                    <Col md={12}>
                        <Questions />;
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default UserQuestionsPage




