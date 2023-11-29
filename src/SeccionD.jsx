import React, { useState } from 'react';
import './css/SeccionD.css';
import html1 from './img/htmlcss1.png'
import html2 from './img/htmlcss2.png'
import html3 from './img/htmlcss3.png'
import html4 from './img/htmlcss4.png'
import html5 from './img/htmlcss5.png'

function SeccionD() {

  const [criterio, setCriterio] = useState('');

  const data = [
    { title: 'Login Page', content: html1, link: 'https://carlosalfredodelacruzalvarado.github.io/html-css-01-login-page/', criterio: 'categoriaA' },
    { title: 'Simple Menu', content: html2, link: 'https://carlosalfredodelacruzalvarado.github.io/html-css-02-simple-menu/', criterio: 'categoriaA' },
    { title: 'Photography', content: html3, link: 'https://carlosalfredodelacruzalvarado.github.io/html-css-03-photography/', criterio: 'categoriaA' },
    { title: 'Ingeniería del Sureste', content: html4, link: 'https://carlosalfredodelacruzalvarado.github.io/html-css-04-ingenieria-del-sureste/', criterio: 'categoriaA' },
    { title: 'Technical Wave', content: html5, link: 'https://carlosalfredodelacruzalvarado.github.io/html-css-05-technical-wave/', criterio: 'categoriaA' },

  ];

  const filteredData = data.filter(item => (criterio ? item.criterio === criterio : true));

  return (
    <div className='seccionD' id='proyectos'>
      <div className='tituloSeccion'>
        <h1>Proyectos</h1>
      </div>
      <div className="subSeccionD">
        <div className='criterio'>
          <label htmlFor="criterio">Seleccionar criterio:</label>
          <select
            id="criterio"
            onChange={e => setCriterio(e.target.value)}
            value={criterio}
          >
            <option value="">Todas las categorías</option>
            <option value="categoriaA">HTML y CSS</option>
            <option value="categoriaB">React</option>
            {/* Próximas categorías */}
          </select>
        </div>

        <div className="card-list">
          {filteredData.map((item, index) => (
            <a key={index} target='blank' href={item.link} className="card">
              <h2>{item.title}</h2>
              {item.content.match(/\.(jpeg|jpg|gif|png)$/) ? (
                <img className='proyectoImg' src={item.content} alt={item.title} />
              ) : (
                <p>{item.content}</p>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeccionD;