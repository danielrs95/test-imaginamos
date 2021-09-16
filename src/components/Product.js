import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='col-4 mt-5'>
      <div className='position-relative'>
        <img
          src={product.image}
          className='img-fluid'
          alt='...'
          style={{ height: '15rem', borderRadius: '2rem' }}
        />
        <span
          className='position-absolute bottom-0 start-0 p-3'
          style={{
            backgroundColor: '#f8f8f8',
            borderRadius: '0 2rem 0 2rem',
          }}
        >
          {product.time}
        </span>
      </div>

      <div>
        <h5 className='mt-2'>{product.name}</h5>
        <div className='d-flex align-items-center'>
          <i className='far fa-star'></i>
          <span className='mx-2'>{product.qualification}</span>
          <span className='mx-2 text-muted'>${product.price}</span>
          <button
            type='button'
            className='btn btn-outline-dark '
            onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
