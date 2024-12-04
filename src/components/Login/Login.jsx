import React, { useState } from 'react'
import "./Login.css"
import { assets } from '../../assets/assets'
const Login = ({setshowlogin}) => {
    const[currentstate,setcurrentstate]=useState("Sign Up")
  return (
    <div className='Login'>
    <form className='login-container'>
  <div className="login-tile">
    <h2>{currentstate}</h2>
    <img onClick={()=>setshowlogin(false)}src={assets.cross_icon} alt="" />
  </div>
  <div className="mb-3  login-input">
    {currentstate==="Log In"?<></>:<input type="text" className="form-control" required placeholder='Enter ur name' id="exampleInputEmail1" aria-describedby="emailHelp"/>}
    <input type="text" className="form-control" required placeholder='Enter ur email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <input type="password" className="form-control" required  placeholder="Password" id="exampleInputPassword1"/>
</div>
<button className="btn btn-primary">{currentstate==="Sign Up"? "Create Account":"Log In"}</button>
<div className="login-condition">
<input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
    <p>BY continuing I agree to the Terms and Conditions</p>
</div>
{currentstate==="Log In"?<p>Create a new account?<span onClick={()=>setcurrentstate("Sign Up")}>Click here</span></p>:
<p>Already have an account?<span onClick={()=>setcurrentstate("Log In")}>Login here</span></p>}
</form>
    </div>
  )
}

export default Login
