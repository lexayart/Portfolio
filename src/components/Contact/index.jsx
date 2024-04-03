import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import arrow from './../../assets/img/arrow.png'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_vqc4yny', 'template_qctkuns', form.current, {
        publicKey: 'OluVuvBI7Bv8E7RBp',
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
    document.contact.reset()
  }

  return (
    <div id="contact" className="contact">
      <div className="contact_caption">
        <h2>Et si on se rencontrait&nbsp;?</h2>
        <p>
          Que ce soit pour un emploi, un projet ou autre, n’hésitez pas à
          m’envoyer un message pour en parler !
        </p>
      </div>
      <form
        onSubmit={sendEmail}
        name="contact"
        className="contact_form"
        ref={form}
      >
        <input
          className="contact_form_input"
          type="text"
          name="name"
          placeholder="Votre nom"
        />
        <input
          className="contact_form_input"
          type="email"
          name="email"
          placeholder="Votre mail"
        />
        <input
          className="contact_form_input"
          type="text"
          name="object"
          placeholder="L'objet de votre message"
        />
        <textarea
          className="contact_form_input"
          type="text"
          name="message"
          placeholder="Votre message"
        ></textarea>
        <button type="submit">
          <p>Envoyer</p>
          <img src={arrow} alt="flèche" />
        </button>
      </form>
    </div>
  )
}

export default Contact
