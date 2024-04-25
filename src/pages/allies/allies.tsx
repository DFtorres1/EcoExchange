import { Link } from 'react-router-dom';  // Importa Link para el enlace a otra página
import './MisAliados.css';

const aliados = [
  {
    id: 1,
    imagen: 'exito.png',
    titulo: 'Almacenes Exito',
    productos: 50,
    ofertas: 10,
  },
  {
    id: 2,
    imagen: 'jumbo.webp',
    titulo: 'Almacenes Jumbo',
    productos: 100,
    ofertas: 20,
  },
  {
    id: 1,
    imagen: 'd1.png',
    titulo: 'Tiendas D1',
    productos: 50,
    ofertas: 10,
  },
  {
    id: 1,
    imagen: 'metro.png',
    titulo: 'Almacenes Metro',
    productos: 50,
    ofertas: 10,
  },
  {
    id: 1,
    imagen: 'olimpica.png',
    titulo: 'Tienda Olimpica',
    productos: 50,
    ofertas: 10,
  },
  {
    id: 1,
    imagen: 'ara.png',
    titulo: 'Tienda Ara',
    productos: 50,
    ofertas: 10,
  },
  // ... otros aliados
];

const MisAliados = () => {
  return (
    <div className="mis-aliados-container">
      <h1 className="titulo">Mis Aliados</h1>
      <div className="aliados-grid">
        {aliados.map((aliado) => (
          <div key={aliado.id} className="aliado-item">
            <img src={aliado.imagen} alt={aliado.titulo} />
            <h2>{aliado.titulo}</h2>
            <p>Productos: {aliado.productos}</p>
            <p>Ofertas: {aliado.ofertas}</p>
            <Link to={`/aliado/${aliado.id}`} className="btn-ver-productos">Ver productos</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisAliados;
