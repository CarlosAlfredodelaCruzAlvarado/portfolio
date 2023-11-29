import './css/SeccionE.css';
import imggithub from ".//img/github.png";
import imgvercell from ".//img/vercell.png";
import imglinkedin from ".//img/linkedin.png";
import imginstagram from ".//img/instagram.png";
import imgx from ".//img/x.png";
import imgtiktok from ".//img/tiktok.png";
import imgyoutube from ".//img/youtube.png";
import imgpersonal from ".//img/icon.png";
import imgemail from ".//img/email.png";

function SeccionE() {
  return (
    <div className='seccionE' id='contacto'>
      <div className='seccionTitulo'>
        <h1 className='SEh1'> Conecta conmigo</h1>
      </div>
      <div className='subSeccionETitulo'>
        <h2>En el ciberespacio de posibilidades infinitas. </h2>
        <h2>¿Estás listo/a para trascender las fronteras convencionales? </h2>
        <h3>¡Conéctate conmigo!</h3>
      </div>
      <div className="subSeccionE">
        <div className='subSeccionEIzq'>
          <a className='subSeccionEFlex' target='_blank' href='https://github.com/CarlosAlfredodelaCruzAlvarado'>
            <div className='box glowing'>
              <img src={imggithub} alt="GitHub" />
              <h1>GitHub</h1>
            </div>
          </a>

          <a className='subSeccionEFlex' target='_blank' href='https://vercel.com/carlosalfredodelacruzalvarado'>
            <div className='box glowing'>
              <img src={imgvercell} alt="Vercell" />
              <h1>Vercell</h1>
            </div>
          </a>
        </div>
        <div className='subSeccionEDer'>
          <a className='subSeccionEFlex' target='_blank' href='https://www.linkedin.com/in/carlosdelacruz92/'>
            <div className='box glowing'>
              <img src={imglinkedin} alt="LinkedIn" />
              <h1>LinkedIn</h1>
            </div>
          </a>
          <a className='subSeccionEFlex' target='_blank' href='https://www.instagram.com/c.cruz.92.a/'>
            <div className='box glowing'>
              <img src={imginstagram} alt="Instagram" />
              <h1>Instagram</h1>
            </div>
          </a>
          <a className='subSeccionEFlex' target='_blank' href='https://twitter.com/Carlosd58150072/'>
            <div className='box glowing'>
              <img src={imgx} alt="X" />
              <h1>X</h1>
            </div>
          </a>
          <a className='subSeccionEFlex' target='_blank' href='https://www.tiktok.com/@carlosdelacruz2784'>
            <div className='box glowing'>
              <img src={imgtiktok} alt="TikTok" />
              <h1>TikTok</h1>
            </div>
          </a>
          <a className='subSeccionEFlex' target='_blank' href='https://www.youtube.com/channel/UCM_S0pKL6L9zFdaaPe5ad-Q'>
            <div className='box glowing'>
              <img src={imgyoutube} alt="YouTube" />
              <h1>YouTube</h1>
            </div>
          </a>
          <a className='subSeccionEFlex' target='_blank' href='https://github.com/CarlosAlfredodelaCruzAlvarado'>
            <div className='box glowing'>
              <img src={imgpersonal} alt="Web Personal" />
              <h1>Web Personal</h1>
            </div>
          </a>
        </div>
        <div className='subSeccionEBot '>
          <a className='subSeccionEFlex' target='_blank' href='mailto:c.cruz.92.a@gmail.com'>
            <div className="box glowing">
              <img src={imgemail} alt="Email" />
              <h1>Email</h1>
            </div>
          </a>
        </div>
        {/* <div className="subSeccionEFlex">
            <img src={imgMiFoto} alt="" />
            <h1></h1>
        </div> */}

      </div>
    </div>
  );
}
export default SeccionE;