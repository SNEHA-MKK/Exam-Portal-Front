import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, ListGroup, Container, Row, Col, Nav, Image, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import AdminUpdateCategoryPage from "./AdminUpdateCategoryPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminHeader from "../../components/AdminHeader";
import AddCat from "../../components/AddCat";
import { deleteACategoryApi, getAllAdmCategory } from "../../services/allAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import AdminQuizzesPage from "./quizzes/AdminQuizzesPage";


const AdminCategoriesPage = () => {

  const [adminCategory, setAdminCategory] = useState([])


  const getAllCategory = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await getAllAdmCategory(reqHeader)
      console.log(result.data);
      setAdminCategory(result.data)

    }

  }

  const deleteAdmCategory = async (id) => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await deleteACategoryApi(id, reqHeader)
      console.log(result);

      if (result.status == 200) {
        getAllUserProject()
      } else {
        alert('Something went wrong')
      }

    }

  }

  useEffect(() => {
    getAllCategory()
  }, [])

  // const { id } = useParams();


  return (
    <Container fluid>

      <AdminHeader />
      <Row className="mt-5">

        <Col md={12}>
          <h2 className="my-3 text-center mt-4 text-success">Categories</h2>



          {adminCategory?.length > 0 ?

            adminCategory?.map((item) => (

              
                <ListGroup  className="my-2" >
                  <ListGroup.Item
                    className="d-flex justify-content-between align-items-center"
  
                  >
                    <div>
                      <div className="fw-bold">{item.title}</div>
                      {item.description}
                    </div>
                    <div className="d-flex">
  

                      <Link to={`/adminQuizzes/${item._id}`} ><Button variant="success">More</Button></Link>

                      <AdminUpdateCategoryPage category={item} />
                    
  
                      <FontAwesomeIcon icon={faTrash} className='text-danger mx-3' onClick={() => deleteAdmCategory(item._id)} />
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              
            ))

            :
            <h1 className="text-danger text-center">Nothing To Display</h1>}




        </Col>
      </Row>
      <AddCat />
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </Container>
  );
};

export default AdminCategoriesPage;
