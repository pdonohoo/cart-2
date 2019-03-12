import React, { Component } from 'react';
import './App.css';
import { Store } from './pages/Store';
import { Cart } from './pages/Cart';
import { getItems } from './data/items'

 

class App extends Component {

  state = {
    items: [],
    cart: [],
    quantity: 0,
  }

  addToCart = (item) => () => {  
      const cart = [...this.state.cart, item];
      this.setState({
        cart: cart,
       
      })
  }

  removeFromCart = (item) => () => {
    this.state.cart.splice(item, 1)
    this.setState({
      cart: this.state.cart
    })
  }

  async componentDidMount(){
    try{
      const items = await getItems()
      this.setState({
        items
      }) 
    } catch(err){
      console.log(err)
    }
  }

  render() {
    return (
      <div style={{
        backgroundColor: 'gray',
        height: '1000px',

      }}>
        <header style={{
          textAlign: 'center',
        }}>
          <h1>The Dreamer Store</h1>
        </header>
        <div>
          <div>
            <Store items={this.state.items} addToCart={this.addToCart} />
          </div>
          <div>
            <Cart cartItems={this.state.cart} removeFromCart={this.removeFromCart} />
          </div>
        </div>
      </div>
    ); 
  }
}

export default App;
