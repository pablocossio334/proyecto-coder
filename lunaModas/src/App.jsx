import React, { useState,useEffect } from 'react';
import ShoppingCartProvider from './context/shopingCartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import CartView from './components/CartView';
import Footer from './components/Footer';
import { Flex } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemLoading from './components/ItemLoading';

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
            <Route exact path='/CartView' element={<CartView />} />
            <Route exact path='/ItemLoading' element={<ItemLoading />} />
            <Route path='*' element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
        </ShoppingCartProvider> 
        <Footer />
       
    </Flex>
  );
}

export default App;
