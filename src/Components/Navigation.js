import React from 'react'
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsFillCartFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import {RiAdminFill} from 'react-icons/ri'
import logo from '../Components/Assets/Babyshh.png'
import { Dropdown } from 'react-bootstrap';
const Navigation = () => {
 const Nvgtn=useNavigate()
  return (
    <Navbar style={{backgroundColor:'lightgrey',height:'85px'}} expand="lg">
    <Container fluid>
      <Navbar.Brand onClick={()=>Nvgtn('/')}><img src={logo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link style={{fontFamily:'serif'}}onClick={()=>Nvgtn('/clctns')}><h2>Collections</h2></Nav.Link>
          <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic"  style={{fontFamily:'serif',fontSize:'30px',fontWeight:'1px'}}>
        Categories
        </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{Nvgtn('/cloths')}}><h6 style={{fontFamily:'serif',fontSize:'25px',fontWeight:'1px'}}>Cloths</h6></Dropdown.Item>
        <Dropdown.Item onClick={()=>{Nvgtn('/Prdcts')}}><h6 style={{fontFamily:'serif',fontSize:'25px',fontWeight:'1px'}}>Products</h6></Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse style={{justifyContent:'end'}}>
        <Nav style={{gap:'0.6rem',alignItems:'center'}}>
        <Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav.Link onClick={()=>{Nvgtn('/cart')}} style={{fontSize:'27px'}}><BsFillCartFill /></Nav.Link>    
          <Nav.Link onClick={()=>{Nvgtn('/login')}} style={{fontSize:'27px'}}><FiLogOut /></Nav.Link>
          <Nav.Link onClick={()=>{Nvgtn('/admin')}} style={{fontSize:'27px'}}><RiAdminFill /></Nav.Link>    
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>  )
}

export default Navigation