import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import Vehiculos from './components/Vehiculos';
import Contacto from './components/Contacto';
import Error404 from './components/Error404';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Nosotros />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/vehiculos/*" element={<Vehiculos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;