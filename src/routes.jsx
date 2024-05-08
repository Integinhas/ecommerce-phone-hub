import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import RegisterProduct from './pages/RegisterProduct/RegisterProduct';
import ProductView from './pages/ProductView/ProductView';

function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/cadastroDeProduto" element={<RegisterProduct />}></Route>
        <Route path="/vizualizaçãoDoProduto" element={<ProductView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
