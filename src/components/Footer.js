import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';

const Footer = () => (
  <footer className="d-flex flex-column justify-content-center align-items-center pt-2 gap-2 bg-secondary text-white footer">
    <h3>Developers</h3>
    <div className="d-flex gap-2 contact-section">
      <div className="dev-contact">
        <h6>
          {' '}
          <BsPersonCircle />
          {' '}
          Thomas Obuya
        </h6>
        <div className="socials">
          <a href="https://github.com/tobuya" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <a href="mailto:thomasobuya95@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">Email</a>
          <a href="https://linkedin.com/in/tobuya" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
      </div>
      <div className="dev-contact">
        <h6>
          {' '}
          <BsPersonCircle />
          {' '}
          Bernabas Yosef
        </h6>
        <div className="socials">
          <a href="https://github.com/bernabasy" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <a href="mailto:bernabasjosef@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">Email</a>
          <a href="https://www.linkedin.com/in/bernabas-yosef-74b571186/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
      </div>
      <div className="dev-contact">
        <h6>
          {' '}
          <BsPersonCircle />
          {' '}
          John Kpordje
        </h6>
        <div className="socials">
          <a href="https://github.com/Outkarm" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <a href="mailto:jkpordje@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">Email</a>
          <a href="https://www.linkedin.com/in/john-kpordje-866749241/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>
        &copy; 2023
        <a href="https://github.com/tobuya/space_travelers_hub" target="_blank" rel="noopener noreferrer" className="link px-2">Space Travelers Hub</a>
      </p>
    </div>
  </footer>
);

export default Footer;
