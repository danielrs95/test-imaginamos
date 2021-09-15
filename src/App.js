import React from 'react';
import Categories from './components/Categories';
import HomeHeader from './components/HomeHeader';
import Navbar from './components/Navbar';
import Products from './components/Products';

const App = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-8'>
            <Navbar />
            <HomeHeader />
            <Categories />
            <Products />
          </div>
          <div className='col-4'>Cart Items</div>
        </div>
      </div>
    </>
  );
};

export default App;
