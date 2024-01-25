import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from './Cargando';
import { Flex } from '@chakra-ui/react';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const { cat } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = collection(db, "productos");

    getDocs(itemCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      const productosFiltrados = docs.filter((producto) => producto.categoria === cat);
      setProductos(productosFiltrados);
      
      setLoading(false);
    });
  }, [cat]); 

  return (
    <Flex className='main'>
    <h1>Categoria: {cat}</h1>
    {loading ? (
      <ProgressBar loading={loading} />
    ) : (
      <>
        {productos.length === 0 ? (
          <h2>No hay productos en la categoría seleccionada</h2>
        ) : (
          <ItemList productos={productos} />
        )}
      </>
    )}
  </Flex>
  );
};

export default ItemListContainer;
