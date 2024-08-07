import React from 'react'
import { Container, Row, Col, Card,Table, Alert,Button } from 'react-bootstrap';
import AdminHeader from '../../components/AdminHeader';
import Footer from '../../components/Footer';

function TopperAdmin() {
  return (
    <>
      <Container fluid >
        <AdminHeader/>

      <div style={{backgroundImage:"url('https://e0.pxfuel.com/wallpapers/448/62/desktop-wallpaper-graduation-clipart-graduation-graduation-cap.jpg')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
          <Row  >
            <Col>
              <h1 className="text-center my-5 text-danger">Quiz Topper</h1>
            </Col>
          </Row>
          <Row className=' d-flex justify-content-center ' style={{height:'60vh'}} >
            
              <Col md={4} className="my-2" >
                <Card className="text-center p-3 shadow rounded">
                  <Card.Body>
                    <Card.Title>Quiz: jjhjh</Card.Title>
                    <Card.Text>User ID: kjhj</Card.Text>
                    <Card.Text>Score: kh</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
    
              {/* <h1 className='text-center text-danger'>No one attended the quiz</h1>
            */}
          </Row>
      </div>

      <Footer/>
    </Container>
    </>
  )
}

export default TopperAdmin
