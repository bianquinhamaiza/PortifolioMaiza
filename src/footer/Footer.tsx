import './Footer.css'
import Logo from '../assets/logo.mb.png'


function Footer(){
    return(
        <footer>
      <div id='footer_content'>
        <div id='footer_contats'>
        <img className='logo2' src={Logo} alt="" />
                  </div>
      
      
          <ul className="footer-list">
            <li>
            <h3>Sobre Mim</h3>
            </li>
            <li>
            <a href="#" className="footer-link">Características</a>
            </li>
            <li>
            <a href="#" className="footer-link">Gostos</a>
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
            <a href="#" className="footer-link">Filmes Favoritos</a>
            </li>
            <li>
            <a href="#" className="footer-link">Acessórios</a>
            </li>
             <li>
            <a href="#" className="footer-link">Roupas</a>
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