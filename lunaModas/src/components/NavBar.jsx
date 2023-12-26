import React from 'react';

import { Flex ,Box} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import logo from '../assets/lunamodas.png'
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  
  return (
    <Flex className='navBar'>
    <Box className='brand'><Link to={'/'} ><img src={logo} alt="" /></Link></Box>
      <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
      <Nav.Link className='navItem'><Link className='link' to={'/'} >Inicio</Link></Nav.Link>
      </Nav.Item>
      <NavDropdown title="Categorias" id="basic-nav-dropdown">
      <NavDropdown.Item ><Link className='link' to={'/products/vestidos'} > Vestidos</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className='link' to={'/products/pantalones'} >Pantalones</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link  className='link' to={'/products/remeras'} > Remeras</Link></NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
      <Nav.Link ><Link className='link' to={'/'} >Acerca</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link ><Link className='link' to={'/'} >Contacto</Link></Nav.Link>
      </Nav.Item>
      
      
      
    </Nav>
    <CartWidget/>
   
    </Flex>
    
  );
};

export default NavBar;