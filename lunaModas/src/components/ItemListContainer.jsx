import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import ItemList from './ItemList';
import ProgressBar from './Cargando';
import productos from './Datos';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { cat } = useParams();
  const [loading, setLoading] = useState(true);
  const [productosCategoria, setProductosCategoria] = useState([]);
  let titulo;

  useEffect(() => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      let filteredProductos = productos.filter((producto) =>
        cat ? producto.categoria === cat : true
      );

      setProductosCategoria(filteredProductos);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [cat]);

  if (productosCategoria.length === 0) {
    setProductosCategoria(productos);
    titulo = 'Bienvenidos a mi Tienda';
  } else {
    titulo = 'Categoria: ' + cat;
  }

  return (
    <Flex className='main'>
      <h1> {titulo}</h1>
      {loading ? (
        <ProgressBar loading={loading} duration={3000} />
      ) : (
        <ItemList productos={productosCategoria} />
      )}
    </Flex>
  );
};

export default ItemListContainer;
