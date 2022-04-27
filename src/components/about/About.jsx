import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>

      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experiência</h5> 
                <small>2+ anos de experiência</small>
            </article>
            <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clientes</h5> 
                <small>5+ clientes</small>
            </article>
            <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projetos</h5> 
                <small>5+ projetos finalizados</small>
            </article>
          </div>
          <p>Meu nome é Gabriel, tenho 24 anos, estou finalizando o bacharelado em Ciência da Computação pela UNIFACS e busco uma vaga no mercado onde possa
colocar minhas habilidades em prática e
colaborar com equipes de trabalho, tendo o
crescimento da organização e o
desenvolvimento pessoal e profissional
como focos principais</p>
          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About