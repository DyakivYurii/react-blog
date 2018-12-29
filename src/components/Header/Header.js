import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import PATH from '../../constans/path';

import '../../styles/header.css';

const Header = (props) => {
  return (
    <header className="header">
      <Container>
        <Row>
          <nav className="header__nav nav">
            <Col xs="3" md="3">
              <h3 className="nav__logo">Developer Blog</h3>
            </Col>
            <Col xs="9" md="9" className="flex-container">
              <ul className="nav__list nav__list--site">
                <li className="nav__item">
                  <NavLink
                    to={PATH.HOME}
                    className="nav__link"
                    exact
                    activeClassName="nav__link--active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to={PATH.BLOG}
                    className="nav__link"
                    activeClassName="nav__link--active"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to={PATH.CONTACT}
                    className="nav__link"
                    activeClassName="nav__link--active"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <ul className="nav__list nav__list--user">
                <li className="nav__item">
                  <NavLink
                    to={PATH.SIGN_IN}
                    className="nav__link"
                    activeClassName="nav__link--active"
                  >
                    Sign In
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to={PATH.SIGN_UP}
                    className="nav__link"
                    activeClassName="nav__link--active"
                  >
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            </Col>
          </nav>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
