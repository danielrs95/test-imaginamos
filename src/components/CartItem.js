import React from 'react';

const CartItem = ({ item }) => {
  return (
    <>
      <div className='d-xxl-flex'>
        <div className='col-12 col-xxl-6'>
          <img
            src={item.image}
            className='img-fluid bg-light my-2'
            alt='...'
            style={{ borderRadius: ' 1rem' }}
          />
        </div>
        <div className='col-12 d-lg-flex align-items-lg-center justify-content-lg-between col-xxl-6 text-center '>
          <span className='fw-bold mx-1 px-1'>
            {item.qty} x {item.name}
          </span>
          <span className='text-muted mx-1'>${item.price}</span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
