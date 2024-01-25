import React, { useContext, useState, useEffect } from 'react';
import { cartContext } from '../context/ShopingCartContext';
import { Link } from 'react-router-dom';
import { Flex, Box, Button } from '@chakra-ui/react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";

const CartView = () => {
  const { compras, quitarElemento, contarElementos, incrementarCantidad, decrementarCantidad } = useContext(cartContext);
  const [totalArticulos, setTotalArticulos] = useState(contarElementos);
  const [precioFinal, setPrecioFinal] = useState();

  useEffect(() => {
    setTotalArticulos(contarElementos());
    setPrecioFinal(compras.reduce((total, compra) => total + compra.item.precio * compra.cantidad, 0));
  }, [compras, contarElementos]);

  return (
    <Flex className='main'>
      <h1>RESUMEN DE LA COMPRA</h1>
      <Flex className='cartView'>
        <Box className='cart'>
          <table className='cartTable'>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Articulo</th>
                <th>Talle</th>
                <th>Cantidad</th>
                <th>Precio Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='cartBody'>
              {compras.map((compra, index) => (
                <tr key={index}>
                  <td className='tdImagen'>
                    <img src={compra.item.imagen[0]} alt="" />
                  </td>
                  <td className='tdNombre'>{compra.item.nombre}</td>
                  <td className='tdTalle'>{compra.talle}</td>
                  <td className='tdCantidad'>
  <Button
    variant='outline'
    colorScheme='pink'
    size='xs'
    onClick={() => incrementarCantidad(index)}
  >
    <FaPlus />
  </Button>
  {compra.cantidad}
  <Button
    variant='outline'
    colorScheme='pink'
    size='xs'
    onClick={() => decrementarCantidad(index)}
  >
   <FaMinus />
  </Button>
</td>
                  <td className='tdPrecioT'>$U {compra.item.precio * compra.cantidad}</td>
                  <td>
                  <Button
                      variant='outline'
                      colorScheme='pink'
                      size='xs'
                      onClick={() => quitarElemento(index)}>
                      <IoTrashBinOutline />
                    </Button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>

        <Box>
          <table className='totales' >
            <thead>
              <th>RESUMEN DE LA COMPRA</th>
              <tr>
                <td className='total'>Total Articulos</td>
                <td className='total'>{totalArticulos}</td>
              </tr>
              <tr>
                <td className='total'>Precio Final</td>
                <td className='total'>$U {precioFinal}</td>
              </tr>
              <tr >
                <td>
                </td>
              <td>
                <Link to={'/Form'}>
                <Button
               colorScheme='pink'
               isDisabled={totalArticulos === 0}
                >Finalizar Compra
                </Button>
                </Link>
                </td> 
              </tr>
            </thead>
          </table>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CartView;

