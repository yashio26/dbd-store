import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar/NavBar';
import About from './views/About';
import Home from './views/Home';
import Login from './views/Login';
import Productos from './views/Productos';
import Register from './views/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/inicio-sesion" element={<Login />} />
          <Route path="registro" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
