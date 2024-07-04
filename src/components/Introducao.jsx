

import React from 'react'
import './Introducao.css'

const Introducao = ({img, img2}) => {

  return (

    <div>

        <header>
            <div className='cabeçalho'>
                <ul>
                <div className="logo">
                        <span>Elias Ribeiro</span>
                    </div>
                    <li>Sobre mim</li>
                    <li>Projetos</li>
                    <li>Contatos</li>
                </ul>
            </div>
        </header>

        <hr />

        <div className="ajuste">
            <img id='foto1' src={img} alt="Foto de Elias" />
           <div className="ajust2">
                <h1>Elias Ribeiro</h1>
                <h2>Desenvolvedor Front-end</h2>
                <button className='botao'>Currículo</button>
           </div>
        </div>

        

        

        <div className="sobremim">
            
            <p style={{color: 'white'}}> <span className='title1'>Sobre mim</span> <hr className='linha1'/> <br /> <br /> Estou cursando o segundo semestre de Analise e Desenvolvimento <br /> de Sistemas pela Fundação Visconde de Cairu. 
            Domino as seguintes <br /> tecnologias, HTML, css, javascript, react, git e GitHub. Tenho <br /> interesse em atuar na área
            de desenvolvimento Web e desejo <br /> ter minha primeira 
            experiência em estágio.
            </p>
            <img src={img2} className='img2' alt="" />

        </div>

    </div>
  )
}

export default Introducao
