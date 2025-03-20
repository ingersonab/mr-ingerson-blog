import React from 'react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
        <div className="footerCenter1">
            <h4 className="footerText">© {currentYear} Mr. Ingerson Blogs</h4> 
        </div>
        <div className="footerCenter2">
          <h4 className="footerText">Made with 💖 by <a className="footerLink" href="https://alyssaingerson.com/">Alyssa Ingerson</a></h4>
        </div>
        <div className="footerRight">
            <i className="footerIcon fa-brands fa-linkedin"></i>
            <i className="footerIcon fa-brands fa-facebook"></i>
            <i class="footerIcon fa-brands fa-youtube"></i>
            <i className="footerIcon fa-solid fa-envelope"></i>
        </div>
    </div>
  )
}
