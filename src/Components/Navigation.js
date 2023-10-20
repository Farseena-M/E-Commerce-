import React from 'react'
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsFillCartFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import {RiAdminFill} from 'react-icons/ri'
import logo from '../Components/Assets/Babyshh.png'
const Navigation = () => {
 const Nvgtn=useNavigate()
  return (
    <Navbar style={{backgroundColor:'white',height:'85px'}} expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link style={{fontFamily:'serif'}} href="/clctns"><h2>Collections</h2></Nav.Link>
          <Nav.Link style={{fontFamily:'serif'}} href="/boy"><h2>Boy</h2></Nav.Link>
          <Nav.Link style={{fontFamily:'serif'}} href="/girl"><h2>Girl</h2></Nav.Link>
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
          <Nav.Link onClick={()=>{Nvgtn('cart')}} style={{fontSize:'27px'}}><BsFillCartFill /></Nav.Link>    
          <Nav.Link onClick={()=>{Nvgtn('login')}} style={{fontSize:'27px'}}><FiLogOut /></Nav.Link>
          <Nav.Link onClick={()=>{Nvgtn('admin')}} style={{fontSize:'27px'}}><RiAdminFill /></Nav.Link>    
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>  )
}

export default Navigation