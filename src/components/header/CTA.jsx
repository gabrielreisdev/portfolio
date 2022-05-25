import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a style={{border: '1px solid var(--color-primary)'}} href={CV} download className='btn'>Baixar CV</a>
        <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
    </div>
  )
}

export default CTA