import React from 'react';
import './css/SeccionG.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { School, SensorOccupied, Group } from '@mui/icons-material';

function SeccionG() {
  const listaElementos = [
    {
      icono: <School />, texto: 'Cursos y Talleres', subListas: [
        'Curso “Lógica de programación” – Alura Latam',
        'Curso “HTML y CSS” – Alura Latam',
        'Curso “Git y Github” – Alura Latam',
        'Curso “Flexbox” – Alura Latam',
        'Curso “Layouts Responsivos” – Alura Latam',
        'Curso “JavaScript” – Alura Latam',
        'Curso “Agile” – Alura Latam',
        'Curso “React” – Alura Latam',
        'Curso “MySQL” – Alura Latam',
        'Curso “Oracle Cloud Infrastructure” – Alura Latam',
        'Curso “Python para Data Science” – Alura Latam',
      ]
    },
    //     { icono: <SensorOccupied />, texto: 'Capacitaciones', subListas: [
    //         'Sublista 3', 
    //         'Sublista 4'
    // ] },
    // { icono: <Group />, texto: 'Proyectos', subListas: [
    //     'Sublista 5', 
    //     'Sublista 6'
    // ] },
  ];

  return (
    <>
      <div className="SeccionG">
        <div className='seccionTitulo'>
          <h1 className='SGh1'> Educación y formación</h1>
        </div>
      </div>
      <div className='list'>
        <List >
          {listaElementos.map((elemento, index) => (
            <ListItem key={index}>
              <ListItemIcon>{elemento.icono}</ListItemIcon>
              <ListItemText primary={elemento.texto} />
              {elemento.subListas && elemento.subListas.length > 0 && (
                <List>
                  {elemento.subListas.map((subLista, subIndex) => (
                    <ListItem key={`${index}-${subIndex}`}>
                      <ListItemText primary={subLista} />
                    </ListItem>
                  ))}
                </List>
              )}
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default SeccionG;