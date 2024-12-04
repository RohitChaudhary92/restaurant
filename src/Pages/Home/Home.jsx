/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../../components/Header/Header.jsx'
import { useState } from 'react'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay.jsx'
// import { assets } from '../../assets/assets.js'
import Menu from '../../components/Menu/Menu.jsx'

const Home = () => {
   const[category,setcategory]=useState("All")
return (
    <div id="Home">
      <Header/>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
   <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://as1.ftcdn.net/v2/jpg/01/27/65/58/1000_F_127655811_iv0Vf94XxAy7hneGXka6C1kaT8jAe4qC.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://as1.ftcdn.net/v2/jpg/02/27/62/24/1000_F_227622470_sJ3yEaz44RK7UrWNaGdSn7azgeRu9UDs.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://as2.ftcdn.net/v2/jpg/02/94/26/33/1000_F_294263329_1IgvqNgDbhmQNgDxkhlW433uOFuIDar4.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Menu category={category} setcategory={setcategory}/>
<Fooddisplay  category={category} />

</div>

  )
}

export default Home
