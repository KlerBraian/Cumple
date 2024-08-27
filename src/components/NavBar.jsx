import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (<div>
    <h1 className='navContainer titulo'>FELIZ CUMPLE AMOR</h1>
    <nav className='navContainer'>
        <ul className='navList'>
          <li><NavLink className="navItem" to="/">Inicio</NavLink></li>
          <li><NavLink className="navItem" to="/galeria">Galeria</NavLink></li>
        </ul>
    </nav>
  </div>

  );
}

export default NavBar;
