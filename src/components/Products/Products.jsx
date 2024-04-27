import React, { useEffect, useContext } from 'react';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

import './Products.css';

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  // Efeito colateral para buscar produtos assim que o componente é montado
  useEffect(() => {
    // Chamando a função de busca de produtos da API
    fetchProducts('iphone').then((response) => {
      setProducts(response); // Atualizando o estado dos produtos
      setLoading(false); // Indicando que o carregamento foi concluído
    });
  }, []); // O segundo argumento é uma lista de dependências, neste caso, vazia para garantir que o efeito seja executado apenas uma vez

  // Efeito colateral para controlar o overflow do corpo do documento durante o carregamento
  useEffect(() => {
    // Adicionando ou removendo a classe no body para controlar o overflow
    document.body.style.overflow = loading ? 'hidden' : 'auto'; 

    // Limpeza da classe quando o componente for desmontado
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]); // Este efeito será executado sempre que 'loading' for alterado

  // Renderização condicional com base no estado de 'loading'
  return (
    (loading && <Loading />) || (
      // Seção que contém os produtos renderizados como cartões de produto
      <section className="products container">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  );
}

export default Products;
