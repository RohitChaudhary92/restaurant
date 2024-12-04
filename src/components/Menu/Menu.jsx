/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// import { Storecontext } from '../Context/Storecontext'
// import { useContext } from 'react'
import "./Menu.css"
import { menu_list } from '../../assets/assets'
const Menu = ({category,setcategory}) => {
// const{menu_list}=useContext(Storecontext)
  return (
    <div className='menu' id="menu">
      <h1>Explore our menu</h1>
      <p className='menu-text'>choose from a diverse menu Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quis facilis, velit voluptate doloribus ex?</p>
    <div className='menu-list'>
        {
            menu_list.map((item,index)=>{ return(
                <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="menu-list-item" key={index}>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )})
        }
    </div>
    <hr/>
    </div>
  )
}

export default Menu
