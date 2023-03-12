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
import ProtectedRoute from './components/ProtectedRoute';
import Datos from './views/Datos';
import { UserProvider } from './context/UserContext';

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
                <Route path="/registro" element={<Register />} />
                <Route path="/inicio-sesion" element={<Login />} />
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/producto/:id" element={<ProductDetail />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/productos/:categoria" element={<Productos />} />
                <Route path="/datos" element={<Datos />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </div>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
