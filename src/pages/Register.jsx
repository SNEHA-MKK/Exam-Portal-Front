import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { registerAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  //state to hold the data or user details
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  // console.log(user);

  const navigate = useNavigate()

  //function to call register api
  const register = async (e) => {

    e.preventDefault()
    const { username, email, password } = user
    if (!username || !email || !password) {
      toast.info('please fill the form completely')
    } else {
      const result = await registerAPI(user)
      console.log(result);
      if (result.status == 200) {
        alert('registration successfull')
        setUser({
          username: "",
          email: "",
          password: ""
        })
        navigate('/login')
      } else {
        toast.error(result.response.data);
        setUser({
          username: "",
          email: "",
          password: ""
        })
      }
    }
  }

  // const [formData, setFormData] = useState({
  //   username: '',
  //   password: '',
  //   email: '',
  //   userType: 'student',
  // });

  // const { username, password, email, userType } = formData;

  // const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   // Handle form submission
  // };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="mb-4 text-center mt-5">Register</h2>
          <Form className='p-5 rounded shadow' style={{backgroundColor:'rgba(82, 139, 141, 0.603)'}}>
            <Form.Group controlId="formUsername" className='mb-2'>
              <Form.Label className='text-light fs-5'>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className='mb-2'>
              <Form.Label className='text-light fs-5'>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className='mb-2'>
              <Form.Label className='text-light fs-5'>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </Form.Group>
            {/* <Form.Group controlId="formUserType">
              <Form.Label>User Type</Form.Label>
              <Form.Control
                as="select"
                name="userType"
                value={userType}
                onChange={onChange}
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </Form.Control>
            </Form.Group> */}
            <Button className='mt-3 w-100' onClick={register} variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer theme='colored' autoClose={2000} position='top-center' />
    </Container>
  );
}

export default Register;
