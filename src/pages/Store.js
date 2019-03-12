import React from 'react'

export const Store = ({items, addToCart,}) => (
  <div>
    <ul style={{
      display: 'flex',
      flexWrap: 'wrap',
      
      
    }}>
      {items.map(({name, price, image}) => (
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
          {name}          
          </div>
          <div>
          {price}
          </div>
          <div>
            <img style={{width:100}} src={image} />
          </div>          
        </div>
         
          <button onClick={addToCart(name)}>Add me to list</button>
        </li>
      ))}
    </ul>
  </div>
)

