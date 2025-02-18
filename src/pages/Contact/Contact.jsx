import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <img className="contactImg" src="/img/contactMe.png" height="150" width="150"/>
      <h1 className="contactHeader">Contact Me</h1>
      <hr className="contactDivider" />
      <div className="iconsContainer">
        <div className="emailContainer">
          <i className="topIcon fa-solid fa-envelope"></i>
          <p>mingerson6147@gmail.com</p>
        </div>
        <div className="linkedinContainer">
          <i className="topIcon fa-brands fa-linkedin"></i>
          <p>mark-ingerson</p>
        </div>
      </div>
    </div>
  )
}

