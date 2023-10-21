import { PRODUCTS } from './Products'
import Navigation from './Navigation'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Prdcts = () => {
  const babyProduct = PRODUCTS.filter((prdct)=>prdct.baby==='product')
  return (
       <div>
      <Navigation/>
      <Container>
      <h1 style={{textAlign:'center',fontFamily:'serif'}}><u>Products</u></h1>
      <div className='m-4 p-5 mt-4 d-flex align-items-center justify-content-center flex-wrap'>
      {
       babyProduct.map((item)=>(
          <div>
     <Card className="shadow p-5 m-1 bg-body-tertiary rounded" style={{ width: '23rem', height: '28rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Card.Img variant="top" src={item.productImage}style={{height:"200px",width:'250px'}}/>
      <Card.Body>
        <Card.Title style={{fontFamily:'serif',textAlign:'center'}}>{item.productName}</Card.Title>
        <Card.Title style={{fontFamily:'serif',textAlign:'center'}}>{item.Price}</Card.Title><br/><br/>
        <Link><Button style={{backgroundColor:'black'}} variant="primary">Add to cart</Button></Link>
        <Link><Button style={{backgroundColor:'black',marginLeft:'10px'}} variant="primary">Buy now</Button></Link>
      </Card.Body>
    </Card><br/>
      </div>
        ))}
        </div>
        </Container>
    </div>
  )
}

export default Prdcts