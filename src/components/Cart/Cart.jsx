import React, { useContext } from 'react';

import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

import './Cart.css';

function Cart() {
  // Obtendo cartItems e isCartVisible do AppContext
  const { cartItems, isCartVisible } = useContext(AppContext);

  // Calculando o preço total dos itens no carrinho
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return ( 
    // Seção do carrinho com estilização condicional baseada em isCartVisible
    <section className={`cart ${isCartVisible ? 'cart--active' : '' }`}>
      {/* Exibindo cada item no carrinho usando o componente CartItem */}
      <div className="cart-items">
        {cartItems.map((cartItem, index) => (
          <CartItem key={index} data={cartItem} />
        ))}
      </div>

      {/* Exibindo o preço total no carrinho usando a função de formatação de moeda formatCurrency */}
      <div className="cart-resume">Total: {formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
