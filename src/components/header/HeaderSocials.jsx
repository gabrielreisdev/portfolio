import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a style={{color:'var(--color-bg-variant'}} href="https://www.linkedin.com/in/gabrielreistldev/" target="_blank"><BsLinkedin/></a>
        <a style={{color:'var(--color-bg-variant'}} href="https://github.com/gabrielreisdev" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials