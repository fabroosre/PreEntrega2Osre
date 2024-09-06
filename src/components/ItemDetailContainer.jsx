import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Vehicles from '../data/Vehicles'; 
import "../components/idc.css";
import ItemCount from './ItemCount';

function ItemDetailContainer() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const vehiculo = Vehicles.find(p => p.id === parseInt(id));

  if (!vehiculo) {
    return <p>Vehículo no encontrado</p>;
  }

  //Para volverr a la pestaña vehiculos
  const handleGoBack = () => {
    navigate('/vehiculos'); 
  };

  return (
    <>
      <article className='Detalles'>
        <img className="imgDetail" src={vehiculo.image} alt={vehiculo.name}/>
        <h2>{vehiculo.name}</h2>
        <p>{vehiculo.description}</p>
        <p>Precio: ${vehiculo.price}</p>
        <ItemCount stock={10} initial={1} onAdd={(quantity) => console.log('Cantidad agregada:', quantity)} />
        <button onClick={handleGoBack} className="go-back-button">Volver</button>
      </article>
    </>
  );
}

export default ItemDetailContainer;

