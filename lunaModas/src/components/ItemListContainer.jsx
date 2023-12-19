import { Flex,Box ,Center,Text} from '@chakra-ui/react';
import React from 'react';
import Item from './Item';
import ItemList from './ItemList';


const ItemListContainer = ({ categoria }) => {
  const productos=[ {categoria:"categoria1",
                    productos:[{nombre:"producto1",
                                imagen:"https://f.fcdn.app/imgs/fbb5b8/sisi.com.uy/sisiuy/dd41/original/catalogo/33028_642/440x600/malla-aqua-electric-blue.jpg",
                                descripcion:"datos del producto",
                                precio:2345,
                                fechaIngreso:12/12/1999},
                                {nombre:"producto2",
                                imagen:"https://f.fcdn.app/imgs/42178e/btu.com.uy/btusuy/2376/original/catalogo/007129_100_1/460x460/malla-de-entrenamiento-para-mujer-arena-women-s-swimsuit-challenge-back-signature-sarah-sjostrom.jpg",
                                descripcion:"datos del producto2",
                                precio:2342,
                                fechaIngreso:12/12/2015},
                                {nombre:"producto1",
                                imagen:"https://f.fcdn.app/imgs/fbb5b8/sisi.com.uy/sisiuy/dd41/original/catalogo/33028_642/440x600/malla-aqua-electric-blue.jpg",
                                descripcion:"datos del producto",
                                precio:2345,
                                fechaIngreso:12/12/1999},
                                {nombre:"producto2",
                                imagen:"https://f.fcdn.app/imgs/42178e/btu.com.uy/btusuy/2376/original/catalogo/007129_100_1/460x460/malla-de-entrenamiento-para-mujer-arena-women-s-swimsuit-challenge-back-signature-sarah-sjostrom.jpg",
                                descripcion:"datos del producto2",
                                precio:2342,
                                fechaIngreso:12/12/2015},
                                {nombre:"producto3",
                                imagen:"https://f.fcdn.app/imgs/8c78f3/sisi.com.uy/sisiuy/a904/webp/catalogo/35797_705/800x1200/malla-genova-metal-verde-oliva-metal.jpg",
                                descripcion:"datos del producto2",
                                precio:2342,
                                fechaIngreso:12/12/2015},
                                {nombre:"producto2",
                                imagen:"https://f.fcdn.app/imgs/42178e/btu.com.uy/btusuy/2376/original/catalogo/007129_100_1/460x460/malla-de-entrenamiento-para-mujer-arena-women-s-swimsuit-challenge-back-signature-sarah-sjostrom.jpg",
                                descripcion:"datos del producto2",
                                precio:2342,
                                fechaIngreso:12/12/2015}
                              ]
                    } ,
                    {categoria:"categoria2",
                    productos:[{producto:"producto1",
                                imagen:"",
                                descripcion:"datos del producto",
                                precio:2345,
                                fechaIngreso:12/12/1999},
                                {producto:"producto2",
                                imagen:"",
                                descripcion:"datos del producto2",
                                precio:2342,
                                fechaIngreso:12/12/2015},
                                {producto:"producto3",
                                imagen:"",
                                descripcion:"datos del producto2",
                                precio:2342,
                                fechaIngreso:12/12/2015}
                              ]
                    }

  ]

  return (
  
<Flex className='main' >
  <h1>{categoria}</h1>
  <ItemList
  productos={productos[0]}
  />
</Flex>

      
    
  );
};

export default ItemListContainer;