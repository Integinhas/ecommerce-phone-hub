import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

// Criação de uma raiz React no elemento com ID "root"
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro da raiz React
root.render(
  // Utilizando o StrictMode para alertas adicionais durante o desenvolvimento
  <React.StrictMode>
    <App /> {/* Componente principal da aplicação */}
  </React.StrictMode>
);
