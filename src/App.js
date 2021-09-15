import React from 'react';
import Categories from './components/Categories';
import HomeHeader from './components/HomeHeader';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './actions/cartActions';

const App = () => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart());
  };

  return (
    <>
      <button onClick={() => addToCartHandler()}>test redux</button>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-9'>
            <Navbar />
            <HomeHeader />
            <Categories />
            <Products />
          </div>
          <div className='col-3' style={{ backgroundColor: '#fdfdfb' }}>
            Cart Items
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
