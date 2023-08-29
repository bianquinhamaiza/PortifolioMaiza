import './Footer.css'
import Logo from '../assets/logo.mb.png'


function Footer(){
    return(
        <footer>
      <div id='footer_content'>
        <div id='footer_contats'>
        <img src={Logo} alt="" />
                  </div>
      
      
          <ul className="footer-list">
            <li>
            <h3>Sobre a Barbie</h3>
            </li>
            <li>
            <a href="#" className="footer-link">Quais suas profissões?</a>
            </li>
            <li>
            <a href="#" className="footer-link">História da Barbie</a>
            </li>
            <li>
            <a href="#" className="footer-link">Curiosidades</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
            <h3>Menu</h3>
            </li>
            <li>
            <a href="#" className="footer-link">Filmes</a>
            </li>
            <li>
            <a href="#" className="footer-link">Acessórios</a>
            </li>
             <li>
            <a href="#" className="footer-link">Bonecas</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
            <h3>Suporte</h3>
            </li>
            <li>
            <a href="#" className="footer-link">Ajuda</a>
            </li>
            <li>
            <a href="#" className="footer-link">Recursos</a>
            </li>
             <li>
            <a href="#" className="footer-link">Fale conosco</a>
            </li>
          </ul>
</div>
    </footer>
    )
}
export default Footer