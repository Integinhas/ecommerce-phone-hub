import React from 'react';
import Header from '../../components/Header/Header';
import Provider from '../../context/Provider';
import Products from '../../components/Products/Products';
import Cart from '../../components/Cart/Cart';
import { Footer } from '../../components/Footer/Footer';

export function Home(){

  return(
    <Provider> {/* Provedor do contexto envolvendo os componentes da aplicação */}
      <Header /> {/* Componente de cabeçalho */}
      <Products /> {/* Componente que exibe a lista de produtos */}
      <Cart /> {/* Componente que representa o carrinho */}
      <Footer /> {/* Componente footer */}
    </Provider>
  );
}
