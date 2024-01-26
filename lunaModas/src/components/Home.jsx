import { Flex,Box,Text } from '@chakra-ui/react'
import remeras from '../assets/remeras.png'
import vestidos from '../assets/vestidos.png'
import pantalones from '../assets/pantalones.png'
import zapatos from '../assets/zapatos.png'
import camisas from '../assets/camisas.png'
import lenceria from '../assets/lenceria.png'
import trajesbano from '../assets/trajesbano.png'
import accesorios from '../assets/accesorios.png'
import imagenCentral from '../assets/3.png'
import {Link} from 'react-router-dom'
import React from 'react'

const Home = () => {
  return (
    
    <Flex className='main'>
<h1>LUNA MODAS</h1>
<Flex className='categoriasHome'>
<Box className='izquierdaHome'>

<Link  className='linkHome' to={'/products/vestidos'} >
<Box className="seccionHome">
  <img src={vestidos} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Vestidos</Text>
  
  </Box>
</Link>
<Link  className='linkHome' to={'/products/pantalones'} >
<Box className="seccionHome">
  <img src={pantalones} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Pantalones</Text>
  </Box>
  </Link>
  <Link  className='linkHome' to={'/products/remeras'} >
  <Box className="seccionHome">
  <img src={remeras} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Remeras</Text>
  </Box>
  </Link>
  <Link  className='linkHome' to={'/products/zapatos'} >
  <Box className="seccionHome">
  <img src={zapatos} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Zapatos</Text>
  </Box>
  </Link>



</Box>
<Box className='centroHome'>
  <img src={imagenCentral} alt="" />
</Box>
<Box className='derechaHome'>

<Link  className='linkHome' to={'/products/camisas'} >
<Box className="seccionHome">
  <img src={camisas} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Camisas</Text>
</Box>
</Link> 
<Link  className='linkHome' to={'/products/lenceria'} >   
  <Box className="seccionHome">
  <img src={lenceria} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Lenceria</Text>
  </Box>
</Link>

<Link  className='linkHome' to={'/products/tbano'} >   
  <Box className="seccionHome">
  <img src={trajesbano} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Trajes de Baño</Text>
  </Box>
  </Link>
<Link  className='linkHome' to={'/products/accesorios'} >   
  <Box className="seccionHome">
  <img src={accesorios} alt="" className="imgcat" />
  <Text className='textSeccionHome'>Accesorios</Text>
  </Box>
</Link> 
</Box>
</Flex>

    </Flex>
  )
}

export default Home