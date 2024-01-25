import React, { useState, useEffect } from 'react';

export const cartContext = React.createContext();

export const ShoppingCartProvider = ({ children }) => {
  const storedCompras = JSON.parse(localStorage.getItem('compras')) || [];
  const [compras, setCompras] = useState(storedCompras);

  const actualizarCompra = (nuevaCompra) => {
    const existeP = compras.findIndex(
      (obj) => obj.item.id === nuevaCompra.item.id && obj.talle === nuevaCompra.talle
    );

    if (existeP !== -1) {
      const nuevasCompras = [...compras];
      nuevasCompras[existeP].cantidad += nuevaCompra.cantidad;
      setCompras(nuevasCompras);
      localStorage.setItem('compras', JSON.stringify(nuevasCompras));
    } else {
      const nuevasCompras = [...compras, nuevaCompra];
      setCompras(nuevasCompras);
      localStorage.setItem('compras', JSON.stringify(nuevasCompras));
    }
  };

  const contarElementos = () => {
    return compras.reduce((total, compra) => total + compra.cantidad, 0);
  };

  const quitarElemento = (indice) => {
    const nuevasCompras = [...compras];
    nuevasCompras.splice(indice, 1); // Remove the element at the given index
    setCompras(nuevasCompras);
    localStorage.setItem('compras', JSON.stringify(nuevasCompras));
  };

  const incrementarCantidad = (indice) => {
    const nuevasCompras = [...compras];
    nuevasCompras[indice].cantidad += 1;
    setCompras(nuevasCompras);
    localStorage.setItem('compras', JSON.stringify(nuevasCompras));
  };

  const decrementarCantidad = (indice) => {
    const nuevasCompras = [...compras];
    if (nuevasCompras[indice].cantidad > 1) {
      nuevasCompras[indice].cantidad -= 1;
      setCompras(nuevasCompras);
      localStorage.setItem('compras', JSON.stringify(nuevasCompras));
    }
  };
  const vaciarCarrito = () => {
    setCompras([]); // Vacía el carrito en el contexto
    localStorage.removeItem('compras'); // Elimina la variable del localStorage
  };

  useEffect(() => {
    setCompras(storedCompras);
  }, []);

  return (
    <cartContext.Provider
      value={{
        compras,
        actualizarCompra,
        quitarElemento,
        contarElementos,
        incrementarCantidad,
        decrementarCantidad,
        vaciarCarrito
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default ShoppingCartProvider;
