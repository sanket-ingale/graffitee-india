import './Footer.css';
import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
        <div className="link--container">
            <span className="link--text">Get in contact</span>
            <a href='https://www.instagram.com/graffitee.india/' target="blank">
              <img src={require("../icons/instagram.png")} alt="insta-logo"/>
            </a>
            <a href='https://wa.me/917020963912' target="blank">
              <img src={require("../icons/whatsapp.png")} alt="wa-logo"/>
            </a>
        </div>
        <span className="copyright">Graffitee India &copy; 2022</span>
    </div>
  );
}

