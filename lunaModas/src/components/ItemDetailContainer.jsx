import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import ItemDetail from './ItemDetail';
import Home from './Home'; 
import Cargando from './Cargando'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { BsTypeH1 } from 'react-icons/bs';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [load,setLoad]=useState(true);
  useEffect(() => {
    const db = getFirestore()
    const oneItem = doc(db,'productos',`${id}`)
    getDoc(oneItem).then((snapshot)=>{

      if (snapshot.exists()){
        const doc= snapshot.data()
      
      setItem(doc)
      setLoad(false)
      
      }
    })
  },[])

  return (
    <Flex className='main'>
      {load?(<Cargando/>):(<ItemDetail
    producto={item}/>)}
    </Flex>

  )
}

export default ItemDetailContainer
