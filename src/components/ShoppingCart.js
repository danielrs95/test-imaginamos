import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      {cartItems.length === 0 ? (
        <h4 className='text-center text-dark'>
          <i className='fas fa-exclamation-triangle'></i>
          <br></br>
          Your cart is empty, add something!
        </h4>
      ) : (
        cartItems.map((item) => <CartItem item={item} />)
      )}
      <div className='w-100 d-flex justify-content-between border-bottom pb-2 mt-5'>
        <h3 style={{ color: '#ff6223' }}>Total</h3>

        {cartItems.length === 0 ? (
          <h3>$0</h3>
        ) : (
          <h3>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </h3>
        )}
      </div>
      <div className='d-flex mt-5 justify-content-end '>
        <button
          className='btn btn-warning p-3 fw-bold'
          style={{ borderRadius: '1.5rem' }}
        >
          <div className='d-flex align-items-center'>
            <span>Checkout</span>
            <img
              src='/icons/109617.svg'
              className='mx-2'
              alt='...'
              style={{ height: '2rem' }}
            />
          </div>
        </button>
      </div>
    </>
  );
};

export default ShoppingCart;
