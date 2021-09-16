import React from 'react';
import Categories from './components/Categories';
import HomeHeader from './components/HomeHeader';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-9'>
            <Navbar />
            <HomeHeader />
            <Categories />
            <Products />
          </div>
          <div
            className='col-3 position-fixed top-0 end-0 h-100'
            style={{ backgroundColor: '#fdfdfb', zIndex: '9999' }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <h1
                    className='card-text fw-bold h-25 my-5 py-5'
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
                            <i class='far fa-clock'></i>
                          </button>
                          <span className='text-light'>35 min</span>
                        </div>
                        <button className='btn text-warning'>
                          Choose time
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
