import './Hero.css'
import Slider from "../../components/Slider/Slider"
import { slides } from "../../utils/imageData.js"

export default function Hero() {
	return (
		<div className="hero-container">
			<div className="hero-title">
				<h1>FERLA</h1>
			</div>
			<div className="hero-slider">
				<Slider slides={slides} />
			</div>
		</div>
	)
}