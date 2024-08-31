import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navContainer'>
    <h1 className='titulo'>FELIZ CUMPLE AMOR</h1>
        <ul className='navList'>
          <li><NavLink className="navItem" to="/" type='none'>Inicio</NavLink></li>
          <li><NavLink className="navItem" to="/galeria" type='none'>Galeria</NavLink></li>
        </ul>
    </nav>

  );
}

export default NavBar;
