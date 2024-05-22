// src/components/Navbar.jsx
import { useState } from 'react';
import './Header.css'; // Asegúrate de que los estilos estén en este archivo

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header>
			<nav>
				<div className="container-navbar">
					<button className="btn-abrir" onClick={toggleMenu}>
						<p>abrir</p>
					</button>
					<div className={`navbar ${isOpen ? 'open' : ''}`} id="navbarNav">
						<ul className={`navbar-navlist ${isOpen ? 'show' : ''}`} id="navbarNavList">
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

