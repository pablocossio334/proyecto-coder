import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productos from './Datos';
import ItemDetail from './ItemDetail';
import Home from './Home'; // Asegúrate de tener el componente Home correctamente importado

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [mostrarProducto, setMostrarProducto] = useState(null);
  const [productoNoEncontrado, setProductoNoEncontrado] = useState(false); // Corregido el nombre y el uso de la variable

  useEffect(() => {
    const buscarProducto = () => {
      return new Promise((resolve, reject) => {
        const productoEncontrado = productos.find((producto) => producto.id == id);

        if (productoEncontrado) {
          resolve(productoEncontrado);
        } else {
          setProductoNoEncontrado(true); // Corregido el nombre de la variable
          reject(new Error('Producto no encontrado'));
        }
      });
    };

    buscarProducto()
      .then((producto) => setMostrarProducto(producto))
      .catch((error) => {
        console.error(error.message);
      });
  }, [id]);

  return (
    <>
      {mostrarProducto && <ItemDetail producto={mostrarProducto} />}
      {productoNoEncontrado && <Home />}
    </>
  );
};

export default ItemDetailContainer;
