import React, { useContext, useState } from 'react'
import Sidebar from './SideBar'
import { useNavigate, useParams } from 'react-router-dom'
import { userContext } from '../App'
import { Button, Form } from 'react-bootstrap'

const Edit = () => {
    const nvgt=useNavigate()
    const {id} =useParams()
    const {product,setProduct}=useContext(userContext)
    const editProduct=product.find((item)=>item.id===parseInt(id))
    console.log(editProduct);
    const [name,setName]=useState(editProduct.productName)
    const [price,setPrice]=useState(editProduct.Price)
    const [image,setImage]=useState(editProduct.productImage)
    const [baby,setbaby]=useState(editProduct.baby)
    const handleSave=(e)=>{
    e.preventDefault()
    const updates={
        ...editProduct,
    productName:name,
    Price:price,
    productImage:image,
    baby:baby
    }
    const updatedProduct=product.map((item)=>item.id==parseInt(id)?updates:item)
    console.log(updatedProduct);
    setProduct(updatedProduct)
    nvgt('/adminprdcts')
    }
  return (
    <div style={{display:'flex'}}>
      <Sidebar />
      <div style={{flex:'1',textAlign:'center'}}>
        <h1>Edit Product</h1><br /><hr />
       <Form>
        <label >Edit Product Name :</label>
        <input type='text' name='productName' defaultValue={editProduct.productName} onChange={(e)=>setName(e.target.value)}/><br /><br />
        <label >Edit Product Price :</label>
        <input  type='text' name='Price' defaultValue={editProduct.Price} onChange={(e)=>setPrice(e.target.value)}/><br /><br />
        
        <label >Edit Product Image :</label>
        <input  type='text' name='productImage' defaultValue={editProduct.productImage} onChange={(e)=>setImage(e.target.value)}/><br /><br />
        
        <label >Edit Product Baby :</label>
        <input  type='text' name='baby' defaultValue={editProduct.baby} onChange={(e)=>setbaby(e.target.value)}/><br /><br />
        <Button onClick={handleSave} style={{backgroundColor:'black',border:'none'}} >Save</Button>
       </Form>
      </div>
    </div>
  )
}

export default Edit