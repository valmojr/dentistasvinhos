import './App.css';
import chaim from './images/chaim.png';
import voss from './images/voss.png';
import reginatto from './images/reginatto.png';
import pedro from './images/pedro.png';
import alana from './images/alana.png';
import odontoest from './images/odontoest.jpg';
import FGM from './images/fgm.png';
import SDI from './images/sdi.jpg';
import VOCO from './images/Voco.png';
import BioArt from './images/bioart.png';
import CasadoDentista from './images/casadodentista.png';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSchedule: false
    }
  }

  toggleSchedule = () => {
    this.setState({
      showSchedule: !this.state.showSchedule
    });
  }

  render () {
  return (
  <div className="container">
    <section className="hero" id="hero">
      <div className="hero_header">
      <h2>MEETING</h2>
      <h1>ODONTOLOGIA ESTÉTICA</h1>
      <h2>NO VALE DOS VINHEDOS</h2>
      <p className="tagline">26 e 27 de Agosto de 2022</p>
      </div>
    </section>
    <div className="gallery">
      <div className="thumbnail">
        <img src={alana} alt="" className='faces'/>
        <h1 className="stats">Alana Pereira</h1>
        <h4>Dra. e palestrante em Dentística</h4>
        <p>Dentística com ênfase em HOF</p>
      </div>
      <div className="thumbnail">
        <img src={pedro} alt="" className='faces'/>
        <h1 className="stats">Pedro Alexandre</h1>
        <h4>Especialista em Dentística</h4>
        <p>Restaurações de dentes anteriores e posteriores e sistemas adesivos</p>
      </div>
      <div className="thumbnail">
        <img src={voss} alt="" className='faces'/>
        <h1 className="stats">Fábio Hermann</h1>
        <h4>Professor de Dentística da UFRGS</h4>
        <p>Laminados cerâmicos e lentes de contato</p>
      </div>
      <div className="thumbnail">
        <img src={reginatto} alt="" className='faces'/>
        <h1 className="stats">Orlando Reginatto</h1>
        <h4>Professor de Dentística</h4>
        <p>Integração Orto estética</p>
      </div>
      <div className="thumbnail_main">
        <img src={chaim} alt="" className='faces_main'/>
        <h1 className="stats">Marcelo Chain</h1>
        <h4>Prof. Ph.D em Biomateriais</h4>
        <p>Desenho do Sorriso</p>
      </div>
    </div>
    <section className="banner">
      <h2 className="parallax">O VALE DOS VINHEDOS</h2>
      <p className="parallax_description">Assim denominado pelos vales cobertos de parreirais e paisagens apaixonantes de diferentes tonalidades nas quatro estações do ano, encanta pela hospitalidade de seus moradores em harmonia com a alta tecnologia e infraestrutura turística de qualidade.</p>
    </section>
    <footer>
      <article className="footer_column">
        <h3>SOBRE O EVENTO</h3>
        <img src={odontoest} alt="" className="cards"/>
        <p>Uma oportunidade única de estar entre grandes nomes da odontologia, em um lugar magnífico, que junta a natureza, boa comida e vinhos maravilhosos, e poder ainda aprender sobre essa maravilha que é a odontologia estética atual. Serão dias intensos de muito conhecimento, troca de experiências e contatos através de muito aprendizado.</p>
      </article>
      <article className="footer_column">
        <h3>LOCALIZAÇÃO</h3>
        <iframe title='google-maps' className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315333.9778843149!2d-51.8549366597133!3d-29.165227495526832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c392c8848eb97%3A0x20dbb6297dd57a9d!2sVin%C3%ADcola%20Vinhedos%20Capoani%20-%20Vinhos%20e%20Espumantes!5e0!3m2!1spt-BR!2sbr!4v1654481993637!5m2!1spt-BR!2sbr" width="80%" height="300px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>A vinícola Capoani está localizada na região da Serra Gaúcha, mais precisamente no Vale dos Vinhedos, onde contribui com o enoturismo de Bento Gonçalves e região, com atendimento de excelência e experiências memoráveis no mundo dos vinhos e espumantes.</p>
      </article>
    </footer>
    <div className="schedule-bigframe">
        <button className='schedulebutton' onClick={this.toggleSchedule}>{this.state.showSchedule ? 'Esconder Agenda' : 'Mostrar Agenda'}</button>
        {this.state.showSchedule && (<div className="schedule-mainframe"><h1>TESTE</h1></div>)}
    </div>
    <div className="partners">
       <img src={FGM} alt="" className="partner-logo"/>
       <img src={SDI} alt="" className="partner-logo"/>
       <img src={VOCO} alt="" className="partner-logo"/>
       <img src={BioArt} alt="" className="partner-logo"/>
       <img src={CasadoDentista} alt="" className="partner-logo"/>
    </div>
    <section className="footer_banner" id="contact">
      <h2 className="hero_header">Valor do Investimento:</h2>
      <h2 className="hero_header">3x R$325,00</h2>
      <p className="hero_header">NÃO PERCA!</p>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSc9WgJ9MtyctbAq3xRdBCxAx3NjhRUGA3Bcqa3o8mvvsPcVvg/viewform?usp=sf_link' target="_blank"><div className="button">INSCREVER-SE</div></a>
    </section>
    <div className="copyright">&copy;2022- <strong>Feito por <a href='https://github.com/valmojr' target="_blank">Valmo Trindade</a></strong></div>
  </div>
  );
  }
}

export default App;
