import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer,Box} from '@chakra-ui/react'
import { TiThMenu } from "react-icons/ti"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react';
 import logo from '../assets/lunamodas.png'
  
 
const navbar = () => {
return (
    <Flex className='navBar'>
    
   
<Box className='brand' >
   <img src={logo} alt="" />
    </Box>




  
    <Menu >
  <MenuButton className='nav'>
  <Button colorScheme='teal' variant='outline'>
  <TiThMenu/>
  </Button>
  </MenuButton>
  <MenuList>
    <MenuItem>CATEGORIA 1</MenuItem>
    <MenuItem>CATEGORIA 2</MenuItem>
    <MenuItem>CATEGORIA 3</MenuItem>
    
  </MenuList>
</Menu>
<Spacer/>




<Spacer/>
    <Box p='4'>
      <CartWidget/>
    </Box>
  </Flex>
  )
}

export default navbar