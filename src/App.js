import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar/NavBar';
import SobreNosotros from './views/SobreNosotros';
import Home from './views/Home';
import Login from './views/Login';
import Productos from './views/Productos';
import Register from './views/Register';
import ProductDetail from './views/ProductDetail';
import Carrito from './views/Carrito';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:categoria" element={<Productos />} />
            <Route path="/inicio-sesion" element={<Login />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
