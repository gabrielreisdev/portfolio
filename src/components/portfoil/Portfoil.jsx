import React from 'react'
import './Portfoil.css'
import IMG1 from'../../assets/portfolio1.jpg'
import IMG2 from'../../assets/portfolio2.jpg'
import IMG3 from'../../assets/portfolio3.jpg'
import IMG4 from'../../assets/portfolio4.jpg'
import IMG5 from'../../assets/portfolio5.jpg'
import IMG6 from'../../assets/portfolio6.jpg'


const data = [

  {
    id: 1,
    image: IMG1,
    title: 'HPraxedes',
    demo: 'https://hpraxedes.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Gericht Restaurant',
    github: 'https://github.com/gabrielreisdev/gericht-restaurant',
    demo: 'https://gericht-restaurant-one.vercel.app'
  },
  {
    id: 3,
    image: IMG5,
    title: 'Modern Website UI/UX em React',
    github: 'https://github.com/gabrielreisdev/GPT-3' ,
    demo: 'https://gpt-3-nine.vercel.app'
  },
  {
    id: 4,
    image: IMG3,
    title: 'Projeto Tailwind',
    github: 'https://github.com/gabrielreisdev/tailwind-project',
    demo: 'https://tailwind-project-gamma.vercel.app'
  },
  {
    id: 5,
    image: IMG4,
    title: 'Projeto UI/UX',
    demo: 'https://www.figma.com/file/5AvCQQpc1GNm6FExAc0MOJ/Food?node-id=0%3A1'
  }
  

]

const Portfoil = () => {
  return (
    <section id='portfoil'>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=> {
            return(
          <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {github && <a style={{color: 'var(--color-white)'}} href={github} className='btn' target='_blank'>Github</a> }
                <a href={demo} className='btn btn-primary' target='_blank'>Abrir Site</a>
                </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfoil