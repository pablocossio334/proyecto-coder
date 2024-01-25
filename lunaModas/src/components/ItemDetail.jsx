import React, { useState, useEffect,useContext } from 'react';
import {Link} from 'react-router-dom';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
  const [talleSeleccionado, setTalleSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1); 
  
 

 
  useEffect(() => {   
    if (producto.talles.length > 0) {
      setTalleSeleccionado(producto.talles[0]);
    }
  }, [producto.talles]);

  const handleTalleClick = (talle) => {
    setTalleSeleccionado(talle);
    
    
  };


  return (
    <flex className='mainDetail'>
    <Carousel className='prod-carousel'>
          {producto.imagen.map((imagenSrc, index) => (
            <Carousel.Item key={index} className='prod-carousel-img'>
              <img src={imagenSrc} alt={`Imagen ${index + 1}`} />
            </Carousel.Item>

          ))}
        </Carousel>
        <Flex className='datosProducto'>
        <Text className="producto-titulo">{producto.nombre}</Text> 
        <Text>{producto.descripcion}</Text>
        <Text className='cardTalles'>
            Talles Disponibles: {producto.talles.map((talle, index) => (
              <Button
                key={index}
                colorScheme='pink'
                variant={talle === talleSeleccionado ? 'solid' : 'outline'}
                className='button-tails'
                size='xs'
                onClick={() => handleTalleClick(talle)}
              >
                {talle}
              </Button>
            ))}
          </Text>
          <ItemCount
    item={producto}
    talle={talleSeleccionado}/>
          
        </Flex>{/*cierra flex DatosProductos*/}
   
    </flex>
  );
};

export default ItemDetail;