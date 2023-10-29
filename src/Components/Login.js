import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import { Form } from 'react-bootstrap'
import { Button ,Container} from 'react-bootstrap'
import { toast } from 'react-toastify'
const Login = () => {
  const [error,setError] =useState('')
  const {user,setLogin} = useContext(userContext)
  const nvgt=useNavigate()
  const Lreffname=useRef()
  const LreffPass=useRef()
  const handleClick=()=>{
    const newLreffName=Lreffname.current.value
    const newLreffPass=LreffPass.current.value
    if(!newLreffName|| !newLreffPass){
      setError('Please fill in the fields')
    }
    else if(!newLreffName){
      setError('Please fill in the fields')
    }else if(!newLreffPass){
      setError('Please fill in the fields')
    }
  const findName=user.find((usr)=>usr.name===newLreffName)
  const findPass=user.find((usr)=>usr.pass===newLreffPass)
  if(findName && findPass){
    setLogin(true);
      toast.success('Login Success');
     nvgt('/');
  }else{
    toast.error('Please correct the username or password!');
  }
  }
  return (
  <>
  <div className='d-flex align-items-center justify-content-center flex-wrap' style={{backgroundColor:'grey',position:'absolute',height:'820px',width:'100%'}}>
  <Container style={{alignItems:'center'}} className=' mt-4 p-4'>
  <div className='m-4 p-5 mt-4 d-flex align-items-center justify-content-center flex-wrap'>
      <div className='shadow p-4 mt-5' style={{alignItems:'center',width:'650px', height:'350px',border:'1px',borderRadius:'8px' ,backgroundColor:'lightgrey'}}>
     <Form className='p-4 m-4'>
      <h2 style={{textAlign:'center'}}>Login</h2><br/>
     <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Enter Username" style={{width:'500px'}}  ref={Lreffname} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" style={{width:'500px'}}>
        <Form.Control type="password" placeholder="Enter Password"  ref={LreffPass} required /><br/>
        {error &&
       (<p style={{textAlign:'center',color:'red'}}>{error}</p>)}
        <Button style={{position:'relative',left:'150px',backgroundColor:'black',border:'none'}} onClick={handleClick} type="button">Login</Button>
        <Link style={{position:'relative',left:'170px', color:'black'}} to='/rgstn'>Sign up</Link> 
      </Form.Group>
      </Form>
    </div>
    </div>
    </Container>
    </div>
  </>
  )
}

export default Login