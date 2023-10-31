import React, { useContext, useState } from 'react'
import Sidebar from './SideBar'
import { Button } from 'react-bootstrap'
import { userContext } from '../App'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const Nvgt=useNavigate()
    const {product,setProduct}=useContext(userContext)
    const [newProduct,setNewProduct]=useState({
        id:product.length+1,
        productName:'',
        Price:'',
        productImage:'',
        baby:''
    })
    const Change= (e) =>{
      const {name,value}=e.target
      setNewProduct({
        ...newProduct,[name]:value
      })
    }
    const Submit =()=>{
   if(newProduct.productName && newProduct.Price && newProduct.productImage && newProduct.baby){
    setProduct([...product,newProduct])
    setNewProduct({
        id:product.length+1,
        productName:'',
        Price:'',
        productImage:'',
        baby:''
    })
    Nvgt('/adminprdcts')
   }else{
    toast.error('Fill')
   }
    }
  return (
    <div className='d-flex'>
        <Sidebar/>
        <div style={{flex:'1',textAlign:'center'}}>
            <label>Product Name</label>
            <input type='text' name='productName' value={newProduct.productName} onChange={Change} required/> <br /><br />   
            <label>Product Price</label>
            <input type='text' name='Price' value={newProduct.Price}  onChange={Change}/><br /><br />
            <label>Product Image</label>
            <input type='text' name='productImage' value={newProduct.productImage}  onChange={Change}/><br /><br />
            <label>Product type</label>
            <input type='text' name='baby' value={newProduct.baby}  onChange={Change}/><br /><br />
            <Button style={{backgroundColor:'black',border:'none'}} onClick={Submit}>Save</Button>
        </div>
    </div>
    
  )
}

export default Add