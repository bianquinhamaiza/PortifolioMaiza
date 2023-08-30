import './Header.css'
import Logo from '../assets/logo.bianca.png'
function Header(){
    return(
        <header>
            <div className='logoheader'>
            <img className='logo1' src={Logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Trabalhos</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Ajuda</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header