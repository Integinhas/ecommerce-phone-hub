import React, { useContext } from 'react';
import { LiaCartPlusSolid } from 'react-icons/lia';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ data }) {
  // Dados do produto
  const { title, thumbnail, price } = data;

  // Obtendo cartItems e setCartItems do AppContext
  const { cartItems, setCartItems } = useContext(AppContext);

  // Função para adicionar o produto ao carrinho
  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  };

  return (
    // Seção representando um cartão de produto
    <section className="product-card">
      <Link to="/vizualizaçãoDoProduto">
        <img
          src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
          alt="product"
          className="card__image"
        />
      </Link>
      <div className="card__infos"> {/* Informações do produto */}
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2> {/* Preço do produto */}
        <h2 className="card__title">{title}</h2> {/* Título do produto */}
      </div>


      {/* Botão para adicionar o produto ao carrinho */}
      <button
        type="button"
        className="button__add__cart"
        onClick={handleAddCart}
      >
        <LiaCartPlusSolid />
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

export default ProductCard;
