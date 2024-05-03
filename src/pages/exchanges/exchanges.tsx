
import './Intercambios.css';
import { useNavigate } from 'react-router-dom';

const Intercambios = () => {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handleNavigateToNegociacion = () => {
    navigate('/negociacion'); // Navegar a la ruta de Negociacion

  };return (
    <div className="intercambios-container">
      <h2 className="titulo">Intercambios</h2>

      <div className="tabla-container">
        {/* Tabla 1 */}
        <div className="tabla">
          <div className="tabla-item">
            <img src="limon.jpg" alt="Producto 1" />
            <p>Cambio</p>
          </div>
          <div className="tabla-item">
            <img src="tomate.jpg" alt="Motivo 1" />
            <p>Busco</p>
          </div>
          <div className="info">
            <p>Unidades: 5</p>
            <p>Stock: Disponible</p>
          </div>
          <button className="btn-intercambiar" onClick={handleNavigateToNegociacion}>
            Intercambiar
          </button>
        </div>

        {/* Tabla 2 */}
        <div className="tabla">
          <div className="tabla-item">
            <img src="fresas1.jpg" alt="Producto 2" />
            <p>Cambio</p>
          </div>
          <div className="tabla-item">
            <img src="mora.webp" alt="Motivo 2" />
            <p>Busco</p>
          </div>
          <div className="info">
            <p>Unidades: 3</p>
            <p>Stock: Disponible</p>
          </div>
          <button className="btn-intercambiar" onClick={handleNavigateToNegociacion}>
            Intercambiar
          </button>
        </div>

{/* Tabla 4 */}
<div className="tabla">
          <div className="tabla-item">
            <img src="manzana.jpg" alt="Producto 2" />
            <p>Cambio</p>
          </div>
          <div className="tabla-item">
            <img src="duraznos1.webp" alt="Motivo 2" />
            <p>Busco</p>
          </div>
          <div className="info">
            <p>Unidades: 3</p>
            <p>Stock: Disponible</p>
          </div>
          <button className="btn-intercambiar" onClick={handleNavigateToNegociacion}>
            Intercambiar
          </button>
        </div>

        {/* ... (Tablas 3-6) */}
      </div>

      {/* Segunda fila de tablas */}
      <div className="tabla-container">
        {/* Tabla 3 */}
        <div className="tabla">
          <div className="tabla-item">
            <img src="manzanav.webp" alt="Producto 1" />
            <p>Cambio</p>
          </div>
          <div className="tabla-item">
            <img src="pera.jpg" alt="Motivo 1" />
            <p>Busco</p>
          </div>
          <div className="info">
            <p>Unidades: 5</p>
            <p>Stock: Disponible</p>
          </div>
          <button className="btn-intercambiar" onClick={handleNavigateToNegociacion}>
            Intercambiar
          </button>
        </div>

         {/* Tabla 4 */}
         <div className="tabla">
          <div className="tabla-item">
            <img src="tomate.jpg" alt="Producto 2" />
            <p>Cambio</p>
          </div>
          <div className="tabla-item">
            <img src="fresas1.jpg" alt="Motivo 2" />
            <p>Busco</p>
          </div>
          <div className="info">
            <p>Unidades: 3</p>
            <p>Stock: Disponible</p>
          </div>
          <button className="btn-intercambiar" onClick={handleNavigateToNegociacion}>
            Intercambiar
          </button>
        </div>
{/* Tabla 4 */}
<div className="tabla">
          <div className="tabla-item">
            <img src="pera.jpg" alt="Producto 2" />
            <p>Cambio</p>
          </div>
          <div className="tabla-item">
            <img src="tomate.jpg" alt="Motivo 2" />
            <p>Busco</p>
          </div>
          <div className="info">
            <p>Unidades: 3</p>
            <p>Stock: Disponible</p>
          </div>
          <button className="btn-intercambiar" onClick={handleNavigateToNegociacion}>
            Intercambiar
          </button>
        </div>
        
        
        
        

        {/* ... (Tablas 4-6) */}
      </div>

      {/* Segunda fila de tablas */}
      <div className="tabla-container">
        {/* Tabla 3 */}
        <div className="tabla">
          <div className="tabla-item">
          <img src="fresas1.jpg" alt="Producto 2" />
            <p>Cambio</p>
          </div>
          <div className="tabla-item">
            <img src="mora.webp" alt="Motivo 2" />
            <p>Busco</p>
          </div>
          <div className="info">
            <p>Unidades: 5</p>
            <p>Stock: Disponible</p>
          </div>
          <button className="btn-intercambiar" onClick={handleNavigateToNegociacion}>
            Intercambiar
          </button>
        </div>

         {/* Tabla 4 */}
         <div className="tabla">
          <div className="tabla-item">
          <img src="manzana.jpg" alt="Producto 2" />
            <p>Cambio</p>
          </div>
          <div className="tabla-item">
            <img src="duraznos1.webp" alt="Motivo 2" />
            <p>Busco</p>
          </div>
          <div className="info">
            <p>Unidades: 3</p>
            <p>Stock: Disponible</p>
          </div>
          <button className="btn-intercambiar" onClick={handleNavigateToNegociacion}>
            Intercambiar
          </button>
        </div>


        {/* Tabla 4 */}
<div className="tabla">
<div className="tabla-item">
            <img src="limon.jpg" alt="Producto 1" />
            <p>Cambio</p>
          </div>
          <div className="tabla-item">
            <img src="tomate.jpg" alt="Motivo 1" />
            <p>Busco</p>
          </div>
          <div className="info">
            <p>Unidades: 3</p>
            <p>Stock: Disponible</p>
          </div>
          <button className="btn-intercambiar" onClick={handleNavigateToNegociacion}>
            Intercambiar
          </button>
        </div>
        
        
        

        {/* ... (Tablas 4-6) */}
      </div>
    </div>
  );
};

export default Intercambios;
