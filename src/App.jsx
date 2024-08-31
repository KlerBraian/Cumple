import {Footer} from "./components/Footer"
import Galeria from "./components/Galeria"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/main.css"
import Inicio from "./components/Inicio"

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
