import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className='container my-5 py-5'>
      <div className='row'>
        <div className='col-12'>
          {cartItems.length === 0 ? (
            <h4 className='text-dark'>
              <i className='fas fa-exclamation-triangle'></i>
              <br></br>
              Your cart is empty, add something!
            </h4>
          ) : (
            cartItems.map((item) => <CartItem item={item} />)
          )}
          <div className='col-12 d-flex justify-content-between border-bottom pb-2 mt-5'>
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
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
