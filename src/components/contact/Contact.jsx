import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_avrsyg3', 'template_1pqkf0l', form.current, 'prhFXNDwM9VK5wKvS')

    e.taget.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>grp_minho@hotmail.com</h5>
            <a href="mailto:grp_minho@hotmail.com" target="_blank">Mande uma mensagem</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Gabriel Reis</h5>
            <a href="https://m.me/gabrielreisssss" target="_blank">Mande uma mensagem</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(71)99375-8072</h5>
            <a href="https://api.whatsapp.com/send?phone=5571993758072" target="_blank">Mande uma mensagem</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu Nome' required />
          <input type="email" name='email' placeholder='Seu Email' required />
          <textarea name="message" placeholder='Escreva sua mensagem...' required rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
        </form> 
      </div>
    </section>
  )
}

export default Contact