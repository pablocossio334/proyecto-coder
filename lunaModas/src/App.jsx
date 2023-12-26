import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Footer from './components/Footer'
import { Flex } from '@chakra-ui/react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
  <Flex className='max-container'>
   
   
   <BrowserRouter>
   <NavBar/>
   <Routes>
         <Route exact path='/' element={<ItemListContainer/>} />
         <Route exact path='/products' element={<ItemListContainer/>} />
         <Route exact path='/products/:cat' element={<ItemListContainer/>} />
         <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
         <Route exact path='/AboutUs' element ={<AboutUs/>}/>
   </Routes>
    </BrowserRouter>
    <Footer/>
    </Flex>
  );
}

export default App;