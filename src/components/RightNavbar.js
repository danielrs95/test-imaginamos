import React from 'react';

const RightNavbar = () => {
  return (
    // <div className='container'>
    //   <div className='row'>
    <>
      <div className='col-12'>
        <span
          className='fs-2 card-text fw-bold h-25 my-5 '
          style={{ color: '#ff6223' }}
        >
          My Order
          {/* <img src='/icons/emoji.png' alt='...' className='mx-2 ' /> */}
        </span>
      </div>

      <div className='col-12'>
        <div
          className='card mb-3 '
          style={{ borderRadius: '1rem', backgroundColor: '#585072' }}
        >
          <div className='card-body text-dark'>
            <div className='d-xl-flex justify-content-xl-between align-items-center text-center my-1'>
              <span className='d-block text-light'>Direction</span>
              <button className='btn text-warning'>Edit</button>
            </div>

            <div className='d-xl-flex justify-content-xl-between align-items-xl-center text-center my-1'>
              <div className='d-block'>
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
    </>
    // {/* </div>
    // </div> */}
  );
};

export default RightNavbar;
