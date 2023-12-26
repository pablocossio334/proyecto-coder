import React from 'react'
import {Link} from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import { Card, CardHeader, CardBody, CardFooter,Heading,Image,Stack,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react'
const item = ({producto}) => {
  return (
    
<Card maxW='sm' align="center" background={' #fdedec '}>
  <CardBody>
  <Link className='link' to={`/Item/${producto.id}`}> <Image
    className='product-img'
      src={producto.imagen[0]}
      alt='imagen del producto'
      borderRadius='lg'
    /></Link>
    <Stack>
      <Heading className='product-title' fontSize='lg' >{producto.nombre}</Heading>
      <Text className='product-price'>
      $U {producto.precio} 
      <Button >
        cod:{producto.id}
      </Button>
      </Text>
    </Stack>
  </CardBody>
 </Card>


  )
}

export default item