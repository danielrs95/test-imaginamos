import React from 'react';
import categories from '../assets/categories.json';
import Category from './Category';

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
        </div>
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
