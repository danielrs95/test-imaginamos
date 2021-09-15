import React from 'react';
import categories from '../assets/categories.json';

const Categories = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='d-flex'>
            <span>Restaurantes</span>
            <span>Boton delivery</span>
          </div>
          <div className=''></div>
          <span>Categories</span>
        </div>
        <div className='col-1 border rounded-pill'>
          <img
            src={categories[0].icon}
            className='border rounded-circle p-2 mt-3'
            alt='...'
          />
          <div className='mt-3 mb-5 text-center'>{categories[0].name}</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
