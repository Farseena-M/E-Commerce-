import React, { useContext } from 'react'
import { userContext } from '../App'
import { Card, Container, Form } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
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
      <div
        className="templateContainer "
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <div className="searchInput_Container">
          <input
            style={{ width: "350px" ,height:'35px',border:'none',borderRadius:'5px',position:'relative',top:'30px'}}
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>

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