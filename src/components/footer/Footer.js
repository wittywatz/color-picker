import React from 'react';
import './footer.scss';
const Footer = () => {
  return (
    <footer>
      <div className="links">
        <a href="https://github.com/wittywatz" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/watson-agbramu-a37320181/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab ml-4 fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/wittywatz"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab ml-4 fa-instagram"></i>
        </a>
        <a
          href="mailto:watsonagbramu@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-envelope-open-text"></i>
        </a>
      </div>
      <p className="mt-3">Designed by Agbramu Watson.</p>
      <p>
        <i className="far fa-copyright cc"></i>
        {'   '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
