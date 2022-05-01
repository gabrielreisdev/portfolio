import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de Interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Prototipação e microinterações.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Necessidades do usuário.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Usabilidade e design responsivo.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Figma/AdobeXD e Photoshop/Illustrator.</p>
            </li>

            {/* END OF UX */}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de Sites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sites Responsivos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Landing Pages.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sistemas.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Banco de Dados.</p>
            </li>

            {/* END OF DEV */}
          </ul>
        </article>

        {/* <article className="service">
          <div className="service__head">
            <h3>Criação de Conteúdo</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            
          </ul>
        </article> */}
      </div>
    </section>
  )
}

export default Services