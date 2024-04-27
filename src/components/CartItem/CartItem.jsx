import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartXFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

import './CartItem.css';

function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  // Função para remover o item do carrinho
  const handleRemoveItem = () => {
    // Encontrando o índice do item no carrinho
    const itemIndex = cartItems.findIndex((item) => item.id === id);
  
    // Removendo o item se encontrado
    if (itemIndex !== -1) {
      const updatedItems = [
        ...cartItems.slice(0, itemIndex),
        ...cartItems.slice(itemIndex + 1),
      ];
      setCartItems(updatedItems);
    }
  };
  
  return ( 
    // Seção representando um item no carrinho
    <section className="cart-item">
      {/* Imagem do produto */}
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3> {/* Título do produto */}
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3> {/* Preço do produto */}

        {/* Botão para remover o item do carrinho */}
        <button 
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <BsFillCartXFill />
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: propTypes.object.isRequired,
};

export default CartItem;
