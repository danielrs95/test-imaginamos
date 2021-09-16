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
            <div class='btn-group'>
              <button
                type='button'
                class='btn dropdown-toggle text-light px-5 rounded-pill'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                style={{ backgroundColor: '#ff6223' }}
              >
                <i class='far fa-clock'></i>
                <span className='mx-2'>Delivery: </span>
                <strong>Now</strong>
              </button>
              <ul class='dropdown-menu'>
                <li>
                  <a class='dropdown-item' href='#'>
                    Later
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Separated link
                  </a>
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
