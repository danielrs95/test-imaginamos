import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const test = cartItems.find((x) => x.id === product.id);

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

      <h1>{test ? test.qty : <></>}</h1>

      <div>
        <h5 className='mt-2'>{product.name}</h5>
        <div>
          <i className='far fa-star'></i>
          <span>{product.qualification}</span>
          <span className='ms-3'>{product.price}$$</span>
          <button onClick={() => addToCartHandler(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
