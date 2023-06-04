import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header title="TecnoSeguros"/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
