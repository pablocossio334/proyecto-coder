import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Cargando = () => {
  const [now, setNow] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
     
      setNow((prevNow) => (prevNow < 100 ? prevNow + 1 : prevNow));
    }, 20); 

    return () => clearInterval(intervalId); 
  }, []);

  return <ProgressBar  className='barraCarga' variant='danger' now={now} label={`${now}%`} />;
};

export default Cargando;
