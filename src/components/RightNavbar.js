import React from 'react';

const RightNavbar = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1
            className='card-text fw-bold h-25 my-5 '
            style={{ color: '#ff6223' }}
          >
            My Order
            {/* <img src='/icons/emoji.png' alt='...' className='mx-2 ' /> */}
          </h1>
        </div>

        <div className='col-12'>
          <div
            className='card mb-3 '
            style={{ borderRadius: '1rem', backgroundColor: '#585072' }}
          >
            <div className='card-body text-dark'>
              <div className='d-flex justify-content-between align-items-center my-1'>
                <span className='text-light'>Direction</span>
                <button className='btn text-warning'>Edit</button>
              </div>
              <div className='d-flex justify-content-between align-items-center my-1'>
                <div>
                  <button className='btn text-warning'>
                    <i className='far fa-clock'></i>
                  </button>
                  <span className='text-light'>35 min</span>
                </div>
                <button className='btn text-warning'>Choose time</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
