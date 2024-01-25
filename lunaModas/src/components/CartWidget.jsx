import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/shopingCartContext';
import { IconButton } from '@chakra-ui/react';
import { BsCart4 } from 'react-icons/bs';

const CartWidget = () => {
  const { compras, contarElementos } = useContext(cartContext);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    
    const totalElementos = contarElementos();
    setCantidad(totalElementos);
  }, [compras, contarElementos]);

  return (
    <div className="cartWidget">
      <Link to="/CartView">
        <IconButton 
        icon={<BsCart4 />} 
        aria-label="Shopping Cart"
        isDisabled={cantidad===0} 
        variant='outline'
        colorScheme='pink'/>
      </Link>
      <span>{cantidad}</span>
    </div>
  );
}

export default CartWidget;
