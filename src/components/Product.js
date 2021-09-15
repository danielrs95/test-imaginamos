import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='col-4'>
      {product.name}
      <img src={product.image} className='img-fluid ' alt='...' />
    </div>
  );
};

export default Product;
