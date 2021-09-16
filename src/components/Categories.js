import React from 'react';
import categories from '../assets/categories.json';
import Category from './Category';

const Categories = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-12'>
          <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
              <h1>Restaurantes</h1>
              <img
                src='/icons/1046784.svg'
                className='p-2'
                alt='...'
                style={{ width: '2.5rem' }}
              />
            </div>
            <div className='btn-group'>
              <button
                type='button'
                className='btn dropdown-toggle text-light px-5 rounded-pill'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                style={{ backgroundColor: '#ff6223' }}
              >
                <i className='far fa-clock'></i>
                <span className='mx-2'>Delivery: </span>
                <strong>Now</strong>
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <span className='dropdown-item'>Later</span>
                </li>
                <li>
                  <span className='dropdown-item'>Another action</span>
                </li>
                <li>
                  <span className='dropdown-item'>Something else here</span>
                </li>
                <li>
                  <span className='dropdown-item'>Separated link</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
