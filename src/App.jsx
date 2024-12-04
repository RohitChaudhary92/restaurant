// import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder"
import Footer from "./components/Footer/Footer"
import Mobileapp from "./components/Mobileapp/Mobileapp"
import { useState } from "react"
import Login from "./components/Login/Login"

const App = () => {
  const[showlogin,setshowlogin]=useState(false);
  return (
    <>
    {showlogin?<Login setshowlogin={setshowlogin}/>:<></>}
    <div className="app">
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order" element={<PlaceOrder/>}></Route>
      </Routes>
      <Mobileapp/>
    </div>
    <Footer/>
    </>
  )
}

export default App
