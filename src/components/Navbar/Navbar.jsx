// src/components/Navbar.jsx
import { useContext } from 'react';
import './Navbar.css';
import { IconHamburger } from '../../assets/icons/IconHamburger.jsx';
import { IconX } from '../../assets/icons/IconX.jsx';
import { AppContext } from '../../contexts/AppContext/AppContext.jsx';
import logo from '../../assets/logo/logo.png'

export function Navbar() {
   const { isOpen, setIsOpen } = useContext(AppContext)

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <header className='header-main-container'>
         <nav className='header-wrapper-container'>
            <div className="container-navbar">
               <div className='container-navbar--row'>
                  <a href='#inicio' className="navbar-logo-container">
                     <img className='navbar-logo-image' src={logo} alt="FERLA" />
                  </a>
                  <button className="btn-toggle" onClick={toggleMenu}>
                     {isOpen ? (
                        <IconX />
                     ) : (
                        <IconHamburger />
                     )}
                  </button>
               </div>
               <div className={`navbar-data ${isOpen ? 'show expand' : ''}`}>

                  <ul className={`navbar-navlist`} >
                     <li className="nav-item">
                        <a onClick={() => setIsOpen(false)} className="nav-link" href="#produccion"><span>Producción musical</span></a>
                     </li>
                     <li className="nav-item">
                        <a onClick={() => setIsOpen(false)} className="nav-link" href="#sound-design"><span>Sound design</span></a>
                     </li>
                     <li className="nav-item">
                        <a onClick={() => setIsOpen(false)} className="nav-link" href="#mix-&-mastering"><span>MIX & Mastering</span></a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
}

