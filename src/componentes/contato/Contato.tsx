import './Contato.css'
export default function 
Contato(){
    return (
    <div className='tudo'>
        <form className="contato">

            <h2 className='titulo'>Página de contato!</h2>        

            <p>Nome Completo:</p>
            <input className='digite' type="text" name='nome'></input>

            <p>CPF:</p>
            <input className='digite' type="cpf" name='cpf'></input>

            <p>Email:</p>
            <input className='digite' type="email" name='email'></input>

            <p>Email:</p>
            <input className='digite' type="email" name='email'></input>

            <button className='botao'>Email:</button>
        </form>
    </div>
        
 
    )
}
