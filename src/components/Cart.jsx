import React from 'react'

const Cart = ({Cart}) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {
          Cart.map((item, index) => (
            <li key={index}>{item.name} is in your cart.</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Cart
