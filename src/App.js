import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar/NavBar';
import About from './views/About';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
