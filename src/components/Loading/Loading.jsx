import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

import './Loading.css';

function Loading() {
  return ( 
    <BiLoaderAlt className="loading" /> // Componente de carregamento, exibindo um ícone de loader
  );
}

export default Loading;
