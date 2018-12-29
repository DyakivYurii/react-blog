import React from 'react';
import { Container } from 'reactstrap';

import '../../styles/footer.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      <Container>
        <ul className="social__list">
          <li className="social__item">Linkedin</li>
          <li className="social__item">Skype</li>
          <li className="social__item">GitHub</li>
        </ul>
        <small className="footer__copyrighting">
          All rigths are reserved &copy; 2018
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
