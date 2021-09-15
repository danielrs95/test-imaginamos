import React from 'react';

const HomeHeader = () => {
  return (
    <div className='container mt-4'>
      <div className='row justify-content-center'>
        <div
          className='col-12 container d-flex justify-content-evenly'
          style={{
            backgroundColor: '#fff7eb',
            borderRadius: '5rem',
          }}
        >
          <div className='row'>
            <div className='col-12 col-lg-4  justify-content-center'>
              <img
                src='/images/headerimage.png'
                className='img-fluid '
                alt='...'
              />
            </div>

            <div className='d-flex flex-column col-12 col-lg-6 text-center text-light justify-content-center'>
              <h1 className='card-text fw-bold text-primary '>
                Daniel Ramirez
              </h1>
            </div>

            <div className='col-lg-2 d-flex flex-column justify-content-end'>
              Learn more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
