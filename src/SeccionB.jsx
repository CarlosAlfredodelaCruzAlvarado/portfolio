import './css/SeccionB.css';
import imgSeparador from ".//img/imgSeparador.png"

function SeccionB() {
  return (
    <div className="seccionB">
      <div className='descripcion'>
        <h1 className='SBh1'>!Hola y bienvenido a mi Universo Digital!</h1>
        <h2 className='SBh2'>"Soy un apasionado del diseño web que adora crear experiencias atractivas y funcionales. Me encanta aprender y mejorar constantemente. Estoy entusiasmado por crear y contribuir en proyectos web innovadores."</h2>
      </div>
      <div className='imgSeparador'>
        <img src={imgSeparador} />
      </div>
    </div>
  );
}
export default SeccionB;