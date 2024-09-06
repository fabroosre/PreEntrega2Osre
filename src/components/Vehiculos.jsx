import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

function Vehiculos() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path=":id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default Vehiculos;