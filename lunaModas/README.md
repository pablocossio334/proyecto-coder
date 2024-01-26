# E-commerce React by Pablo Cossio

Este proyecto fue creado por Pablo Cossio como parte de su trabajo final para el curso de React de Coderhouse.

## Componentes

- **Home.jsx**: Página principal.
- **ItemListContainer.jsx**: Obtiene una lista de productos filtrados por categoría desde Firebase y se la pasa a ItemList.
- **ItemList.jsx**: Recorre la lista de productos de ItemListContainer y los muestra utilizando el componente List.jsx.
- **List.jsx**: Muestra los datos de un producto y permite hacer clic para ir a ItemDetailContainer.
- **ItemDetailContainer.jsx**: Obtiene un producto por su ID y se lo pasa a ItemDetail para mostrarlo.
- **ItemDetail.jsx**: Muestra detalles del producto y permite al usuario comprar eligiendo talla y cantidad, guardando en el contexto y en la memoria del navegador.
  **ItemCount.jsx**: Componente que controla cantidad de articulos y precio y el boton comprar.
- **Cargando.jsx**: Barra de carga utilizada para esperar que se obtengan los productos antes de renderizar, se usa en ItemDetailContainer y en ItemListContainer.
- **CartView.jsx**: Muestra los productos comprados con opciones para cambiar la cantidad, eliminar productos o finalizar la compra, que lleva al formulario.
- **Form.jsx**: Obtiene datos de productos comprados y agrega datos del comprador (nombre, apellido, dirección, teléfono, etc.), y los guarda en Firebase.
- **CartWidget.jsx**: Muestra en todo momento la cantidad de productos comprados y al hacer clic carga CartView.
- **About.jsx**: Página de "Acerca de" (sin implementar aún).
- **Footer.jsx**: Pie de página.
- **NavBar.js**: Cabecera con el menú.
- **OrdenOk.jsx**: Indica que la orden fue creada en la base de datos.

## Rutas

```jsx
<Routes>
  <Route exact path='/products' element={<ItemListContainer />} />
  <Route exact path='/products/:cat' element={<ItemListContainer />} />
  <Route exact path='/item/:id' element={<ItemDetailContainer />} />
  <Route exact path='/AboutUs' element={<AboutUs />} />
  <Route exact path='/Form' element={<Form />} />
  <Route exact path='/CartView' element={<CartView />} />
  <Route path='*' element={<Home />} />
</Routes>

## Apis
react router dom
context

## Librerías de Estilos

Este proyecto utiliza las siguientes librerías de estilos:

- [Chakra UI](https://chakra-ui.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Icons](https://react-icons.github.io/react-icons/)


[Demo del Sistema en funcionamiento](https://youtu.be/mTKrYiMbjcU?si=7r7CxvRiGO5wbGX6)

##Proximas Mejoras
login
control de Stock
agregar o quitar productos al Stock
crear categorias dinamicamente
modificar articulos
integracion con api de pago




![MiLogo](https://pablocossio.net/java/img/LOGO.png)
