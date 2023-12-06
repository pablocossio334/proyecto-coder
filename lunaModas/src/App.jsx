

import React, { useState } from 'react'
import ItemListContainer  from './components/ItemListContainer'
import './App.css';
import NavBar from './components/NavBar'

function App() {
 

  return (
  <div className="container">
   <NavBar/>
<ItemListContainer greeting={'Bienvenidos a mi Tienda'}

/>
  </div>
  );
}

export default App;
