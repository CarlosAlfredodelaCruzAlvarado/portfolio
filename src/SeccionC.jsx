import './css/SeccionC.css';
import imghtml from ".//img/html.png";
import imgcss from ".//img/css.png";
import imgreact from ".//img/react.png";
import imgjs from ".//img/js.png";
import imgpython from ".//img/python.png";
import imgmysql from ".//img/mysql.png";
import imgfigma from ".//img/figma.png";
import imgchatgpt from ".//img/chatgpt.png";

function SeccionC() {
    return (
        <div className='seccionC'>
            <div className='tituloSeccion'>
                <h1>Lenguajes y herramientas</h1>
            </div>
            <div className="subSeccionC">
                <div className="subSeccionCFlex">
                    <img src={imghtml} alt="HTML5" />
                    <h1>HTML</h1>
                </div>
                <div className="subSeccionCFlex">
                    <img src={imgcss} alt="CSS" />
                    <h1>CSS</h1>
                </div>
                <div className="subSeccionCFlex">
                    <img src={imgreact} alt="React" />
                    <h1>React</h1>
                </div>
                <div className="subSeccionCFlex">
                    <img src={imgjs} alt="JavaScript" />
                    <h1>JavaScript</h1>
                </div>
                <div className="subSeccionCFlex">
                    <img src={imgpython} alt="Python" />
                    <h1>Python</h1>
                </div>
                <div className="subSeccionCFlex">
                    <img src={imgmysql} alt="MySQL" />
                    <h1>MySQL</h1>
                </div>
                <div className="subSeccionCFlex">
                    <img src={imgfigma} alt="Figma" />
                    <h1>Figma</h1>
                </div>
                <div className="subSeccionCFlex">
                    <img src={imgchatgpt} alt="ChatGPT" />
                    <h1>ChatGPT</h1>
                </div>
                {/* <div className="subSeccionCFlex">
            <img src={imgMiFoto} alt="" />
            <h1></h1>
            </div> */}
            </div>
        </div>
    );
}
export default SeccionC;