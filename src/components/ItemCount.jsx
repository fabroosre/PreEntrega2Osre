import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
      console.log(count + 1); 
    }
  };
  
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      console.log(count - 1); // Para verificar el valor
    }
  };
  return (
    <div className="item-count">
      <button onClick={decrement} className="count-button">-</button>
      <span className="count-display">{count}</span>
      <button onClick={increment} className="count-button">+</button>
      <button onClick={() => onAdd(count)} className="add-to-cart">Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;