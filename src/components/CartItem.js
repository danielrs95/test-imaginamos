import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className='my-4 d-flex row align-items-center'>
      <div className='col-3'>
        <img
          src={item.image}
          className='img-fluid bg-light'
          alt='...'
          style={{ borderRadius: ' 1rem' }}
        />
      </div>
      <div className='col-6 fw-bold'>
        {item.qty} x {item.name}
      </div>
      <div className='col-3 text-muted'>${item.price}</div>
    </div>
  );
};

export default CartItem;
