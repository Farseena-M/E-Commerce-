import React, { useContext, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import {  useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import { Button, Container } from 'react-bootstrap'
const SignUp = () => {
  const [error,setError]=useState('')
  const nvgtt=useNavigate()
  const {user,setUser}=useContext(userContext)
  const reffname=useRef()
  const reffPass=useRef()
  const handleChange=(e)=>{
    e.preventDefault()
    const refname=reffname.current.value
    const refPass=reffPass.current.value
    if(!refname || !refPass){
      setError('Please fill in the fields')
    }
    else{
      nvgtt('/login')
      const value={name:refname,pass:refPass}
      setUser ([...user,value])
      console.log(user);
    }
   
  }
  return (
    <>
    <div className='d-flex align-items-center justify-content-center flex-wrap' style={{backgroundColor:'grey',position:'absolute',height:'100%',width:'100%'}}>
    <Container style={{alignItems:'center'}} className=' mt-4 p-4'>
      <div className='m-4 p-5 mt-4 d-flex align-items-center justify-content-center flex-wrap'>
        <div className=' p-4 mt-5' style={{alignItems:'center',width:'650px',height:'400px',border:'1px',borderRadius:'8px' ,backgroundColor:'lightgrey'}}>
     <Form className='p-4 m-4'>
      <h2 style={{textAlign:'center'}}>SignUp</h2><br/>
     <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Enter Username" style={{width:'500px'}}  ref={reffname}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" placeholder="Enter Email" style={{width:'500px'}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" style={{width:'500px'}}>
        <Form.Control type="password" placeholder="Enter Password"  ref={reffPass}/><br/>
        {error &&
       (<p style={{textAlign:'center',color:'red'}}>{error}</p>)}
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

export default SignUp