import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '300px', // Aumentamos la altura para que las imágenes sean más grandes
  textAlign: 'center',
  background: '#364d79',
  display: 'flex',
  alignItems: 'center', // Centra verticalmente
  justifyContent: 'center' // Centra horizontalmente
};

const imageStyle: React.CSSProperties = {
  maxWidth: '100%', // Para asegurarnos de que la imagen no sea más grande que el contenedor
  maxHeight: '100%', // Para asegurarnos de que la imagen no sea más grande que el contenedor
  objectFit: 'contain' // Para ajustar la imagen dentro del contenedor sin distorsionarla
};

const App: React.FC = () => (
  <Carousel autoplay autoplaySpeed={3000}> {/* autoplaySpeed en milisegundos (3000ms = 3 segundos) */}
    <div style={contentStyle}>
      <img src="carru2.jpg" alt="Imagen 1" style={imageStyle} />
    </div>
    <div style={contentStyle}>
      <img src="carru3.webp" alt="Imagen 2" style={imageStyle} />
    </div>
    <div style={contentStyle}>
      <img src="carru1.jpg" alt="Imagen 3" style={imageStyle} />
    </div>
    <div style={contentStyle}>
      <img src="carru4.jpg" alt="Imagen 4" style={imageStyle} />
    </div>
  </Carousel>
);

export default App;
