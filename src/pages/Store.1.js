import React from 'react'

export const Store = ({storeItems, addToCart,}) => (
  <div>
    <ul style={{
      display: 'flex',
      flexWrap: 'wrap',
      
      
    }}>
      {storeItems.map(({item, price, photo}) => (
        <li  style={{
          border: 'solid black 1px',
          height: '150px',
          width: '150px',
          textAlign: 'center',
          listStyle: 'none',
          flexDirection: 'column',
          backgroundColor:'tan',
          margin: '20px',
                            
        }}>
        <div>
          <div style={{textDecoration:'underline'}}>
          {item}          
          </div>
          <div>
          {price}
          </div>
          <div>
          {photo}
          </div>          
        </div>
         
          <button onClick={addToCart(item)}>Add me to list</button>
        </li>
      ))}
    </ul>
  </div>
)

