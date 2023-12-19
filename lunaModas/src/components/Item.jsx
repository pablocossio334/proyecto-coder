import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Heading,Image,Stack,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react'
const item = ({producto}) => {
  return (
    
<Card maxW='sm'>
  <CardBody>
    <Image
    className='product-img'
      src={producto.imagen}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack>
      <Heading className='product-title'>{producto.nombre}</Heading>
      <Text className='product-price'>
       $ {producto.precio} <Button >
        Buy now
      </Button>
      </Text>
    </Stack>
  </CardBody>
 </Card>


  )
}

export default item