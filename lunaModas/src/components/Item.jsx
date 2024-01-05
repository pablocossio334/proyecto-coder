import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import { Card, CardHeader, CardBody, CardFooter,Heading,Image,Stack,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react'
const item = ({producto}) => {
  
  
  
  
  return (
    
<Card className='card-item' align="center" background={' #fdedec '}>
<Link className='card-link' to={`/Item/${producto.id}`}>
  <CardBody className='itemBody'>
   <img className='card-img' src={producto.imagen[0]} alt="" />
    <Stack className='cardText'>
    <Text className='card-title' fontSize="sm" align='center'>{producto.nombre}</Text>
      
      <Text className='card-price' fontSize="0.8rem" align='center' padding='0'>
      $U {producto.precio} <span className='card-cod'>{producto.id}</span>  </Text>
      
      
      
     
    </Stack>
  </CardBody>
  </Link>
 </Card>


  )
}

export default item