import React, { useContext } from 'react'
import { userContext } from '../App'
import { Card, Container } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Collections = () => {
  const{product}=useContext(userContext)
  return (
    <div>
      <Container>
      <div className='m-4 p-5 mt-4 d-flex align-items-center justify-content-center flex-wrap'>
      <h1 style={{position:'relative',left:'700px',fontFamily:'serif'}}>Collections</h1>
      {
       product.map((item)=>(
          <div>
           <Card className="shadow p-3 m-2 bg-body-tertiary rounded" style={{ width: '18rem', height: '28rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Card.Img variant="top" src={item.productImage} />
      <Card.Body>
        <Card.Title style={{fontFamily:'serif'}}>{item.productName}</Card.Title>
        <Card.Title style={{position:'relative',left:'100px',fontFamily:'serif'}}>{item.Price}</Card.Title>
        <Link to='/cart'><Button style={{backgroundColor:'black',position:'relative',left:'15px'}} variant="primary">Add to cart</Button></Link>
        <Link><Button style={{backgroundColor:'black' ,position:'relative',left:'40px'}} variant="primary">Buy now</Button></Link>
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