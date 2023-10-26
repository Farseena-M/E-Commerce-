import React, { useContext } from 'react'
import { userContext } from '../App'
import { Card, Container } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import Navigation from './Navigation'
const Collections = () => {
  const{product}=useContext(userContext)
  const Nvgt=useNavigate()
  return (
    <div style={{backgroundColor:'lightgrey'}}>
      <Navigation/>
      <Container>
      <div className='m-4 p-5 mt-4 d-flex align-items-center justify-content-center flex-wrap'>
      {
       product.map((item)=>(
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
    </div>
  )
}

export default Collections