import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LineLogin from '../pages/LineLogin';
import Callback from './Callback';
import Index from './Index';
import User from '../pages/User'
import Home from '../pages/Home';

const AppRoutes = () => {
  return(
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/login' element={<LineLogin/>} />
      <Route path='/callback' element={<Callback/>} />
      
      <Route path='/home' element={<Home/>} />
      <Route path='/user_detail/:id' element={<User/>} />
    </Routes>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
