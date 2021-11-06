import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Navbar.css'

function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }

 window.addEventListener('resize', showButton);

 return(
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    ModoCripto<i className='fab fa-typo3'/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Serviços
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/api' className='nav-links' onClick={closeMobileMenu} target='bl'>
                            API
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contato
                        </Link>
                    </li>
                    
                </ul>
                {button && <Button toLink="http://localhost:4321/swagger-ui.html" buttonStyle='btn--outline'>DOCUMENTACAO</Button>}

            </div>
        </nav>
    </>
 );
}

export default Navbar;