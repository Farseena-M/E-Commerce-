import { Route, Routes } from "react-router-dom";
import Registration from './Components/Registration'
import Login from "./Components/Login"
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Admin from "./Components/Admin";
import { createContext, useState } from "react";
import Collections from "./Components/Collections";
import { PRODUCTS } from "./Components/Products";
import Cloths from "./Components/Cloths";
import Prdcts from "./Components/Prdcts";
export const userContext = createContext()
function App() {
  const [user,setUser]=useState([])
  const [login,setLogin]=useState(false)
  const[product]=useState(PRODUCTS)
  const [cart,setCart]=useState([])
return (
    <div>
      <userContext.Provider value={{user,setUser,login,setLogin,product,cart,setCart}}>
    <Routes>
      <Route path="/rgstn" element={<Registration/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cloths" element={<Cloths/>}></Route>
      <Route path="/prdcts" element={<Prdcts/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/clctns" element={<Collections/>}></Route>
    </Routes>
    </userContext.Provider>
    </div>
  );
}

export default App;
