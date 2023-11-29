import React, { useState, useEffect } from 'react';
import { SpinnerDotted } from 'spinners-react';
import anime from 'animejs';
import './css/App.css';
import Header from "./Header"
import SeccionA from './SeccionA';
import SeccionB from './SeccionB';
import SeccionC from './SeccionC';
import SeccionD from './SeccionD';
import SeccionE from './SeccionE';
import SeccionF from './SeccionF';
import SeccionG from './SeccionG';
import Footer from './Footer';
import CustomScrollbar from './CustomScrollbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
      setLoaded(true);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (loaded) {
      anime.timeline({ loop: true })
        .add({
          targets: '.ml4 .letters-1',
          opacity: [0, 1],
          scale: [0.2, 1],
          duration: 200
        })
        .add({
          targets: '.ml4 .letters-1',
          opacity: 0,
          scale: 3,
          duration: 600,
          easing: 'easeInExpo',
          delay: 500
        })
        .add({
          targets: '.ml4 .letters-2',
          opacity: [0, 1],
          scale: [0.2, 1],
          duration: 200
        })
        .add({
          targets: '.ml4 .letters-2',
          opacity: 0,
          scale: 3,
          duration: 600,
          easing: 'easeInExpo',
          delay: 500
        })
        .add({
          targets: '.ml4 .letters-3',
          opacity: [0, 1],
          scale: [0.2, 1],
          duration: 200
        })
        .add({
          targets: '.ml4 .letters-3',
          opacity: 0,
          scale: 3,
          duration: 600,
          easing: 'easeInExpo',
          delay: 500
        })
        .add({
          targets: '.ml4',
          opacity: 0,
          duration: 500,
          delay: 500
        });
      setTimeout(() => {
        setLoaded(false);
      }, 4000);
    }
  }, [loaded]);

  return (
    <div>
      {loading && (
        <div className='pantallaCarga'>
          <div className='pantallaCargaSpinner'>
            <SpinnerDotted size={190} thickness={100} speed={139} color="rgba(172, 57, 172, 1)" />
          </div>
        </div>
      )}

      {loaded && (
        <div className='pantallaCarga'>
          <div className='pantallaCargaRSG'>
            <h1 className="ml4">
              <span className="letters letters-1">Ready</span>
              <span className="letters letters-2">Set</span>
              <span className="letters letters-3">Go!</span>
            </h1>
          </div>
        </div>
      )}

      {!loading && !loaded && (
        <CustomScrollbar>
          <div style={{
            backgroundColor: 'black', position: 'absolute', zIndex: '1', overflow: 'hidden'
          }}>
            <BrowserRouter>
              <Header />
              <SeccionA />
              <SeccionB />
              <SeccionC />
              <SeccionD />
              <SeccionE />
              <SeccionF />
              <SeccionG />
              <Footer />
            </BrowserRouter>
          </div>
        </CustomScrollbar>

      )}
    </div>
  );
}

export default App;
