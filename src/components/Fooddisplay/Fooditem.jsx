// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Fooditem.css"
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Storecontext } from '../Context/Storecontext';
const Fooditem = ({item}) => {
    // const[itemcount,setcount]=useState(0)
    const{name,price,image,description,_id,category} =item;
    const{cartitem,addToCart,removecart}=useContext(Storecontext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className="food-item-img"src={image} alt="" />
        {
        // !itemcount?
        //  <img className="add" onClick={()=>setcount(prev=>prev+1)} src={assets.add_icon_white} alt="" />:
        //  <div className='fooditem-counter'>
        //     <img onClick={()=>setcount(prev=>prev-1)} src={assets.remove_icon_red}  className="src" />
        //     <p>{itemcount}</p>
        //     <img onClick={()=>setcount(prev=>prev+1)} src={assets.add_icon_green}  className="src" />
        //      </div>
        !cartitem[_id]?
         <img className="add" onClick={()=>addToCart(_id)} src={assets.add_icon_white} alt="" />:
         <div className='fooditem-counter'>
            <img onClick={()=>removecart(_id)} src={assets.remove_icon_red}  className="src" />
            <p>{cartitem[_id]}</p>
            <img onClick={()=>addToCart(_id)} src={assets.add_icon_green}  className="src" />
             </div>
        }
      </div>
      <div className="food-item-info">
        <div className="rating">
            <p>{name}</p>
            <img src={assets.rating_starts}alt="" />
        </div>
        <p className="desc">{description}</p>
        <p className="price">${price}</p>
        
      </div>
    </div>
  )
}
export default Fooditem
