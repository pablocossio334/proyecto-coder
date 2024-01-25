import React, { useState, useEffect,useContext } from 'react';
import {Link} from 'react-router-dom';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import {cartContext } from '../context/ShopingCartContext';

const ItemCount = ({item,talle}) => {
  const [cantidad, setCantidad] = useState(1); 
  const { actualizarCompra } = useContext(cartContext);
  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  const handleCompra = () => {
   
    actualizarCompra({ item: item, talle: talle, cantidad: cantidad });
  };

  return (
    <Flex className='comprar' >
    <Text className='product-price'  fontWeight='bold' >Precio: $U {item.precio*cantidad}</Text>
    <Flex><Text paddingRight='1rem'>cantidad:</Text>
      <Button colorScheme='pink' size="xs" variant='outline' onClick={decrementarCantidad}>
        -
      </Button>
      <Text className='cantidad'fontWeight='bold'>{cantidad}</Text>
      <Button colorScheme='pink' size="xs" variant='outline' onClick={incrementarCantidad}>
        +
      </Button>
    </Flex>
    <Link to={`/products/${item.categoria}`}>
    <Button colorScheme='pink'   size='sm' onClick={handleCompra}  >
      Comprar
    </Button>
    </Link>
  </Flex>
  )
}

export default ItemCount