import React, { useContext } from 'react'
import { userContext } from '../App'
import { Button, Card, CardBody, CardImg, CardTitle } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cart = () => {
  const{cart}=useContext(userContext)
  console.log(cart);
  return (
    <div>
    {
       cart.map((item)=>(
          <div>
           <Card className="shadow p-4 m-2 bg-body-tertiary rounded" style={{ width: '18rem', height: '28rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardImg variant="top" src={item.productImage} style={{height:"200px",width:'200px'}}/>
      <CardBody>
        <CardTitle style={{fontFamily:'serif',textAlign:'center'}}>{item.productName}</CardTitle>
        <CardTitle style={{fontFamily:'serif',textAlign:'center'}}>{item.Price}</CardTitle><br/><br/>
        <Link to='/cart'><Button style={{backgroundColor:'black'}} variant="primary" >Add to cart</Button></Link>
        <Link><Button style={{backgroundColor:'black',marginLeft:'10px'}} variant="primary">Buy now</Button></Link>
      </CardBody>
    </Card><br/>

        </div>
        ))}
    </div>
  )
}

export default Cart