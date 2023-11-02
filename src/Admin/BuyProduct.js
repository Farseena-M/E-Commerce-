import React, { useContext } from 'react'
import { userContext } from '../App'
import Sidebar from './SideBar'
import { Table } from 'react-bootstrap'

const BuyProduct = () => {
    const {buy}=useContext(userContext)
  return (
    <div style={{display:'flex'}}>
    <Sidebar />
    <div style={{flex:'1',textAlign:'center'}}>
     <Table striped bordered hover size="sm" style={{margin:'0 auto'}}>
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Qty</th>
      </tr>
    </thead>
    {
        buy.map((item)=>(
          <tbody>
            <tr>
              <td><img style={{height:'3rem'}} src={item.productImage} /></td>
              <td>{item.productName}</td>
              <td>{item.Price}</td>
              <td>{item.qty}</td>
            </tr>
          </tbody>
        ))
}
      </Table>
</div>
</div>
  )
}

export default BuyProduct