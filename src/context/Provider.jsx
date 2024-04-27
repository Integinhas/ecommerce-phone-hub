import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  // Estados locais para produtos, itens no carrinho, carregamento e visibilidade do carrinho
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Objeto que representa o valor fornecido pelo contexto
  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    // Provedor do contexto AppContext com o valor configurado
    <AppContext.Provider value={value}>
      {children} {/* Renderiza os componentes filhos envolvidos pelo contexto  */}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
