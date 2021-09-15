import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='col-4 mt-5'>
      <div className='position-relative'>
        <img
          src={product.image}
          className='img-fluid'
          alt='...'
          style={{ height: '15rem' }}
        />
        <span
          className='position-absolute bottom-0 start-0'
          style={{
            backgroundColor: '#f8f8f8',
          }}
        >
          {product.time}
        </span>
      </div>

      <div>
        <h5 className='mt-2'>{product.name}</h5>
        <div>
          <i className='far fa-star'></i>
          <span>{product.qualification}</span>
          <span className='ms-3'>{product.price}$$</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
