import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Home from './pages/Home';
import Liked from './pages/Liked';

const App = () => {

  const [inputText, setInputText] = useState('');

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (

    <>

      <Navbar />

      <Search
        type='text'
        placeholder='Search Here . . .'
        value={inputText}
        changeHandler={inputHandler}
      />

      <Routes>
        <Route path='/' element={<Home searchBy={inputText} />} />
        <Route path='/liked' element={<Liked searchBy={inputText} />} />
      </Routes>

    </>

  );

};

export default App;