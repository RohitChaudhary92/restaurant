// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { Storecontext } from '../../components/Context/Storecontext'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const{cartitem,food_list,getTotalcartamount,removecart} = useContext(Storecontext)
  const navigate=useNavigate();
  return (
    <div>
    <div className='cart'>
      <div className="cartitem-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br/>
      <hr/>
      {food_list.map((item)=>{
          if( cartitem[item._id]>0){
           return (
           // eslint-disable-next-line react/jsx-key
           <div>
            <div className="cartitem-title cartitem-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartitem[item._id]}</p>
              <p>${item.price*cartitem[item._id]}</p>
              <p className='cross' onClick={()=>{
                return( removecart(item._id))
              }}>X</p>
            </div>
            <hr/>
            </div>
           )
          }  
         
   })}
    </div>
    <div className="cart-bottom">
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
        <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
      </div>
      <div className="promo-code">
        <div><p>If You Have A Promo code,Enter It Here</p>
        <div className='Promo-code-input'>
          <input type="text" placeholder='Promo code'/>
          <button>Submit</button>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart
