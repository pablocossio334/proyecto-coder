import React from 'react'
import { useParams } from 'react-router-dom';
import productos from './Datos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const {id}=useParams()
  const mostrarProducto= productos.find(producto=>producto.id==id)
  console.log(mostrarProducto)
  return (
   <>
   <ItemDetail
   producto={mostrarProducto}
   />
   
   
</>
  )
}

export default ItemDetailContainer