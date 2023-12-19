import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
  <Flex className='max-container'>
   <NavBar/>
   <ItemListContainer categoria={"CATEGORIA 1"}/>
    </Flex>
  );
}

export default App;