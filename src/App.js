import './App.css';
import chaim from './images/chaim.png';
import hermann from './images/hermann.png';
import ubaldo from './images/ubaldo.png'
import pedro from './images/pedro.png';
import alana from './images/alana.png';
import odontoest from './images/odontoest.jpg';
import pizzolotto from './images/pizzolotto.png'
import luisfilipe from './images/luisfilipe.png'
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
      showSchedule: false,
      showAlana: false,
      showPedroAlexandre: false,
      showUbaldo: false,
      showPizzolato: false,
      showLuisFelipe: false,
      showChain: false,
      showHermann: false
    }
  }

  toggleSchedule = () => {
    this.setState({
      showSchedule: !this.state.showSchedule
    });
  }
  // PROFESSORES
  toggleAlana = () => {
    this.setState({
      showAlana: !this.state.showAlana
    });
  }
  togglePedroAlexandre = () => {
    this.setState({
      showPedroAlexandre: !this.state.showPedroAlexandre
    });
  }
  toggleUbaldo = () => {
    this.setState({
      showUbaldo: !this.state.showUbaldo
    });
  }
  togglePizzolato = () => {
    this.setState({
      showPizzolato: !this.state.showPizzolato
    });
  }
  toggleLuisFelipe = () => {
    this.setState({
      showLuisFelipe: !this.state.showLuisFelipe
    });
  }
  toggleChain = () => {
    this.setState({
      showChain: !this.state.showChain
    });
  }
  toggleHermann = () => {
    this.setState({
      showHermann: !this.state.showHermann
    });
  }

  render () {
  return (
  <div className="container">
    <section className="hero">
      <div className="hero_header" id='title'>
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
        <img src={ubaldo} alt="" className='faces'/>
        <h1 className="stats">Leonardo Ubaldo</h1>
        <h4>Professor de Dentística</h4>
        <p>Resinas anteriores e posteriores</p>
      </div>
      <div className="thumbnail">
        <img src={pizzolotto} alt="" className='faces'/>
        <h1 className="stats">Lucas Pizzolo</h1>
        <h4>Professor de Dentística</h4>
        <p>Resinas indiretas posteriores</p>
      </div>
      <div className="thumbnail">
        <img src={luisfilipe} alt="" className='faces'/>
        <h1 className="stats">Luis Antonio Felipe</h1>
        <h4>Professor de Dentística</h4>
        <p>Reabilitação estética e oclusal com resinas</p>
      </div>
      <div className="thumbnail">
        <img src={chaim} alt="" className='faces'/>
        <h1 className="stats">Marcelo Chain</h1>
        <h4>Prof. Ph.D em Biomateriais</h4>
        <p>Desenho do Sorriso</p>
      </div>
      <div className="thumbnail">
        <img src={hermann} alt="" className='faces'/>
        <h1 className="stats">Fábio Hermann</h1>
        <h4>Professor de Dentística (UFRGS)</h4>
        <p>Laminados cerâmicos e lentes de contato</p>
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
        {/* <button className='schedulebutton' onClick={this.toggleSchedule}>{this.state.showSchedule ? 'Esconder Agenda' : 'Mostrar Agenda'}</button>
        {this.state.showSchedule && ( */}
          <div className='schedule-mainframe'>
            <div className='schedule-dayframe'>
              <h1>Sexta (26/Ago)</h1>
              <div className='schedule-card' onClick={this.toggleAlana}>
                <div className='insidebox'>
                <div className='schedule-tag'><p>08:30</p></div>
                <img src={alana} alt="" className='faces'/>
                <span>Harmonização Ortofacial</span>
                </div>
                {this.state.showAlana && <div className='schedule-description'>
                  <div className='schedule-decription-curriculum'>
                    <h3>Prof. Alana Pereira</h3>
                    <ul>
                      <li>Mestre e Doutora em Dentística (UFSC)</li>
                      <li>Professora de Especialização em Dentística e Prótese (UNISOCIESC)</li>
                    </ul>
                  </div>
                  <div className='schedule-description-event'>
                    <p>Irá ministrar palestra acerca de dentística, com ênfase em harmonização ortofacial.</p>
                  </div>
                </div>}
              </div>
              <div className='schedule-card' id='break'>
                <div className='insidebox'>
                <div className='schedule-tag'><p>10:30</p></div>
                <span>Coffee Break</span>
                </div>
              </div>
              <div className='schedule-card' onClick={this.togglePedroAlexandre}>
                <div className='insidebox'>
                <div className='schedule-tag'><p>11:00</p></div>
                <img src={pedro} alt="" className='faces'/>
                <span>Restaurações de Dentes Posteriores e anteriores com sistema adesivo</span>
                </div>
                {this.state.showPedroAlexandre && <div className='schedule-description'>
                  <div className='schedule-decription-curriculum'>
                    <h3>Prof. Pedro Alexandre</h3>
                    <ul>
                      <li>Especialização em Dentística (UFSC)</li>
                      <li>Professor de cursos de especialização em Dentística (IOA-BC, IOA-Criciúma, IOE-Lages)</li>
                    </ul>
                  </div>
                  <div className='schedule-description-event'>
                    <p>Encontro visando capacitar o cirurgião-dentista a realizar e indicar restaurações diretas e semi diretas</p>
                  </div>
                </div>}
              </div>
              <div className='schedule-card' id='break'>
                <div className='insidebox'>
                <div className='schedule-tag'><p>13:45</p></div>
                <span>Almoço</span>
                </div>
              </div>
              <div className='schedule-card' onClick={this.toggleUbaldo}>
                <div className='insidebox'>
                <div className='schedule-tag'><p>14:30</p></div>
                <img src={ubaldo} alt="" className='faces'/>
                <span>Resinas anteriores e posteriores</span>
                </div>
                {this.state.showUbaldo && <div className='schedule-description'>
                  <div className='schedule-decription-curriculum'>
                    <h3>Prof. Leonardo Ubaldo</h3>
                    <ul>
                      <li>Mestre em Odontologia (PUC-MG)</li>
                      <li>Professor e Coordenador de cursos de Aperfeiçoamento em Dentistica</li>
                    </ul>
                  </div>
                  <div className='schedule-description-event'>
                    <p>Palestra sobre a análise de resistência das paredes radiculares de dentes com rizogênse incompleta, com apecificação e restauração utilizando resinas compostas.</p>
                  </div>
                </div>}
              </div>
              <div className='schedule-card' onClick={this.togglePizzolato}>
                <div className='insidebox'>
                <div className='schedule-tag'><p>17:30</p></div>
                <img src={pizzolotto} alt="" className='faces'/>
                <span>Restaurações indiretas com resina composta</span>
                </div>
                {this.state.showPizzolato && <div className='schedule-description'>
                  <div className='schedule-decription-curriculum'>
                    <h3>Prof. Lucas Pizzolo</h3>
                    <ul>
                      <li>Mestre e especialista em Dentística (UNG)</li>
                      <li>Doutorando em Materiais Dentários (UFRGS)</li>
                    </ul>
                  </div>
                  <div className='schedule-description-event'>
                    <p>Irá ministrar palestra abordando as restaurações indiretas com a utilização de resinas compostas.</p>
                  </div>
                </div>}
              </div>
            </div>
            <div className='schedule-dayframe'>
            <h1>Sábado (27/Ago)</h1>
            <div className='schedule-card' onClick={this.toggleLuisFelipe}>
              <div className='insidebox'>
                <div className='schedule-tag'><p>08:00</p></div>
                <img src={luisfilipe} alt="" className='faces'/>
                <span>Reabilitação estética e oclusal com resinas</span>
                </div>
                {this.state.showLuisFelipe && <div className='schedule-description'>
                  <div className='schedule-decription-curriculum'>
                    <h3>Prof. Luis Felipe</h3>
                    <ul>
                      <li>Professor de Dentística em cursos de pós-graduação</li>
                    </ul>
                  </div>
                  <div className='schedule-description-event'>
                    <p>Palestra acerca de reabilitação estética e oclusal com resinas</p>
                  </div>
                </div>}
              </div>
              <div className='schedule-card' id='break'>
                <div className='insidebox'>
                <div className='schedule-tag'><p>11:00</p></div>
                <span>Coffee Break</span>
                </div>
              </div>
            <div className='schedule-card' onClick={this.toggleHermann}>
              <div className='insidebox'>
                <div className='schedule-tag'><p>11:30</p></div>
                <img src={hermann} alt="" className='faces'/>
                <span>Facetas laminadas - Resinas composta e cerâmica</span>
                </div>
                {this.state.showHermann && <div className='schedule-description'>
                  <div className='schedule-decription-curriculum'>
                    <h3>Prof. Fabio Hermann</h3>
                    <ul>
                      <li>PhD em Dentística (UFPel)</li>
                      <li>Professor de Dentística (UFRGS)</li>
                    </ul>
                  </div>
                  <div className='schedule-description-event'>
                    <p>Irá ministrar palestra acerca de facetas laminadas, resinas compostas e cerâmicas, lentes de contato, abordando suas técnicas de preparo e análise estética.</p>
                  </div>
                </div>}
              </div>
              <div className='schedule-card' id='break'>
                <div className='insidebox'>
                <div className='schedule-tag'><p>13:30</p></div>
                <span>Almoço</span>
                </div>
              </div>
            <div className='schedule-card' onClick={this.toggleChain}>
              <div className='insidebox'>
                <div className='schedule-tag'><p>14:00</p></div>
                <img src={chaim} alt="" className='faces'/>
                <span>Pinos Radiculares</span>
                </div>
                {this.state.showChain && <div className='schedule-description'>
                  <div className='schedule-decription-curriculum'>
                    <h3>Prof. Marcelo Chaim</h3>
                    <ul>
                      <li>PhD em Biomateriais (Alabama Univ. - EUA)</li>
                      <li>Autor, professor e pesquisador em Dentística</li>
                    </ul>
                  </div>
                  <div className='schedule-description-event'>
                    <p>Irá ministrar palestra acerca de pinos radiculares e restauração</p>
                  </div>
                </div>}
              </div>
              <div className='schedule-card' id='break'>
                <div className='insidebox'>
                <div className='schedule-tag'><p>17:00</p></div>
                <span>Encerramento</span>
                </div>
              </div>
            </div>
          </div>
        {/*) } */}
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
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSc9WgJ9MtyctbAq3xRdBCxAx3NjhRUGA3Bcqa3o8mvvsPcVvg/viewform?usp=sf_link' target="_blank" rel='noreferrer'><div className="button">INSCREVER-SE</div></a>
    </section>
    <div className="copyright">&copy;2022- <strong>Feito por <a href='https://github.com/valmojr' target="_blank" rel='noreferrer'>Valmo Trindade</a></strong></div>
  </div>
  );
  }
}

export default App;