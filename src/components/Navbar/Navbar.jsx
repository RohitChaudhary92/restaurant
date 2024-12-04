import {useState} from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { Storecontext } from '../Context/Storecontext';
import { useContext } from 'react';
const Navbar = ({setshowlogin}) => {
    const[menu,setmenu]=useState("Home");
    const{getTotalcartamount} = useContext(Storecontext)
  return (
    <div className='navbar'>
     <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
     <ul className="navbar-menu">
        <Link onClick={()=>{setmenu("Home")}} className={menu==="Home"?"active":""}>Home</Link>
        <a href="#menu" onClick={()=>{setmenu("Menu")}} className={menu==="Menu"?"active":""}>Menu</a>
        <a href="#app-download" onClick={()=>{setmenu("Mobile-App")}} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
        <a href="#footer" onClick={()=>{setmenu("Contact us")}} className={menu==="Contact us"?"active":""}>Contact us</a>
     </ul>
     <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/Cart">  <img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalcartamount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setshowlogin(true)}>Sign in</button>
        
     </div>
    </div>
  )
}

export default Navbar
