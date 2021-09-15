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
        <div className='col-1'>
          <img src={categories[0].icon} className='rounded-circle' alt='...' />
          {categories[0].name}
        </div>
      </div>
    </div>
  );
};

export default Categories;
