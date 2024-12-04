import { createContext, useEffect } from "react";
import { food_list } from "../../assets/assets";
import { menu_list } from '../../assets/assets'
export const Storecontext=createContext(null);
import { useState } from "react";

const StorecontextProvider=(props)=>{
const[cartitem,setcartitem]=useState({})
const addToCart=(itemid)=>{
  if(!cartitem[itemid]){
    setcartitem((prev)=>({...prev,[itemid]:1}));
}
else{
    setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
}
}
const removecart=(itemid)=>{
   setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
}

const getTotalcartamount=()=>{
    let totalAmount=0;
    for(const item in cartitem)
    {
        if(cartitem[item]>0){
            let iteminfo=food_list.find((product)=>product._id===item)
            totalAmount +=iteminfo.price*cartitem[item];
        }
        
    }
    return totalAmount
}
useEffect(()=>{
 console.log(cartitem);
},[cartitem])

    const contextvalue={
        menu_list,
        food_list,
        cartitem,
        setcartitem,
        addToCart,
        removecart,
        getTotalcartamount
     }
    return(
        <Storecontext.Provider value={contextvalue}>{props.children}</Storecontext.Provider>
    )
}
export default StorecontextProvider;