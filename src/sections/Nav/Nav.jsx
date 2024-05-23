// src/components/Navbar.jsx
import { useState } from 'react';
import './Nav.css'; // Asegúrate de que los estilos estén en este archivo
import { IconHamburger } from '../../assets/icons/IconHamburger.jsx';
import { IconX } from '../../assets/icons/IconX.jsx';
export function Nav() {
	const [isOpen, setIsOpen] = useState(true);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header>
			<nav>
				<div className="container-navbar">
					<button className="btn-abrir" onClick={toggleMenu}>
						{isOpen ? (
							<IconX />
						) : (
							<IconHamburger />
						)}
					</button>
					<div className={`navbar-data ${isOpen ? 'show expand' : ''}`} id="navbarNav">
						<div className="navbar-icon"><h3>FERLA</h3></div>
						<ul className={`navbar-navlist`} id="navbarNavList">
							<li className="nav-item">
								<a className="nav-link" href="#"><span>Producción musical</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#"><span>Sound design</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#"><span>MIX & Mastering</span></a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

