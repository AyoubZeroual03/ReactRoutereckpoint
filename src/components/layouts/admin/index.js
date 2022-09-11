import React from 'react'
import { Row,Col } from 'react-bootstrap'
import {Link,Outlet} from 'react-router-dom'
import "./style.css"
export const AdminLayout = () => {
  return (
   <>
    <div className=' '>
    <Row>
    <Col className='a'>
      <h1> DASHBORD </h1>
    <ul>
      <li> <Link to  ='/admin/users' >  Users </Link></li>
      <li> <Link to  ='/admin/posts' >  Posts </Link></li>
       
       </ul>


    </Col>
    <Col className='b'><Outlet /> </Col>
    </Row>
   </div>
  

   </>
    
  )
}
