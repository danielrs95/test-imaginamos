import React from 'react';

const Category = ({ category }) => {
  return (
    <button className='btn btn-outline-warning d-flex align-items-center flex-column col-1 border rounded-pill mx-2 mt-4'>
      <img
        src={category.icon}
        className='img-fluid border rounded-circle p-2 mt-3 bg-light'
        alt='...'
      />
      <div className='mt-3 mb-5 text-dark text-center'>{category.name}</div>
    </button>
  );
};

export default Category;
