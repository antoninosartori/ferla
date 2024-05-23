// src/components/Navbar.jsx
import { useContext } from 'react';
import './Navbar.css';
import { IconHamburger } from '../../assets/icons/IconHamburger.jsx';
import { IconX } from '../../assets/icons/IconX.jsx';
import { AppContext } from '../../contexts/AppContext/AppContext.jsx';

export function Navbar() {
   const {isOpen, setIsOpen} = useContext(AppContext)

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   

   return (
      <header className='header-main-container'>
         <nav className='header-wrapper-container'>
            <div className="container-navbar">
               <button className="btn-abrir" onClick={toggleMenu}>
                  {isOpen ? (
                     <IconX />
                  ) : (
                     <IconHamburger />
                  )}
               </button>
               <div className={`navbar-data ${isOpen ? 'show expand' : ''}`}>
                  <div className="navbar-icon">
                     <h3>FERLA</h3>
                  </div>
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

