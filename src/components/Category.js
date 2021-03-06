import React from 'react';

const Category = ({ category }) => {
  return (
    <div className='col-3 d-flex flex-column col-lg-2 col-xxl-1'>
      <button className=' btn btn-outline-warning  align-items-center   border rounded-pill mt-4'>
        <img
          src={category.icon}
          className='img-fluid border rounded-circle p-2 mt-3 bg-light'
          alt='...'
        />
        <div className='mt-3 mb-5 text-dark text-center'>{category.name}</div>
      </button>
    </div>
  );
};

export default Category;
