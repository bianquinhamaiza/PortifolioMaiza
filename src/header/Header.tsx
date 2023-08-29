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
                    <li><a href="#">Tere</a></li>
                    <li><a href="#">Careca</a></li>
                    <li><a href="#">Pobre</a></li>
                    <li><a href="#">Coitado</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header