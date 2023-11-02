import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Container } from 'react-bootstrap'
import Navigation from './Navigation'
import { toast } from 'react-toastify'

const ViewProduct = () => {
    const Nvgt=useNavigate()
    const{product,cart,setCart,login}=useContext(userContext)
    const {id}=useParams()
    const filterPrdct=product.filter((item)=>item.id===parseInt(id))
   const buttonClick=()=>{
   if(login){
    const [filterArray]=filterPrdct
    const fltrCrt=cart.filter((item)=>item.id===filterArray.id)
    if(fltrCrt.length>0){
       toast.warning('Product already added to the cart')
    }
    else{
    setCart(prevState=>[...prevState,filterArray])
    toast.success('added the product to cart')
   }
  }
   else{
    toast.error('Please login')
     Nvgt('/login')
   }
   }
  return (
    <div style={{backgroundColor:'lightgrey',position:'absolute',height:'820px',width:'100%'}}>
            <Navigation/>
    <Container style={{alignItems:'center'}}className=' mt-4 p-4'>
    <div className='m-4 p-5 mt-4 d-flex align-items-center justify-content-center flex-wrap'>
        {
       filterPrdct.map((item)=>(
          <div>
      <Card className="shadow p-5 m-1 bg-body-tertiary rounded" style={{ width: '23rem', height: '28rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Card.Img variant="top" src={item.productImage}style={{height:"250px",width:'250px'}}/>
      <Card.Body>
        <Card.Title style={{fontFamily:'serif',textAlign:'center'}}>{item.productName}</Card.Title>
        <Card.Title style={{fontFamily:'serif',textAlign:'center'}}>{item.Price}</Card.Title>
       {cart.find((crtItm)=>crtItm.id===item.id)?
        <Button onClick={()=>Nvgt('/cart')} style={{backgroundColor:'black',border:'none'}}>Go to cart</Button>:
        <Button onClick={buttonClick} style={{backgroundColor:'black',border:'none'}}>Add to cart</Button>}
      </Card.Body>
    </Card><br/>
    </div>
        ))}
    </div>
    </Container>
    </div>
  )
}

export default ViewProduct