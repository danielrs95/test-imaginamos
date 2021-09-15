import React from 'react';
import Categories from './components/Categories';
import HomeHeader from './components/HomeHeader';
import Navbar from './components/Navbar';
import Products from './components/Products';

const App = () => {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <Categories />
      <Products />
    </>
  );
};

export default App;
