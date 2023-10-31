import React from 'react'
import Sidebar from './SideBar'

const AdminHome = () => {
  return (
    <div>
        <Sidebar />
        <div style={{flex:'1',textAlign:'center'}}>
            <h1>Welcome To Admin Section</h1>
        </div>
    </div>
  )
}

export default AdminHome