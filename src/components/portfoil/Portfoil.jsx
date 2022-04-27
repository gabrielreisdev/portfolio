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
    image: IMG3,
    title: 'Tailwind Project',
    github: 'https://github.com/gabrielreisdev/tailwind-project',
    demo: 'https://tailwind-project-gamma.vercel.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Em breve!',
    github: 'https://github.com/gabrielreisdev',
    demo: 'https://github.com/gabrielreisdev'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Em breve!',
    github: 'https://github.com/gabrielreisdev',
    demo: 'https://github.com/gabrielreisdev'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Em breve!',
    github: 'https://github.com/gabrielreisdev',
    demo: 'https://github.com/gabrielreisdev'
  }


]

const Portfoil = () => {
  return (
    <section id='portfoil'>
      <h5>Projetos Recentes</h5>
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
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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