import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/shopingCartContext'; // Correct import path
import { IconButton } from '@chakra-ui/react';
import { BsCart4 } from 'react-icons/bs';

const CartWidget = () => {
  const { compras } = useContext(cartContext); // Use the correct context

  return (
    <div className="cartWidget">
      {/* Render your cart items or any other cart-related content */}
      <Link to="/CartView">
        <IconButton icon={<BsCart4 />} aria-label="Shopping Cart" />
        <span>{compras.length}</span>
      </Link>
    </div>
  );
}

export default CartWidget;
