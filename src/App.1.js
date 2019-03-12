import React, { Component } from 'react';
import './App.css';
import { Store } from './pages/Store';
import { Cart } from './pages/Cart';

// const storeItems = [
//   {
//     item: 'Rzr xp41000',
//     price: '$15,000',
//     photo: ''
//   },
//   {
//     item: 'Trip to Hawaii',
//     price: '$5,000',
//     photo: ''
//   },
//   {
//     item: 'Dream Tech Job',
//     price: 'Hard work',
//     photo: ''
//   },
//   {
//     item: 'Yacht',
//     price: '$1,000,000',
//     photo: ''
//   },
//   {
//     item: 'Helicopter',
//     price: '$500,000',
//     photo: ''
//   },
//   {
//     item: 'Dream House',
//     price: '$1,500,000',
//     photo: ''
//   },
//   {
//     item: 'Iceland Vacation',
//     price: '$15,000',
//     photo: ''
//   },
//   {
//     item: 'Europe Vacation',
//     price: '$10,000',
//     photo: ''
//   },
//   {
//     item: 'Tesla Sportster',
//     price: '$200,000',
//     photo: ''
//   },
//   {
//     item: 'Lambogini Hurican',
//     price: '300,000',
//     photo: ''
//   },
//   {
//     item: 'Farrari',
//     price: '250,000',
//     photo: ''
//   },
//   {
//     item: 'Cabin',
//     price: '500,000',
//     photo: ''
//   },

// ]

class App extends Component {

  state = {
    
    cart: [],
    quantity: 0,
  }

  addToCart = (item) => () => {
    if (this.state.quantity === 0) {
      const cart = [...this.state.cart, item];
      this.setState({
        cart: cart,
        quantity: this.state.quantity + 1
      })
    } else {
      const cart = [this.state.cart];
      this.setState({
        cart: cart,
        quantity: this.state.quantity + 1
      })
    }
  }

  removeFromCart = (index) => () => {
    this.state.cart.splice(index, 1)
    this.setState({
      cart: this.state.cart
    })
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
            <Store storeItems={storeItems} addToCart={this.addToCart} />
          </div>
          <div>
            <Cart quantity={this.state.quantity} cartItems={this.state.cart} removeFromCart={this.removeFromCart} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
