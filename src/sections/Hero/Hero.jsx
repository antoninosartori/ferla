import './Hero.css'
import { Nav } from '../Nav/Nav.jsx'
import Slider from "../../components/Slider/Slider"
import { slides } from "../../utils/imageData.js"

export default function Hero() {
	return (
		<div className="hero-container">
			<Nav />
			<div className="hero-slider">
				<Slider slides={slides} />
			</div>
		</div>
	)
}
