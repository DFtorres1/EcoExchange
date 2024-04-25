// src/componentes/Negociacion.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Chat from './Chat';

// Definimos los tipos de datos
type Persona = {
  nombre: string;
  ubicacion: [number, number];
  imagen: string;
};

const Negociacion = () => {
  const [comprador, setComprador] = useState<Persona | null>(null);
  const [vendedor, setVendedor] = useState<Persona | null>(null);

  useEffect(() => {
    // Aquí puedes cargar la información del comprador y vendedor desde tu backend o alguna base de datos
    // Por ahora, es solo un ejemplo con datos estáticos
    setComprador({
      nombre: 'Comprador',
      ubicacion: [40.7128, -74.0060], // Coordenadas de Nueva York como ejemplo
      imagen: 'ruta-a-imagen-comprador.jpg'
    });

    setVendedor({
      nombre: 'Vendedor',
      ubicacion: [40.7128, -73.9352], // Coordenadas de Brooklyn como ejemplo
      imagen: 'ruta-a-imagen-vendedor.jpg'
    });
  }, []);

  const position = [40.7128, -74.0060]; // Posición inicial del mapa

  return (
    <div className="negociacion-container">
      <MapContainer center ={position} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {comprador && (
          <Marker position={comprador.ubicacion}>
            <Popup>
              <img src={comprador.imagen} alt={comprador.nombre} />
              <p>{comprador.nombre}</p>
            </Popup>
          </Marker>
        )}
        {vendedor && (
          <Marker position={vendedor.ubicacion}>
            <Popup>
              <img src={vendedor.imagen} alt={vendedor.nombre} />
              <p>{vendedor.nombre}</p>
            </Popup>
          </Marker>
        )}
      </MapContainer>
      <div className="chat-container">
        <Chat />
      </div>
    </div>
  );
}

export default Negociacion;
