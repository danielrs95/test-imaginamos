import React from 'react';

const Category = ({ category }) => {
  return (
    <div className='d-flex align-items-center flex-column col-1 border rounded-pill mx-2'>
      <img
        src={category.icon}
        className='img-fluid border rounded-circle p-2 mt-3'
        alt='...'
      />
      <div className='mt-3 mb-5 text-center'>{category.name}</div>
    </div>
  );
};

export default Category;
