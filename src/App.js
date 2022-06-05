import './App.css';
import chaim from './images/chaim.png';
import voss from './images/voss.png';
import reginatto from './images/reginatto.png';
import pedro from './images/pedro.png';
import alana from './images/alana.png';
import odontoest from './images/odontoest.jpg';
import serragaucha from './images/serragaucha.jfif';

function App() {
  return (
  <div className="container">
    <section className="hero" id="hero">
      <div className="hero_header">
      <h3>CURSO DE</h3>
      <h1>ODONTOLOGIA ESTÉTICA</h1>
      <h3>NO VALE DOS VINHEDOS</h3>
      <p className="tagline">29 e 30 de Julho de 2022</p>
      </div>
    </section>
    <section className="about" id="about">
      <h2 className="hidden">About</h2>
      <p className="text_column">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      <p className="text_column">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      <p className="text_column">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </section>
    <div className="gallery">
      <div className="thumbnail">
        <img src={alana} alt="" className='faces'/>
        <h1 className="stats">ALANA PEREIRA</h1>
        <h4>Prof. Dra.</h4>
        <p>Facetas, Resina e Cerâmica</p>
      </div>
      <div className="thumbnail">
        <img src={pedro} alt="" className='faces'/>
        <h1 className="stats">Pedro Alexandre</h1>
        <h4>Professor Titular da UFSC</h4>
        <p>Restaurações de dentes anteriores e posteriores</p><p>por sistema adesivo</p>
      </div>
      <div className="thumbnail">
        <img src={voss} alt="" className='faces'/>
        <h1 className="stats">Renato Voss</h1>
        <h4>Especialista em Dentística Restauradora</h4>
        <p>Resina composta em Dentes posteriores</p>
      </div>
      <div className="thumbnail">
        <img src={reginatto} alt="" className='faces'/>
        <h1 className="stats">Orlando Reginatto</h1>
        <h4>Professor Titular da UFSC</h4>
        <p>Restaurações de Dentes anteriores</p>
      </div>
      <div className="thumbnail">
        <img src={chaim} alt="" className='faces'/>
        <h1 className="stats">Marcelo Chaim</h1>
        <h4>Professor Titular da UFSC</h4>
        <p>Desenho do Sorriso</p>
      </div>
    </div>
    <section className="banner">
      <h2 className="parallax">O VALE DOS VINHEDOS</h2>
      <p className="parallax_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    </section>
    <footer>
      <article className="footer_column">
        <h3>SOBRE O EVENTO</h3>
        <img src={odontoest} alt="" className="cards"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla </p>
      </article>
      <article className="footer_column">
        <h3>LOCALIZAÇÃO</h3>
        <img src={serragaucha} alt="" className="cards"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla </p>
      </article>
    </footer>
    <section className="footer_banner" id="contact">
      <h2 className="hidden">Teste</h2>
      <p className="hero_header">NÃO PERCA!</p>
      <div className="button">INSCREVER-SE</div>
    </section>
    <div className="copyright">&copy;2022- <strong>Feito por Valmo Trindade</strong></div>
  </div>
  );
}

export default App;
