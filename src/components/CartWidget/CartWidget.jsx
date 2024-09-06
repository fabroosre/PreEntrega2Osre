import React from 'react';
import './CardWidget.css'; 
// import CartWidget from '../CartWidget/CartWidget.jsx'; 
import Carrito from '../../../images/img/carrito-de-compras.png'; 


const CardWidget = () => {
  let number = 0; 

  return (
    <div className="cart">
      <h3 className="titulo-carrito">Carrito</h3>
      <img className="imagen-carrito" src={Carrito} alt="Carrito de Compras" />
      <p className="number">{number}</p>
    </div>
  );
};

export default CardWidget;