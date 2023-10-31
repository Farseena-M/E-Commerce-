import { Route, Routes } from "react-router-dom";
import Registration from './Components/SignUp'
import Login from "./Components/Login"
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { createContext, useState } from "react";
import Collections from "./Components/Collections";
import { PRODUCTS } from "./Components/Products";
import Cloths from "./Components/Cloths";
import Prdcts from "./Components/Prdcts";
import ViewProduct from "./Components/ViewProduct";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import AdminLogin from "./Admin/AdminLogin";
import Sidebar from "./Admin/SideBar";
import AdminUsers from "./Admin/AdminUsers";
import AdminHome from "./Admin/AdminHome";
import AdminPrdcts from "./Admin/AdminPrdcts";
import Edit from "./Admin/Edit";
import Add from "./Admin/Add";
export const userContext = createContext()
function App() {
  const [user,setUser]=useState([])
  const [login,setLogin]=useState(false)
  const[product,setProduct]=useState(PRODUCTS)
  const [cart,setCart]=useState([])
return (
    <div>
      <userContext.Provider value={{user,setUser,login,setLogin,product,cart,setCart,setProduct}}>
    <Routes>
      <Route path="/rgstn" element={<Registration/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cloths" element={<Cloths/>}></Route>
      <Route path="/prdcts" element={<Prdcts/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/adminlogin" element={<AdminLogin/>}></Route>
      <Route path="/sidebar" element={<Sidebar/>}></Route>
      <Route path="/adminusers" element={<AdminUsers/>}></Route>
      <Route path="/adminhome" element={<AdminHome/>}></Route>
      <Route path="/edit/:id" element={<Edit/>}></Route>
      <Route path="/adminprdcts" element={<AdminPrdcts/>}></Route>
      <Route path="/add" element={<Add/>}></Route>
      <Route path="/clctns" element={<Collections/>}></Route>
      <Route path="/view/:id" element={<ViewProduct/>}></Route>
    </Routes>
    </userContext.Provider>
    <ToastContainer/>
    </div>
  );
}

export default App;
