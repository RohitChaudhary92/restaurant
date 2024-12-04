import React from 'react'
import "./PlaceOrder.css"
import { useContext } from 'react'
import { Storecontext } from '../../components/Context/Storecontext'

const PlaceOrder = () => {
  const{getTotalcartamount} = useContext(Storecontext)
  return (
   <form  className="place-order">
     <div className="place-order-left">
         <p className="title">Delivery Information</p>
         <div className="multifields">
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
         </div>
         <input type="email" placeholder="Email address"/>
         <input type="text" placeholder="Street"/>
         <div className="multifields">
          <input type="text" placeholder="City"/>
          <input type="text" placeholder="State"/>
         </div>
         <div className="multifields">
          <input type="text" placeholder="Zip Code"/>
          <input type="text" placeholder="Country"/>
         </div>
         <input type="text" placeholder="Phone"/>
     </div>
     <div className="place-order-right">
     <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <div className="carttotal-details">
            <p>Subtotal</p>
            <p>{getTotalcartamount()}</p>
          </div>
          <hr/>
          <div className="carttotal-details">
            <p>Delivery Fee</p>
            <p>{getTotalcartamount()==0?0:2}</p>
          </div>
          <hr/>
          <div className="carttotal-details">
            <b>Total</b>
            <b>${getTotalcartamount()==0?0:getTotalcartamount()+2}</b>
          </div>
        </div>
        <button >Proceed to Payment</button>
      </div>
     </div>
   </form>
  )
}

export default PlaceOrder
