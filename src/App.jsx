import React from 'react';

/** Styles */
import './App.css';

/** Components */
import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';

/** Custom Hooks */
import { useWindowResize } from './hooks/useWindowResize';

const  App = () => {

  const { device } = useWindowResize();  // device name based on current breakpoint

  return (
    <div className="wrapper">

      {/** Header Section */}
      <Header  screen = { device } />

      {/** AutoComplete Section */}
      <Input />

      {/** Footer Section  */}
      <Footer  screen = { device } />
    </div>
  );
}

export default App;
