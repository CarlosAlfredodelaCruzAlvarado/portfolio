import './css/SeccionF.css';
import imgMiFoto from ".//img/programador.png";

function SeccionF() {
  return (
    <div className="SeccionF">
      <div className='seccionTitulo'>
        <h1 className='SFh1'> Más sobre mí</h1>
      </div>
      <div className='descripcion'>
        <div className='intereses'></div>
        <h1 className='SFh1'>Pasiones e intereses</h1>
        <h2 className='SFh2'>Soy un apasionado de la tecnología, el anime y el manga. Disfruto de las películas de terror, explorar el vasto mundo de los videojuegos (especialmente los juegos retro) y, cuando el antojo llega, me gusta al hornear deliciosos postres. Mi fascinación por Japón se refleja en mi amor por su cultura y lengua, y mi objetivo es poder vivir allí en algún punto de mi vida. Mi playlist está repleto de metal y synthwave;  Evangelion y Dark Souls 1 ocupan un lugar especial en mi corazón, y siempre estoy ansioso por tener nuevas aventuras.</h2>
        <div className='experiencia'></div>
        <h1 className='SFh1'>Experiencia Profesional y Educativa</h1>
        <h2 className='SFh2'>Con una licenciatura en Química y certificación en enseñanza de idiomas, he tenido una carrera diversa. Desde trabajar en ventas de publicidad y postres hasta desempeñarme como químico clínico y analista químico de la rama farmacéutica, mi trayectoria abarca roles fascinantes. Además, he compartido mi pasión por los idiomas como profesor de inglés.</h2>
        <div className='valores'></div>
        <h1 className='SFh1'>Valores y Filosofía de Vida</h1>
        <h2 className='SFh2'>La integridad, el trabajo en equipo y el equilibrio entre trabajo y vida personal son fundamentales para mí. Abrazo la autenticidad en todo lo que hago. Siempre estoy listo para nuevas aventuras y experiencias.</h2>
        <div className='mensaje'></div>
        <h1 className='SFh1'>Mensaje a los Visitantes</h1>
        <h2 className='SFh2'>Mi deseo es colaborar en proyectos que generen un impacto real. Espero que nuestras conversaciones sean memorables y que pueda inspirar a aquellos que deseen conocer mi historia. ¡Vamos juntos en esta emocionante travesía!</h2>
      </div>
      <div className='img'><img className='miFoto' src={imgMiFoto}></img></div>
    </div>
  );
}
export default SeccionF;