import React, { useContext, useRef } from 'react'
import Form from 'react-bootstrap/Form';
import {  useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import { Button, Container } from 'react-bootstrap'
const Registration = () => {
  const nvgtt=useNavigate()
  const {user,setUser}=useContext(userContext)
  const reffname=useRef()
  const reffPass=useRef()
  const handleChange=()=>{
    const refname=reffname.current.value
    const refPass=reffPass.current.value
    const value={name:refname,pass:refPass,id:Date.now()}
    setUser ([...user,value])
    console.log(user);
    if(!refname || !refPass){
      alert('Not Fill !')
    }else{
      nvgtt('/login')
    }
  }
  return (
    <>
    <Container style={{alignItems:'center'}} className=' mt-4 p-4'>
      <div className='m-4 p-5 mt-4 d-flex align-items-center justify-content-center flex-wrap'>
        <div className=' p-4 mt-5' style={{alignItems:'center',width:'650px',height:'400px',border:'2px solid'}}>
     <Form className='p-4 m-4'>
      <h2 style={{textAlign:'center'}}>Registration</h2>
     <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Enter username" style={{width:'500px'}}  ref={reffname}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" placeholder="Enter email" style={{width:'500px'}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" style={{width:'500px'}}>
        <Form.Control type="password" placeholder="Enter password"  ref={reffPass}/><br/>
        <Button style={{position:'relative', left:'200px',backgroundColor:'black'}} onClick={handleChange} type="submit">Submit</Button>
      </Form.Group>
    </Form>
    </div>
      </div>
    </Container>
    </>
  )
}

export default Registration