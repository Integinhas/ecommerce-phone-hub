import React, { useContext } from 'react';
import { BsCart } from 'react-icons/bs';
import AppContext from '../../context/AppContext';

import './CartButton.css';

function CartButton() {
  // Obtendo cartItems, isCartVisible e setIsCartVisible do AppContext
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return ( 
    // Botão que controla a visibilidade do carrinho
    <button 
      type="button" 
      className="cart__button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <BsCart />

      {/* Exibindo o número de itens no carrinho apenas se houver algum */}
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;
