import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>GABRIEL REIS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfoil">Portfólio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/gabrielreisdev" target="_blank" ><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; style. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer