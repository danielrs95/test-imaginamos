import React from 'react';
import Categories from './components/Categories';
import HomeHeader from './components/HomeHeader';
import Navbar from './components/Navbar';
import Products from './components/Products';
import RightNavbar from './components/RightNavbar';
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
            style={{
              backgroundColor: '#f9f4ef',
              zIndex: '9999',
              overflow: 'auto',
            }}
          >
            <RightNavbar />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
