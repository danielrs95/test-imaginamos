import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className='d-flex row'>
      <div className='col-3'>image</div>
      <div className='col-6'>
        {item.qty} x {item.name}
      </div>
      <div className='col-3'>${item.price}</div>
    </div>
  );
};

export default CartItem;
