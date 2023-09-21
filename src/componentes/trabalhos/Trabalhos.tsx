import { useState } from "react";
import './Trabalhos.css'
import Trabalho from "../trabalho/Trabalho";
type TrabalhosType = {
    id: number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Trabalhos(){
    const [texto,setTexto] = useState("")

    const trabalhos:TrabalhosType[] = [
        {
            id:1,
            titulo:"Projeto Física",
            sinopse:"O objetivo geral do projeto é analisar o fator de conversão entre irradiância e densidade de fluxo de fótons para estimar a Radiação Fotossinteticamente Ativa.",
            imagem:"/fisica.jpg"
        },
        {
            id:2,
            titulo:"Projeto CCM",
            sinopse:"O projeto de Extensão Manifestações da Cultura Corporal de Movimento foi desenvolvido presencialmente para e com estudantes do IFMS, por meio de palestras e vivências. Clique para ver os projetos!",
            imagem:"/ccm.jpg"
        },
        {
            id:3,
            titulo:"FECINAVI",
            sinopse:"O IFMS, promove as Feiras de Ciência e Tecnologia para a apresentação de trabalhos dos alunos. Os eventos fazem parte da programação da Semana de Ciência e Tecnologia. Clique para ver meu projeto!            ",
            imagem:"/fecinavi.png"
        },
        {
            id:4,
            titulo:"Visita Técnica",
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:"/foz.jpg"
        }

    ]
    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                
                <h2>Pesquisar Trabalhos</h2>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'> {texto}</p>
                </div>
            </div>
            <main className="content-main">
            {trabalhos.filter((trabalho)=>trabalho.titulo.toLowerCase().includes(texto.toLowerCase()))
            .map(
                
                    (trabalho:TrabalhosType)=>
                    <Trabalho key={trabalho.id} 
                           titulo={trabalho.titulo} 
                           sinopse={trabalho.sinopse} 
                           imagem={trabalho.imagem}
                    />
                )
                }
            </main>
        </>
    )
}