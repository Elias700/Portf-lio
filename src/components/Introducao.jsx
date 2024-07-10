

import React from 'react'
import './Introducao.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Introducao = ({ img, img2, img3,img4, img5 }) => {

    return (

        <div>

            <header>
                <div className='cabeçalho'>
                    <ul>
                        <div className="logo">
                            <span>Elias Ribeiro</span>
                        </div>
                        <li>Início</li>
                        <li>Sobre</li>
                        <li>Habilidades</li>
                        <li>Projetos</li>
                        <li>Contato</li>
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
                <p style={{ color: 'white' }}> <span className='title1'>Sobre</span> <hr className='linha1' /> <br /> <br /> Estou cursando o segundo semestre de Analise e Desenvolvimento <br /> de Sistemas pela Fundação Visconde de Cairu.
                    Domino as seguintes <br /> tecnologias, HTML, css, javascript, react, git e GitHub. Tenho <br /> interesse em atuar na área
                    de desenvolvimento Web e desejo <br /> ter minha primeira
                    experiência em estágio.
                </p>
                <img src={img2} className='imagemElias' alt="" />
            </div>


            <div className="habilidades">
                <h2 className='title2'>Habilidades</h2>
                <div className="icons">
                    <FaHtml5 className='html'/>
                    <FaCss3Alt className='css'/>
                    <DiJavascript className='javascript'/>
                    <FaReact className='react'/>
                    <FaGitAlt className='git'/>
                    <IoLogoGithub className='github'/>
                </div>
            </div>


           <div className="background">
                <h2 className='title3'>Projetos</h2>
                    <div className="ajusteProjeto1">
                        <img className='img1' src={img3} alt="" />
                        <h3 className='subtitle'> Site do Marvel</h3>
                    </div>
                    

                <div className="ajusteProjeto2">
                    <h3 className='subtitle2'>Lista de Tarefas</h3>
                    <img className='img2' src={img5} alt="" />
                </div>

                <div className='ajusteProjeto3'>
                    <img className='img3' src={img4} alt="" />
                    <h3 className='subtitle3'>Site Batman</h3>
                </div>
           </div>

           <div className="contato">
                <h3 className='title4'>Contato</h3>
                <span className='email'>elias_ribeiro07@outlook.com.br</span>
                <span className='numero'>71 98423-1897</span>
                    <div className="icons1">
                        <FaWhatsapp className='icoins'/>
                        <FaLinkedin className='icoins'/>
                        <IoLogoGithub className='icoins'/>
                        <FaInstagram className='icoins'/>
                    </div>
                    <span className='final'>© 2024 Elias Ribeiro. Todos os direitos reservados.</span>
           </div>

        </div>
    )
}

export default Introducao
