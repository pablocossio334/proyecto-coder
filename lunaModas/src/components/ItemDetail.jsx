import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';

const ItemDetail = ({ producto }) => {
  const [talleSeleccionado, setTalleSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1); // Valor inicial del contador

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

  return (
    <Flex className='main'>
      <Box>
        <h1>{producto.nombre}</h1>
      </Box>
      <Flex className='product-detail'>
        <Carousel className='prod-carousel'>
          {producto.imagen.map((imagenSrc, index) => (
            <Carousel.Item key={index} className='prod-carousel-img'>
              <img src={imagenSrc} alt={`Imagen ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>

        <Flex className='datos-producto'>
          <Text>{producto.descripcion}</Text>
          <Text>
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
          <Flex className='comprar'>
            <Text className='product-price'>Precio: $U {producto.precio*cantidad}</Text>
            <Flex>cantidad:
              <Button colorScheme='pink' size="sm" variant='outline' onClick={decrementarCantidad}>
                -
              </Button>
              <Text mx="2">{cantidad}</Text>
              <Button colorScheme='pink' size="sm" variant='outline' onClick={incrementarCantidad}>
                +
              </Button>
            </Flex>
            <Button colorScheme='pink'  onClick={() => alert(`Comprar ${cantidad} unidades`)}>
              Comprar
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ItemDetail;
