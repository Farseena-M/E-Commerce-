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
    const value={name:refname,pass:refPass}
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
    <div className='d-flex align-items-center justify-content-center flex-wrap' style={{backgroundColor:'grey',position:'absolute',height:'820px',width:'100%'}}>
    <Container style={{alignItems:'center'}} className=' mt-4 p-4'>
      <div className='m-4 p-5 mt-4 d-flex align-items-center justify-content-center flex-wrap'>
        <div className=' p-4 mt-5' style={{alignItems:'center',width:'650px',height:'400px',border:'1px',borderRadius:'8px' ,backgroundColor:'lightgrey'}}>
     <Form className='p-4 m-4'>
      <h2 style={{textAlign:'center'}}>Registration</h2><br/>
     <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Enter Username" style={{width:'500px'}}  ref={reffname}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" placeholder="Enter Email" style={{width:'500px'}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" style={{width:'500px'}}>
        <Form.Control type="password" placeholder="Enter Password"  ref={reffPass}/><br/>
        <Button style={{position:'relative', left:'200px',backgroundColor:'black', border:'none'}} onClick={handleChange} type="submit">Submit</Button>
      </Form.Group>
    </Form>
    </div>
      </div>
    </Container>
    </div>
    </>
  )
}

export default Registration