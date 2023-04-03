import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SobreNosotros from './views/SobreNosotros';
import Home from './views/Home';
import InicioSesion from './views/InicioSesion';
import Productos from './views/Productos';
import Registro from './views/Registro';
import ProductDetail from './views/ProductDetail';
import Carrito from './views/Carrito';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';
import Datos from './views/Datos';
import { UserProvider } from './context/UserContext';
import Compras from './views/Compras';
import CompraDetail from './views/CompraDetail';
import Panel from './views/Panel';

function App() {
  /* const [user, setUser] = useState(null); */

  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <div className="App">
            <Header />
            <NavBar />
            <Routes>
              <Route element={<ProtectedRoute isAuth={true} />}>
                <Route path="/registro" element={<Registro />} />
                <Route path="/inicio-sesion" element={<InicioSesion />} />
              </Route>
              <Route element={<ProtectedRoute isUser={true} />}>
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/producto/:id" element={<ProductDetail />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/productos/:categoria" element={<Productos />} />
                <Route path="/datos" element={<Datos />} />
                <Route path="/datos/compras" element={<Compras />} />
                <Route path="/datos/compra/:id" element={<CompraDetail />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/" element={<Home />} />
              </Route>
              <Route element={<ProtectedRoute isAdmin="admin" />}>
                <Route path="/panel" element={<Panel />} />
              </Route>
            </Routes>
          </div>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
