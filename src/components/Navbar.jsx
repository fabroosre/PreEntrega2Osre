import { Link } from 'react-router-dom';
import Lazaro from '../../images/img/lazaro2.jpg'; 
import "./Navbar.css";
import CartWidget from '../components/CartWidget/CartWidget';

function Navbar() {
  return (
    <nav>
      <ul>
      <Link to="/">
        <img className="imagen-lazaro" src="../../images/img/lazaro2.jpg" alt="Logo Lázaro" />
      </Link>
      <h1 className="titulo-menu">Concesionaria Lázaro "B"</h1>
        <li className="titulo-link"><Link to="/nosotros">Nosotros</Link></li>
        <li className="titulo-link"><Link to="/vehiculos">Vehiculos</Link></li>
        <li className="titulo-link"><Link to="/contacto">Contacto</Link></li>
        <CartWidget/>
      </ul>
    </nav>
  );
}

export default Navbar;