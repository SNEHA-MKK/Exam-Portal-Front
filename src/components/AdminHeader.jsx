// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

// function AdminHeader() {
//   return (
//     <>
//        <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               alt=""
//               src="/img/logo.svg"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />{' '}
//             React Bootstrap
//           </Navbar.Brand>
//           <div className='d-flex justify-content-around align-items-center'>
//             <h1 className='me-3'>dkjfkj</h1>
//             <h2 className='me-3'>sdc</h2>
//             <h2>djn</h2>
//           </div>
//         </Container>
//       </Navbar>
//     </>
//   )
// }

// export default AdminHeader




import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


function AdminHeader() {
  return (
    <>
      <Navbar style={{backgroundColor:'rgba(59, 59, 68, 0.356)'}} expand="lg" className="mx-3 rounded shadow navbar  mb-5 mt-2  " fixed="top">
            <Container fluid className='justify-content-between align-items-center'>
              <Navbar.Brand className='fw-bolder text-info'>
              <Link to={'/dashboard'} style={{textDecoration:'none'}}>
                <img src="https://images.softwaresuggest.com/software_logo/1495539705_followclass-192.png" width={'30px'} height={'30px'} alt="" />
                  Exam PORTAL
              </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link  className='text-primary fw-bolder'><Link to={'/dashboard'} style={{textDecoration:"none"}}>HOME</Link></Nav.Link>
                  <Nav.Link  className='text-primary fw-bolder'><Link to={'/postjobs'} style={{textDecoration:"none"}} >PROFILE</Link></Nav.Link>
                  <Nav.Link  className='text-primary fw-bolder'><Link to={'/viewJobsAdmin'} style={{textDecoration:"none"}}>CATEGORY</Link></Nav.Link>
                </Nav>
                <Nav className='ms-auto jusify-content-between'>
                 
                  <button className='btn btn-info text-light rounded-5 mx-lg-2 my-2 my-lg-0'>
                  LOGOUT
                  </button> 
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
      </Navbar>
    </>
  );
}

export default AdminHeader;

