import React from 'react';
import Item from './Item';
import { Flex } from '@chakra-ui/react';

const ItemList = ({ productos }) => {
  console.log(productos);

  return (
    <Flex className='products-container'>
      {productos.productos.map((producto) => (
        <Item 
        producto={producto}/>
      ))}
    </Flex>
  );
};

export default ItemList;
