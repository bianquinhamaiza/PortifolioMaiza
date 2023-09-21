import './Main.css'
import Logo from '../assets/fotoportifolio.jpg'
function Main(){
    return(
        <main>
            <div className='tudo'>
           <div>
            <h3 className='texto1'> Oi, eu sou a Maíza Bianca. Estou no terceiro ano do Ensino Médio e estudo no IFMS campus - Naviraí. Gosto de muito de gatos, viajar  e dormir.</h3>
           </div>
           <div className='foto'>
           <img className='fotoportifolio' src={Logo} alt="" />
           </div>
           </div>
        </main>
    )
}
export default Main