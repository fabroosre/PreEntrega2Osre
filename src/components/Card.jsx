import React from 'react';
import { Link } from 'react-router-dom';
import "../components/Card.css";
import '../components/ItemCount.css'; 

function Card({ vehiculo }) {
  return (
    <div className="styleCard">
      <img className="imgCardGaleria" src={vehiculo.image}/>
      <h3>{vehiculo.name}</h3>
      <p>{vehiculo.description}</p>
      <p>Precio: ${vehiculo.price}</p>
      <Link to={`/vehiculos/${vehiculo.id}`}>Ver Detalles</Link>
    </div>
  );
}

export default Card;