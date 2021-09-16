import React from 'react';

const HomeHeader = () => {
  return (
    <div className='container mt-5 pt-5'>
      <div className='row justify-content-center'>
        <div
          className='col-12 container d-flex justify-content-evenly'
          style={{
            backgroundColor: '#fff7eb',
            borderRadius: '3rem',
          }}
        >
          <div className='row '>
            <div className='col-12 col-md-4  justify-content-center'>
              <img
                src='/images/headerimage.png'
                className='img-fluid '
                alt='...'
              />
            </div>

            <div className='col-12 d-md-flex flex-md-column col-md-6 text-center text-light justify-content-center'>
              <h1 className='card-text fw-bold' style={{ color: '#ff6223' }}>
                $0 delivery for 30 days!{' '}
                <img src='/images/d.png' className='img-fluid ' alt='...' />
              </h1>
              <p className='text-muted'>
                $0 delivery fee for ordens over $10 for 30 days
              </p>
            </div>

            <div className='col-12 justify-content-center d-flex d-md-flex col-md-2 align-items-md-end   '>
              <button
                className='btn p-2 text-light rounded-pill mb-3 me-2'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                style={{ backgroundColor: '#fff7eb' }}
              >
                <strong className='d-block ' style={{ color: '#ff6223' }}>
                  Learn more <i className='fas fa-arrow-right'></i>
                </strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
