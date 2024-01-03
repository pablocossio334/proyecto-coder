import React, { useState, useEffect,useContext } from 'react';
import {Link} from 'react-router-dom';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import {cartContext } from '../context/ShopingCartContext';
import Carousel from 'react-bootstrap/Carousel';

const ItemDetail = ({ producto }) => {
  const [talleSeleccionado, setTalleSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1); 
  const { actualizarCompra } = useContext(cartContext); 
 
  useEffect(() => {
   
    if (producto.talles.length > 0) {
      setTalleSeleccionado(producto.talles[0]);
    }
  }, [producto.talles]);

  const handleTalleClick = (talle) => {
    setTalleSeleccionado(talle);
    
    
  };

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  const handleCompra = () => {
   
    actualizarCompra({ item: producto, talle: talleSeleccionado, cantidad: cantidad });
  };

  return (
    <Flex className='main'>
      
      <Flex className='product-detail'>
        <Carousel className='prod-carousel'>
          {producto.imagen.map((imagenSrc, index) => (
            <Carousel.Item key={index} className='prod-carousel-img'>
              <img src={imagenSrc} alt={`Imagen ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>

        <Flex className='datos-producto'>
       <Text className="producto-titulo">{producto.nombre}</Text> 
          <Text>{producto.descripcion}</Text>
          <Text className='cardTalles'>
            Talles Disponibles: {producto.talles.map((talle, index) => (
              <Button
                key={index}
                colorScheme='pink'
                variant={talle === talleSeleccionado ? 'solid' : 'outline'}
                className='button-tails'
                onClick={() => handleTalleClick(talle)}
              >
                {talle}
              </Button>
            ))}
          </Text>
          <Flex className='comprar' >
            <Text className='product-price'  fontWeight='bold' >Precio: $U {producto.precio*cantidad}</Text>
            <Flex><Text paddingRight='1rem'>cantidad:</Text>
              <Button colorScheme='pink' size="sm" variant='outline' onClick={decrementarCantidad}>
                -
              </Button>
              <Text className='cantidad'fontWeight='bold'>{cantidad}</Text>
              <Button colorScheme='pink' size="sm" variant='outline' onClick={incrementarCantidad}>
                +
              </Button>
            </Flex>
            <Link to={`/products/${producto.categoria}`}>
            <Button colorScheme='pink' onClick={handleCompra}  >
              Comprar
            </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ItemDetail;