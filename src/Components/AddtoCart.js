import React from 'react';
import { useState } from 'react';

function AddtoCart() {
  const [cartCount, setCartCount] = useState(0);
  const [Item, setItem] = useState('Add to cart');
  const [cartItem, setCartItem] = useState([]);

  const cartData = (product) => {
    setItem('Added to Cart');
    setCartCount((cartCount) => cartCount + 1);
    setCartItem(...cartItem, product);
  };

  return (
    <div>
      <button onClick={(cartData) => cartData('P1')} className="b1">
        P1- {Item}
      </button>
      <button onClick={(cartData) => cartData('P2')} className="b2">
        P2-{Item}
      </button>
      <button className="cart"> cart : {cartCount} </button>
      cartItem.map((products) => <li> {products} </li>)
    </div>
  );
}

export default AddtoCart;
