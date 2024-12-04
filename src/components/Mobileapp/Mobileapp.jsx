// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../../assets/assets'
import "./Mobileapp.css"
const Mobileapp = () => {
  return (
    <div className='app-download' id="app-download">
      <p>For better experience Download<br/>Tomato App</p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default Mobileapp
