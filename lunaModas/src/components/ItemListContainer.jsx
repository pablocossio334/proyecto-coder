
import { Flex,Box ,Center,Text} from '@chakra-ui/react';
import React from 'react';
import Item from './Item';
import productos from './Datos'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  

const {cat}=useParams()


let productosCategoria=productos.filter(producto=>producto.categoria==cat)
console.log("tamaño es" +productosCategoria.length)
console.log(cat)
let titulo
if(productosCategoria.length==0)
{
  productosCategoria=productos
  titulo="Bienvenidos a mi Tienda"
}
else {
  titulo="Categoria: "+cat
}


  return (
  
<Flex className='main' >
  
  <h1> {titulo}</h1>
  
  <ItemList
  productos={productosCategoria}
  />
</Flex>

      
    
  );
};

export default ItemListContainer;
