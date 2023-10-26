import React, { useContext} from 'react';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsFillCartFill} from 'react-icons/bs'
import {CgLogOut} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';
import {RiAdminFill} from 'react-icons/ri'
import logo from '../Components/Assets/Babyshh.png'
import { Dropdown } from 'react-bootstrap';
import {TbLogout} from 'react-icons/tb'
import { userContext } from '../App';
import { toast } from 'react-toastify';
const Navigation = () => {
  const {login,setLogin,setCart} =useContext(userContext)
 const Nvgtn=useNavigate()
 const logout=()=>{
  if(login){
    setLogin(false)
    setCart([])
    toast.success('Logout Success')
  }else{
    toast.error('Please Login')
    Nvgtn('/login')
  }
 }
  return (
    <Navbar style={{backgroundColor:'white',height:'85px',width:'100%'}} expand="lg"sticky='top'>
    <Container fluid>
      <Navbar.Brand  style={{cursor:'pointer'}} onClick={()=>Nvgtn('/')}><img src={logo} alt='logo'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link style={{fontFamily:'serif'}}onClick={()=>Nvgtn('/clctns')}><h2>Collections</h2></Nav.Link>
          <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic"  style={{fontFamily:'serif',fontSize:'30px',fontWeight:'1px'}}>
        Categories
        </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{Nvgtn('/cloths')}}><h6 style={{fontFamily:'serif',fontSize:'20px',fontWeight:'1px'}}>Cloths</h6></Dropdown.Item>
        <Dropdown.Item onClick={()=>{Nvgtn('/Prdcts')}}><h6 style={{fontFamily:'serif',fontSize:'20px',fontWeight:'1px'}}>Products</h6></Dropdown.Item>
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
          {login?
          <Nav.Link onClick={logout} style={{fontSize:'27px'}}><TbLogout /></Nav.Link>:
          <Nav.Link onClick={()=>{Nvgtn('/login')}} style={{fontSize:'27px'}}><CgLogOut /></Nav.Link>}
          <Nav.Link onClick={()=>{Nvgtn('/admin')}} style={{fontSize:'27px'}}><RiAdminFill /></Nav.Link>    
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>  )
}

export default Navigation