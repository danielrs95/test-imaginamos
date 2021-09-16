import React from 'react';

const Navbar = () => {
  return (
    <nav
      className='navbar position-fixed navbar-expand-lg navbar-light bg-light'
      style={{ width: 'inherit', zIndex: '999' }}
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='7'>
          ImaginWeb
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse ms-5'
          id='navbarSupportedContent'
        >
          <form className='d-flex w-100'>
            <input
              className='form-control me-2 w-100'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='button'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
