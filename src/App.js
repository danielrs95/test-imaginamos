import React from 'react';
import Categories from './components/Categories';
import HomeHeader from './components/HomeHeader';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <Categories />
    </>
  );
};

export default App;
