import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../App';

export default function Cart() {
  const cartContext = useContext(CartContext);

  return (
    <>
      {
        cartContext.cart.length === 0 ? 
        'Cart is empty':
        <>
          <div className='cart'>
            {cartContext.cart.map(item => <CartCard key='' {...item}/>)}
          </div>
          <div className='cart--footer'>
            <div 
              className='cart--clearall'
              onClick={() => cartContext.dispatch({ type: "REMOVE_ALL" })}
            >
              Clear all
            </div>
            <div className='cart--checkout'>Checkout</div>
            <div className='cart--total'>Total ₹{cartContext.cart.reduce((total, item) => (total + item.price * item.cartQty), 0)}</div>
          </div>
        </> 
      }
    </>
  );
}

function CartCard(props){
  
  const cartContext = useContext(CartContext);

  return (
    <div className="cart--card">
      <img
          className='cart--card--img'
          src={require(`../../../src/images/${props.img}`)}
          alt="cart"
      />
      <div className='cart--card--info'>
          <span className='cart--card--title'>{props.title}</span>
          <span className='cart--card--price'>₹{props.price}</span>
          <span className='cart--card--size'>M (Male)</span>
          <div className='cart--card--counter'>
            <div 
              className='cart--remove'
              onClick={() => cartContext.dispatch({ type: "REMOVE_ONE", id: props.id, cartQty: props.cartQty })}
            >
              -
            </div>
            <div className='cart--num'>{props.cartQty}</div>
            <div 
              className='cart--add'
              onClick={() => cartContext.dispatch({ type: "ADD_ONE", id: props.id })}
            >
              +
            </div>
          </div>
          <span 
            className='cart--card--remove' 
            onClick={() => cartContext.dispatch({ type: "REMOVE_FROM_CART", id: props.id })}
          >
            Remove
          </span>
      </div>
    </div>
  );
}
