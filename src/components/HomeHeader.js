import React from 'react';

const HomeHeader = () => {
  return (
    <div className='container mt-4'>
      <div className='row justify-content-center'>
        <div className='col-11'>
          <div
            className='card'
            style={{
              border: '0.1px solid rgb(0 0 0 / 10%)',
              borderRadius: '1.2rem',
              boxShadow: '5px 5px 1.5px 0 rgb(0 0 0 / 10%)',
            }}
          >
            <div
              className='card-header container d-flex bg-gradient justify-content-evenly align-items-center'
              style={{
                backgroundColor: '#2196f3',
                borderRadius: '1.2rem 1.2rem 0 0',
              }}
            >
              <div className='row'>
                <div className='col-12 col-lg-6 d-flex justify-content-center'>
                  <img
                    src='..'
                    className='img-fluid w-50'
                    alt='...'
                    style={{
                      border: '0.1px solid rgb(0 0 0 / 10%)',
                      borderRadius: '1.2rem',
                      boxShadow: '5px 5px 1.5px 0 rgb(0 0 0 / 10%)',
                    }}
                  />
                </div>

                <div className='d-flex flex-column col-12 col-lg-6 text-center text-light justify-content-center'>
                  <h1 className='card-text fw-bold '>Daniel Ramirez</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
