import React from 'react';

import { Flex ,Box} from '@chakra-ui/react';

import logo from '../assets/lunamodas.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  
  return (
    <Flex className='navBar'>
      <Box className='brand'><img src={logo} alt="" /></Box>
      <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="#home">INICIO</Nav.Link>
      </Nav.Item>
      <NavDropdown title="Categorias" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Categoria1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Categoria2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Categoria3
              </NavDropdown.Item>
      </NavDropdown>
      
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
      
    </Nav>
    <CartWidget/>
    </Flex>
    
  );
};

export default NavBar;