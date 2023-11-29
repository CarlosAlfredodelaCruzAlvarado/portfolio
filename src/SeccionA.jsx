import './css/SeccionA.css';
import imgProgramador from ".//img/programador.png";

function SeccionA() {
  return (
    <div className="SeccionA" id='home'>
      <div className='descripcion'>
        <h1>Programador Front-End Jr.</h1>
        <h2>"Donde la creatividad y la tecnología se encuentran"</h2>
      </div>
      <div className='imgProgramador'>
        <img src={imgProgramador} />
      </div>
    </div>
  );
}
export default SeccionA;
