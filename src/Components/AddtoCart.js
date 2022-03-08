import React from 'react';
import { useState } from 'react';

function AddtoCart() {
  const [cartCount, setCart] = useState(0);
  const [Item, setItem] = useState('Add to cart');

  const cartData1 = () => {
    let btn1 = document.querySelector('.b1');
    if ((btn1.clicked = true)) {
      setItem('added to cart');
      setCart(cartCount + 1);
    }
  };
  const cartData2 = () => {
    let btn2 = document.querySelector('.b2');
    if ((btn2.clicked = true)) {
      setItem('added to cart');
      setCart(cartCount + 1);
    }
  };

  return (
    <div>
      <button onClick={cartData1} className="b1">
        P1- {Item}
      </button>
      <button onClick={cartData2} className="b2">
        P2-{Item}
      </button>
      <button className="cart"> cart : {cartCount} </button>
    </div>
  );
}

export default AddtoCart;
