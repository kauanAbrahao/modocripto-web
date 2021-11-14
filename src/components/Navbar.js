import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {config} from '../Constants';

function Navbar() {
  const swagger_url = config.url.SWAGGER_URL;


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ModoCripto
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/servicos' className='nav-links' onClick={closeMobileMenu}>
                Serviços
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/faq'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contato'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contato
              </Link>
            </li>

            <li>
              <Link
                to={swagger_url}
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                DOCUMENTAÇÃO
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' toLink={swagger_url}>DOCUMENTAÇÃO</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
