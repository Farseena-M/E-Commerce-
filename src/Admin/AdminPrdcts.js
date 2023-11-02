import React, { useContext } from 'react'
import { Button,  Table } from 'react-bootstrap'
import { userContext } from '../App'
import Sidebar from './SideBar'
import { useNavigate } from 'react-router-dom'

const AdminPrdcts = () => {
  const Nvgt=useNavigate()
    const {product,setProduct}=useContext(userContext)
    const removeItem=(id)=>{
      const rmvData=product.filter((item)=>item.id !== id)
      setProduct(rmvData)
     }
  return (
    <div style={{display:'flex'}}>
    <Sidebar />
    <div style={{flex:'1',textAlign:'center'}}>
     <Table striped bordered hover size="sm" style={{margin:'0 auto'}}>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        <th>Qty</th>
        <th>Action</th>
      </tr>
    </thead>
    {
        product.map((item)=>(
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.Price}</td>
              <td><img style={{height:'3rem'}} src={item.productImage} /></td>
              <td>{item.qty}</td>
              <td ><Button style={{backgroundColor:'black',border:'none'}} className='m-2' onClick={()=>Nvgt(`/edit/${item.id}`)}>Edit</Button>
              <Button  style={{backgroundColor:'black',border:'none'}} onClick={()=>removeItem(item.id)}>Delete</Button></td>
            </tr>
          </tbody>
        ))
}
      </Table>
</div>
</div>
  )
}

export default AdminPrdcts