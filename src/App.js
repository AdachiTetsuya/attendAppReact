import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import LineLogin from './components/LineLogin';
import Home from './components/Home';
import Callback from './components/Callback';
import Index from './components/Index';
import Staff from './components/Staff'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route path='/login' element={<LineLogin/>} />
        <Route path='/callback' element={<Callback/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/staff/:id' element={<Staff/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
