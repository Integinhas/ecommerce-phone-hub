import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
import Logo from '../Logo/Logo';
import Profile from '../Profile/Profile';
import { Link } from 'react-router-dom';

import './Header.css';
import AddProduct from '../AddProduct/AddProduct';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <Logo /> {/* Logo */}
        </Link>
        <SearchBar /> {/* barra de pesquisa */}
        <CartButton /> {/* botão de carrinho */}
        <Link to="/login">
          <Profile /> {/* botão de login */}
        </Link>
        <Link to="/cadastroDeProduto">
          <AddProduct /> {/* botão de adicionar produtos */}
        </Link>
      </div>  
    </header>
  );
}
export default Header;
