import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
        <div className="footerCenter">
            <h4 className="footerText">© 2024 Mr. Ingerson Blogs</h4>
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
