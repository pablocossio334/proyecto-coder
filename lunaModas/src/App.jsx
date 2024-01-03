import React, { useState,useEffect } from 'react';
import ShoppingCartProvider from './context/shopingCartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import { Flex } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const cartContext = React.createContext(null);

function App() {
  
  return (
    <Flex className='max-container'>
     <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/products' element={<ItemListContainer />} />
            <Route exact path='/products/:cat' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/AboutUs' element={<AboutUs />} />
            <Route exact path='/Checkout' element={<Checkout />} />
            <Route path='*' element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
        </ShoppingCartProvider> 
        <Footer />
       
    </Flex>
  );
}

export default App;
