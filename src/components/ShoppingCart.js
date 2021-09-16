import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          {cartItems.length === 0 ? (
            <div>Cart Item empty</div>
          ) : (
            cartItems.map((item) => <CartItem item={item} />)
          )}
          <div className='col-12 d-flex justify-content-between'>
            <h3>Total</h3>

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
