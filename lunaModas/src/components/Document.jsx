
import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, setDoc, doc } from 'firebase/firestore';
import productos from './Datos';

const Document = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  

   setProducts(productos)
  }, []);

  const cargarProductos = async () => {
    const db = getFirestore();
    const productosCollection = collection(db, 'productos');

    // Obtener el último id en la colección 'productos'
    const lastProduct = await getDocs(productosCollection);
    let lastId = 0;

    lastProduct.forEach((doc) => {
      const productId = parseInt(doc.id, 10);
      if (!isNaN(productId) && productId > lastId) {
        lastId = productId;
      }
    });

    // Iterar sobre los productos y agregar cada uno a la colección 'productos' con el mismo id como nombre del documento
    for (const product of products) {
      try {
        lastId += 1;
        const newProductId = String(lastId).padStart(3, '0'); // Formatear el id a "001", "002", etc.
        const productDocRef = doc(productosCollection, newProductId);
        await setDoc(productDocRef, product);
        console.log(`Producto ${product.nombre} agregado a la colección 'productos' con id ${newProductId}`);
      } catch (error) {
        console.error('Error al agregar el producto a la colección:', error);
      }
    }
  };

  return (
    <div>
      Document
      {console.log(products)}
      <button onClick={cargarProductos}>Cargar Productos</button>
    </div>
  );
};

export default Document;
