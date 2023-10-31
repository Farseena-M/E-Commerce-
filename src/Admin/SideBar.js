import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const Nvgt=useNavigate()
  return (
    <div style={{ display: 'flex', height: '371vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/admin" className="text-decoration-none" style={{ color: 'inherit' }}>
            Admin
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink onClick={()=>Nvgt('/adminhome')} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminusers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminprdcts" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/add" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Add</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Home</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
           
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;