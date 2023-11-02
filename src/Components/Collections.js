import React, { useContext } from 'react'
import { userContext } from '../App'
import { Card, Container, Form } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
const Collections = () => {
  const{product,search,setSearch}=useContext(userContext)
  const Nvgt=useNavigate()
  
  const Searches=product.filter((val)=>{
    if(search==''){
      return val;
    }else if(val.productName.toLowerCase().includes(search.toLowerCase())){
      return val;
    }
  })
 
  return (
    <div style={{backgroundColor:'lightgrey'}}>
      <Navigation/>
      <div >
      <Form className="d-flex ">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(ev)=>{setSearch(ev.target.value)}}
           style={{height:'45px',width:'450px',position:'relative',left:'600px',top:'30px'}} />  
          </Form></div>
      <Container>
      <div className='m-4 p-5 mt-4 d-flex align-items-center justify-content-center flex-wrap'>
      {
       Searches.map((item)=>(
          <div>
           <Card className="shadow p-5 m-1 bg-body-tertiary rounded" style={{ width: '23rem', height: '28rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Card.Img variant="top" src={item.productImage}style={{height:"200px",width:'250px'}}/>
      <Card.Body>
        <Card.Title style={{fontFamily:'serif',textAlign:'center'}}>{item.productName}</Card.Title>
        <Card.Title style={{fontFamily:'serif',textAlign:'center'}}>Price:{item.Price}</Card.Title><br/><br/>
        <Button onClick={()=>Nvgt(`/view/${item.id}`)} style={{backgroundColor:'black',border:'none',alignItems:'center'}}>View Product</Button>
      </Card.Body>
    </Card><br/>
    </div>
        ))}
        </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Collections