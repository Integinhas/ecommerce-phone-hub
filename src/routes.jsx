import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import RegisterProduct from './pages/RegisterProduct/RegisterProduct';

function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/cadastroDeProduto" element={<RegisterProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
