import React from 'react';
import Card from './Card';
import Vehicles from '../data/Vehicles'; 

function ItemListContainer() {
  return (
    <div>
      <h2>Nuestros Vehículos</h2>
      <div style={{ display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
        {Vehicles.map(vehiculo => (
          <Card key={vehiculo.id} vehiculo={vehiculo} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
