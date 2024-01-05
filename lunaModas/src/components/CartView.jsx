import React, { useContext } from 'react';
import { cartContext } from '../context/ShopingCartContext';
import { Flex, Table, TableCaption, Thead, Tbody, Tr, Th, Td, Image } from '@chakra-ui/react';

const CartView = () => {
  const { compras, quitarElemento } = useContext(cartContext); // Destructure quitarElemento from the context

  return (
    <Flex className='main'>
      <h1>RESUMEN DE LA COMPRA</h1>
      <Table className='cartTable' variant='striped' colorScheme='pink'>
        <Thead>
          <Tr>
            <Th>Imagen</Th>
            <Th>Articulo</Th>
            <Th>Talle</Th>
            <Th>Cantidad</Th>
            <Th>Precio Unitario</Th>
            <Th>Precio Total</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody className='cartBody'>
          {compras.map((compra, index) => (
            <Tr key={index}>
              <Td className='tdImagen'>
                <img src={compra.item.imagen[0]} alt="" />
              </Td>
              <Td className='tdNombre'>{compra.item.nombre}</Td>
              <Td>{compra.talle}</Td>
              <Td>{compra.cantidad}</Td>
              <Td>$U {compra.item.precio}</Td>
              <Td>$U {compra.item.precio * compra.cantidad}</Td>
              <Td>
                <button onClick={() => quitarElemento(index)}>
                  Quitar
                </button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default CartView;
