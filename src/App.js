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

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/inicio-sesion" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
