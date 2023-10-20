import { Route, Routes } from "react-router-dom";
import Registration from './Components/Registration'
import Login from "./Components/Login"
import Home from "./Components/Home";
import Boy from "./Components/Boy";
import Girl from "./Components/Girl";
import Cart from "./Components/Cart";
import Admin from "./Components/Admin";
import { createContext, useState } from "react";
import Collections from "./Components/Collections";
import { PRODUCTS } from "./Components/Products";
export const userContext = createContext()
function App() {
  const [user,setUser]=useState([])
  const [login,setLogin]=useState(false)
  const[product]=useState(PRODUCTS)
return (
    <div>
      <userContext.Provider value={{user,setUser,login,setLogin,product}}>
    <Routes>
      <Route path="rgstn" element={<Registration/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="boy" element={<Boy/>}></Route>
      <Route path="girl" element={<Girl/>}></Route>
      <Route path="cart" element={<Cart/>}></Route>
      <Route path="admin" element={<Admin />}></Route>
      <Route path="clctns" element={<Collections/>}></Route>
    </Routes>
    </userContext.Provider>
    </div>
  );
}

export default App;
