import React from 'react';
import Item from './Item';
import { Flex } from '@chakra-ui/react';

const ItemList = ({ productos }) => {
  

  return (
    <Flex className='cards-container'>
      {productos.map((producto) => (
      
      <Item 
      producto={producto}/>
          
          
      
      ))}
    </Flex>
  );
};

export default ItemList;
