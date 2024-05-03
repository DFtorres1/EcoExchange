import './ProductTable.css';

const productos = [
  {
    id: 1,
    imagen: 'manzana.jpg',
    nombre: 'Manzanas',
    descripcion: 'Manzanas frescas de la temporada',
    precioNormal: 100,
    precioDescuento: 80,
    unidades: 5,
    stock: true,
  },
  {
    id: 2,
    imagen: 'pera.jpg',
    nombre: 'Pera',
    descripcion: 'Peras maduras y dulces',
    precioNormal: 50,
    precioDescuento: 40,
    unidades: 10,
    stock: true,
  },
  {
    id: 3,
    imagen: 'tomate.jpg',
    nombre: 'Tomates',
    descripcion: 'Tomates Frescos',
    precioNormal: 50,
    precioDescuento: 40,
    unidades: 10,
    stock: true,
  },
  {
    id: 4,
    imagen: 'limon.jpg',
    nombre: 'Limoness',
    descripcion: 'Limon tahiti alta calidad',
    precioNormal: 50,
    precioDescuento: 40,
    unidades: 10,
    stock: true,
  },
  {
    id: 5,
    imagen: 'mora.webp',
    nombre: 'Moras',
    descripcion: 'Moras deliciosas y dulces',
    precioNormal: 50,
    precioDescuento: 40,
    unidades: 10,
    stock: true,
  },
  {
    id: 6,
    imagen: 'duraznos1.webp',
    nombre: 'Duraznos',
    descripcion: 'Deliciosos duraznos maduros',
    precioNormal: 50,
    precioDescuento: 40,
    unidades: 10,
    stock: true,
  },
  {
    id: 7,
    imagen: 'fresas1.jpg',
    nombre: 'Fresas',
    descripcion: 'Fresas de la mejor calidad',
    precioNormal: 50,
    precioDescuento: 40,
    unidades: 10,
    stock: true,
  },
  {
    id: 8,
    imagen: 'manzanav.webp',
    nombre: 'Manzana Verde',
    descripcion: 'Manzanas verdes de calidad',
    precioNormal: 50,
    precioDescuento: 40,
    unidades: 10,
    stock: true,
  },
  // ... otros productos
  {
    id: 9,
    imagen: 'pera.jpg',
    nombre: 'Pera',
    descripcion: 'Peras frescas y dulces',
    precioNormal: 80,
    precioDescuento: 60,
    unidades: 8,
    stock: true,
  },
];

productos.forEach((producto) => {
    const descuento = Math.floor(Math.random() * (30 - 10 + 1)) + 10; // Descuento entre 10% y 30%
    producto.precioDescuento = Math.round(producto.precioNormal * (1 - descuento / 100));
  });
  
  const Ofertas = () => {
    return (
      <div className="intercambios-container">
        <h1 className="titulo">Ofertas</h1>
        <div className="tabla-container">
          {productos.map((producto) => (
            <div key={producto.id} className="tabla-item">
              <div className="descuento">
                {Math.round(((producto.precioNormal - producto.precioDescuento) / producto.precioNormal) * 100)}% OFF
              </div>
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <div className="descripcion">{producto.descripcion}</div>
              <div className="precios">
                <span className="precio-normal">Precio: ${producto.precioNormal}</span>
                <span className="precio-descuento">Descuento: ${producto.precioDescuento}</span>
              </div>
              <div className="info">
                <span>Unidades disponibles: {producto.unidades}</span>
                <span>{producto.stock ? 'Disponible' : 'Agotado'}</span>
              </div>
              <button className="btn-add">Añadir a cesta</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Ofertas;