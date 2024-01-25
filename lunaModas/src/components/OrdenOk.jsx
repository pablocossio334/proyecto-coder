import React from 'react'
import {Alert,  AlertIcon,  AlertTitle,  AlertDescription} from  '@chakra-ui/react'

const OrdenOk = ({orderId}) => {
return (
    <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
        ¡Orden enviada exitosamente!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
        <h1>Orden numero {orderId}</h1>
        Gracias por enviar tu orden. Nuestro equipo se pondrá en contacto contigo pronto.
        </AlertDescription>
        </Alert>
)
}

export default OrdenOk
