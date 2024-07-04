

import React from 'react'
import './Introducao.css'

const Introducao = ({img}) => {

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
    </div>
  )
}

export default Introducao
