import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

const Header = () => {
  return (
  <header>
    <div className="container header__container">
      <h5>Olá, eu sou</h5>
      <h1>Gabriel Reis</h1>
      <h5 className="text-light">Desenvolvedor Front-End</h5>
      <CTA/>
      <HeaderSocials/> 

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'><MdOutlineArrowForwardIos/></a>

    </div>
  </header>
  )
}

export default Header