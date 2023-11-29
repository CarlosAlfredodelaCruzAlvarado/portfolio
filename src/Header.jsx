import './css/Header.css';
import Home from './img/icon.png'
import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <div className="Header">
      <div className='logo'>
        <a href='/'>
          <img src={Home} />
        </a>
      </div>
      <div className='navBar'>
        <HashLink to='#home'>Inicio</HashLink>
        <HashLink to='#proyectos'>Proyectos</HashLink>
        <HashLink to='#contacto'>Contacto</HashLink>
      </div>
    </div>
  );
}

export default Header;