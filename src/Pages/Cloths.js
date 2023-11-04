import { PRODUCTS } from '../Components/Products'
import Navigation from '../Components/Navigation'
import { Button, Card, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
const Cloths = () => {
  const Nvgt=useNavigate()
  const babyCloth=PRODUCTS.filter((clth)=>clth.baby==='cloth')
  return (
    <div style={{backgroundColor:'lightgrey'}}>
      <Navigation/>
      <Container>
      <div className='m-4 p-5 mt-4 d-flex align-items-center justify-content-center flex-wrap'>
      {
       babyCloth.map((item)=>(
          <div>
           <Card className="shadow p-5 m-1 bg-body-tertiary rounded" style={{ width: '23rem', height: '28rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Card.Img variant="top" src={item.productImage}style={{height:"200px",width:'250px'}}/>
      <Card.Body>
        <Card.Title style={{fontFamily:'serif',textAlign:'center'}}>{item.productName}</Card.Title>
        <Card.Title style={{fontFamily:'serif',textAlign:'center'}}>Price:{item.Price}</Card.Title><br/><br/>
        <Button onClick={()=>Nvgt(`/view/${item.id}`)} style={{backgroundColor:'black',border:'none'}} variant="primary">View product</Button>
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

export default Cloths