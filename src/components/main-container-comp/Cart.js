import './Cart.css';
import React from 'react';

export default function Cart() {
  return (
    <>
      <div className='cart'>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>

        <CartCard/>
        <CartCard/>
        <CartCard/>
      </div>
      <div className='cart--footer'>
        <div className='cart--clearall'>Clear all</div>
        <div className='cart--checkout'>Checkout</div>
        <div className='cart--total'>Total ₹1000</div>
      </div>
    </>
  );
}

function CartCard(){
  return (
    <div className="cart--card">
      <img
          className='cart--card--img'
          src={require(`../../../src/images/weird-vibes-grey.png`)}
          alt="cart"
      />
      <div className='cart--card--info'>
          <span className='cart--card--title'>Weird vibes</span>
          <span className='cart--card--price'>Rs.449</span>
          <span className='cart--card--size'>M (Male)</span>
          <div className='cart--card--counter'>
            <div className='cart--remove'>-</div>
            <div className='cart--num'>1</div>
            <div className='cart--add'>+</div>        
          </div>
          <span className='cart--card--remove'>Remove</span>
      </div>
    </div>
  );
}
