import { Flex,Box,Text } from '@chakra-ui/react'
import remeras from '../assets/remeras.png'
import vestidos from '../assets/vestidos.png'
import pantalones from '../assets/pantalones.png'
import zapatos from '../assets/zapatos.png'
import camisas from '../assets/camisas.png'
import lenceria from '../assets/lenceria.png'
import trajesbano from '../assets/trajesbano.png'
import React from 'react'

const Home = () => {
  return (
    <Flex className='main'>
<h1>LUNA MODAS</h1>
<Flex className='categoriasHome'>
<Box className='izquierdaHome'>

<Box className="seccionHome">
  <img src={vestidos} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Vestidos</Text>
  
  </Box>
 
<Box className="seccionHome">
  <img src={pantalones} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Pantalones</Text>
  </Box>

  <Box className="seccionHome">
  <img src={remeras} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Remeras</Text>
  </Box>

  <Box className="seccionHome">
  <img src={zapatos} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Zapatos</Text>
  </Box>




</Box>
<Box className='centroHome'>Centro</Box>
<Box className='derechaHome'>

<Box className="seccionHome">
  <img src={camisas} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Camisas</Text>
  
  </Box>
  <Box className="seccionHome">
  <img src={lenceria} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Lenceria</Text>
  </Box>

  <Box className="seccionHome">
  <img src={trajesbano} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Trajes de Baño</Text>
  </Box>

  <Box className="seccionHome">
  <img src={remeras} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Remeras</Text>
  </Box>
  
</Box>
</Flex>

    </Flex>
  )
}

export default Home