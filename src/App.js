import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About/About';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing/Landing';
import Seguros from './pages/Seguros/Seguros';

function App() {
  return (
    <Router>
      <div className="App">
        <Header title="TecnoSeguros"/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route path="/insurance" element={<Seguros/>}/>
          {/* <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
