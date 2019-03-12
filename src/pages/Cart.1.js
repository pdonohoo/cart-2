import React from 'react'

export const Cart = ({ cartItems, removeFromCart, index, quantity }) => (
  <div>
    <ul>
      {cartItems.map((cartItem) => (
        <li onClick={removeFromCart(index)}>
          {cartItem}{quantity}
        </li>
      ))}
    </ul>
  </div>
)