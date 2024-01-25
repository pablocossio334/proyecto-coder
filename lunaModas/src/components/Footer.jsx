import { Flex, Box } from '@chakra-ui/react';
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import React from 'react';

const Footer = () => {
  return (
    <Flex className='Footer'>
      <Box>COPYRIGHT LUNA MODAS 2023 </Box>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.418456398144!2d-54.38106882462381!3d-33.22933907347787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x950be91cdab76001%3A0x9ed17df0c26eb02c!2sDr.%20Licurgo%20Bulgarelli%201489%2C%2033000%20Treinta%20y%20Tres%2C%20Departamento%20de%20Treinta%20y%20Tres!5e0!3m2!1ses!2suy!4v1706007133051!5m2!1ses!2suy"
          width="400"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Box>
        <FaFacebookSquare size={30} style={{ marginRight: 10 }} />
        <FaInstagramSquare size={30} style={{ marginRight: 10 }} />
        <FaTiktok size={30} style={{ marginRight: 10 }} />
        <BsWhatsapp size={30} />
      </Box>
    </Flex>
  );
}

export default Footer;
