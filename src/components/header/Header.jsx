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
      <h4>Olá, eu sou</h4>
      <h1>Gabriel Reis</h1>
      <h4>Desenvolvedor Front-End</h4>
      <CTA/>
      <HeaderSocials/> 

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a style={{color:'var(--color-bg-variant'}}href="#contact" className='scroll__down'><MdOutlineArrowForwardIos/></a>

    </div>
  </header>
  )
}

export default Header