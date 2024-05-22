import './Hero.css'
import { Header } from '../Header/Header.jsx'
import Slider from "../../components/Slider/Slider"
import { slides } from "../../utils/imageData.js"

export default function Hero() {
	return (
		<div className="hero-container">
			<Header />
			<div className="hero-slider">
				<Slider slides={slides} />
			</div>
		</div>
	)
}
