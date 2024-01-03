import React, { useState, useEffect } from 'react';

export const cartContext = React.createContext();

export const ShoppingCartProvider = ({ children }) => {
  const storedCompras = JSON.parse(localStorage.getItem('compras')) || [];
  const [compras, setCompras] = useState(storedCompras);

  const actualizarCompra = (nuevaCompra) => {
    const nuevasCompras = [...compras, nuevaCompra];
    setCompras(nuevasCompras);
    localStorage.setItem('compras', JSON.stringify(nuevasCompras));
  };

  const quitarElemento = (indice) => {
    const nuevasCompras = [...compras];
    nuevasCompras.splice(indice, 1); // Remove the element at the given index
    setCompras(nuevasCompras);
    localStorage.setItem('compras', JSON.stringify(nuevasCompras));
  };

  useEffect(() => {
    setCompras(storedCompras);
  }, []);

  return (
    <cartContext.Provider value={{ compras, actualizarCompra, quitarElemento }}>
      {children}
    </cartContext.Provider>
  );
};

export default ShoppingCartProvider;