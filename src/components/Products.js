import React from 'react';
import products from '../assets/products.json';
import Product from './Product';

const Products = () => {
  return (
    <div className='container'>
      <div className='row'>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
