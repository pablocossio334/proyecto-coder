import React, { useContext, useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Input,
  Button,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import OrdenOk from './ordenOk';
import { cartContext } from '../context/ShopingCartContext';
import { useForm } from 'react-hook-form';
import { collection, getDocs, setDoc, getFirestore, query, orderBy, doc } from 'firebase/firestore';

const Form = () => {
  const { compras,vaciarCarrito } = useContext(cartContext);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [departamento, setDepartamento] = useState('Treinta y Tres');
  const [ciudad, setCiudad] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [orderId, setOrderId] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const db = getFirestore();
  const orderCollection = collection(db, 'orders');

  const order = {
    orderId: parseInt(orderId),
    nombre,
    apellido,
    cedula,
    email,
    direccion,
    telefono,
    departamento,
    ciudad,
    metodoPago,
    compras,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const querySnapshot = await getDocs(query(orderCollection, orderBy('orderId', 'desc')));
    const lastDocument = querySnapshot.docs[0];
    const lastOrderId = lastDocument?.id;

    

    

    const productDocRef = doc(orderCollection, ""+orderId);

    try {
      await setDoc(productDocRef, order);
      
    setShowAlert(true);
    vaciarCarrito();
    } catch (error) {
      console.error('Error al guardar en Firestore:', error);
    }
  };

  useEffect(() => {
    const fetchLastOrderId = async () => {
      const querySnapshot = await getDocs(query(orderCollection, orderBy('orderId', 'desc')));
      const lastDocument = querySnapshot.docs[0];

      if (lastDocument) {
        const lastOrderId = parseInt(lastDocument.id, 10);
        
        setOrderId(lastOrderId + 1);
        
      } else {
        setOrderId(1);
        
      }
    };

    fetchLastOrderId();
  }, []);

  return (
    <Flex className="main" flexDirection="column" alignItems="center" justifyContent="center">
      <h1>Orden de compra # {orderId}</h1>
      {!showAlert ? (

        <form className="datosCliente" action="" onSubmit={handleSubmit}>
        
        <Box className='boxForm'  bg="pink.200" borderRadius="md">
  <label className='labelForm' htmlFor="cedula">Cedula:</label>
  <Input  type="text" id="nombre" value={cedula} onChange={(e) => setCedula(e.target.value)} />
  <label className='labelForm' htmlFor="email">Email:</label>
  <Input type="text" id="apellido" value={email} onChange={(e) => setEmail(e.target.value)} />
    </Box>
  <Box className='boxForm'  bg="pink.200" borderRadius="md">
  <label className='labelForm' htmlFor="nombre">Nombres:</label>
  <Input  type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
  <label className='labelForm' htmlFor="apellido">Apellidos:</label>
  <Input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
    </Box>
    <Box className='boxForm'  bg="pink.200" borderRadius="md">
  <label className='labelForm' htmlFor="direccion">Direccion:</label>
  <Input  type="text" id="nombre" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
  <label className='labelForm' htmlFor="apellido">Telefono:</label>
  <Input type="text" id="apellido" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
    </Box>
    <Box className='boxForm'  bg="pink.200" borderRadius="md">
  <label className='labelForm' htmlFor="departamento">Direccion:</label>
  <Select id="departamento" value={departamento} onChange={(e) => setDepartamento(e.target.value)}>
  <option key="Treinta y Tres" value="Treinta y Tres">Treinta y Tres</option>,
  <option key="Canelones" value="Canelones">Canelones</option>,
  <option key="CerroLargo" value="Cerro Largo">Cerro Largo</option>,
  <option key="Colonia" value="Colonia">Colonia</option>,
  <option key="Durazno" value="Durazno">Durazno</option>,
  <option key="Flores" value="Flores">Flores</option>,
  <option key="Florida" value="Florida">Florida</option>,
  <option key="Lavalleja" value="Lavalleja">Lavalleja</option>,
  <option key="Maldonado" value="Maldonado">Maldonado</option>,
  <option key="Montevideo" value="Montevideo">Montevideo</option>,
  <option key="Paysandu" value="Paysandú">Paysandú</option>,
  <option key="RioNegro" value="Río Negro">Río Negro</option>,
  <option key="Rivera" value="Rivera">Rivera</option>,
  <option key="Rocha" value="Rocha">Rocha</option>,
  <option key="Salto" value="Salto">Salto</option>,
  <option key="SanJose" value="San José">San José</option>,
  <option key="Soriano" value="Soriano">Soriano</option>,
  <option key="Tacuarembo" value="Tacuarembó">Tacuarembó</option>,
  <option key="Artigas" value="Artigas">Artigas</option>
  </Select>
  <label className='labelForm' htmlFor="apellido">Ciudad:</label>
  <Input type="text" id="apellido" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
    </Box>
  
  <Box className='boxForm'  bg="pink.200" borderRadius="md">
  
  <label className='labelForm' htmlFor="metodoPago">Metodo de Pago:</label>
  <Select
  id="metodoPago"
  value={metodoPago}
  onChange={(e) => setMetodoPago(e.target.value)}

>
  <option key="Tarjeta" value="Tarjeta">Tarjeta</option>, 
  <option key="MercadoPago" value="MercadoPago">MercadoPago</option>,
  <option key="Transferencia" value="Transferencia">Transferencia Bancaria</option>,   
  </Select>
  <Button size='sm' colorScheme='white' color={'Black'} border={'1px solid black'}  type="submit">ENVIAR</Button>
    </Box> 
      </form>
      ) : (
        <OrdenOk
        orderId={orderId}
        />
      )}
    </Flex>
  );
};

export default Form;
