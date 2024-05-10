import './Bio.css'
import imgBio from '../../assets/hero/ferla05.webp'
export function Bio() {
	return (
		<section className='bio-container'>
			<div className="img-bio">
				<img src={imgBio} alt="Imagen de Biografia de Ferla" />
			</div>
			<div className="description-bio">
				<div className="description-title">
					<h2>ferla bio</h2>
				</div>
				<div className="description-data">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</section>
	)
}
