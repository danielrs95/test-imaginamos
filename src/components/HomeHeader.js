import React from 'react';
import headerImg from '../assets/images/headerimage.png';

const HomeHeader = () => {
  return (
    <div className='container mt-4'>
      <div className='row justify-content-center'>
        <div className='col-11' style={{ borderRadius: '10rem' }}>
          <div
            className='container d-flex justify-content-evenly align-items-center'
            style={{
              backgroundColor: '#fff7eb',
              borderRadius: '5rem',
              height: '90%',
            }}
          >
            <div className='row'>
              <div className='col-12 col-lg-4  justify-content-center'>
                <img src={headerImg} className='img-fluid ' alt='...' />
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
    </div>
  );
};

export default HomeHeader;
