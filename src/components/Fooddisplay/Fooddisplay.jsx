import React from 'react'
import "./Fooddisplay.css"
import { useContext } from 'react'
import { Storecontext } from '../Context/Storecontext'
import Fooditem from './Fooditem'
const Fooddisplay = ({category}) => {
    const{food_list}=useContext(Storecontext)
  return (
    <div className='food-display' id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item)=>{
          if( category ==="All" || category===item.category){
           return <Fooditem key={item._id}
           item= {item}
            />
          }  
   })}
      </div>
    </div>
  )
}

export default Fooddisplay
