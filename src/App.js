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
        <h1 className="stats">Alana Pereira</h1>
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
      <div className="thumbnail_main">
        <img src={chaim} alt="" className='faces_main'/>
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
        <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315333.9778843149!2d-51.8549366597133!3d-29.165227495526832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c392c8848eb97%3A0x20dbb6297dd57a9d!2sVin%C3%ADcola%20Vinhedos%20Capoani%20-%20Vinhos%20e%20Espumantes!5e0!3m2!1spt-BR!2sbr!4v1654481993637!5m2!1spt-BR!2sbr" width="80%" height="300px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>A vinícola Capoani está localizada na região da Serra Gaúcha, mais precisamente no Vale dos Vinhedos, onde contribui com o enoturismo de Bento Gonçalves e região, com atendimento de excelência e experiências memoráveis no mundo dos vinhos e espumantes.</p>
      </article>
    </footer>
    <section className="footer_banner" id="contact">
      <h2 className="hidden">Teste</h2>
      <p className="hero_header">NÃO PERCA!</p>
      <div className="button">INSCREVER-SE</div>
    </section>
    <div className="copyright">&copy;2022- <strong>Feito por <a href='https://github.com/valmojr' target="_blank">Valmo Trindade</a></strong></div>
  </div>
  );
}

export default App;
