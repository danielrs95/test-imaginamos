import React from 'react';

const CartItem = ({ item }) => {
  return (
    <>
      <div className='col-12 col-xxl-6'>
        <img
          src={item.image}
          className='img-fluid bg-light'
          alt='...'
          style={{ borderRadius: ' 1rem' }}
        />
      </div>
      <div className='col-12 d-lg-flex align-items-lg-center justify-content-lg-between col-xxl-6 text-center '>
        <span className='fw-bold'>
          {item.qty} x {item.name}
        </span>
        <span className='text-muted'>${item.price}</span>
      </div>
    </>
  );
};

export default CartItem;
