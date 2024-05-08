import React, { useState, useContext } from 'react';
import { IoIosSearch } from 'react-icons/io';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

import './SearchBar.css';

function SearchBar() {
  // Obtendo setProducts e setLoading do AppContext
  const { setProducts, setLoading } = useContext(AppContext);

  // Estado local para armazenar o valor da busca
  const [searchValue, setSearchValue] = useState('');

  // Função para lidar com a submissão do formulário de pesquisa
  const handleSearch = async (event) => {
    // Evitando o comportamento padrão do formulário
    event.preventDefault();

    // Indicando que o carregamento está em andamento
    setLoading(true);

    // Buscando produtos com base no valor de pesquisa
    const products = await fetchProducts(searchValue);

    // Atualizando o estado dos produtos e indicando que o carregamento foi concluído
    setProducts(products);
    setLoading(false);

    // Resetando o valor da busca
    setSearchValue('');
  };

  return (
    // Formulário de barra de pesquisa
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="logo-container">
      </div>

      {/* Campo de entrada para o valor da pesquisa */}
      <input
        type="search"
        value={searchValue}
        placeholder="O que você está buscando hoje?"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />

      {/* Botão de pesquisa */}
      <button type="submit" className="search__button">
        <IoIosSearch />
      </button>
    </form>
  );
}

export default SearchBar;
