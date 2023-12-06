import React from 'react'
import { IconButton } from '@chakra-ui/react';
import { BsCart4 } from "react-icons/bs";
const CartWidget = () => {
  return (
    <div className="cartWidget">
      <IconButton
      aria-label='CartWidget'
      icon={<BsCart4/>}
      size='md'
      fontSize='2rem'
      
      
      ></IconButton>
    <div className="cartNumber">3</div>
    </div>
    
  )
}

export default CartWidget