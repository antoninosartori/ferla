import './Projects.css'
import { Card } from '../../components/Card/Card'

export function Projects() {
	return (
		<section className="section-cards">
			<div className="title-cards">
				<h2>projects</h2>
			</div>
			<div className="container-cards">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	)
}
