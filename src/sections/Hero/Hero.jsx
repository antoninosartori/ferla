import './Hero.css'
import bgImage from '../../assets/hero/hero-bg.jpg'
import logo from '../../assets/logo/logo.png'
import FloatingBanner from '../../components/FloatingBanner/FloatingBanner'

const BIO_INFORMATION = [
	'Soy Fernando Laprida, conocido como Ferla. Soy productor musical y multiinstrumentista de Buenos Aires. He trabajado con artistas como Duki, Ysy A, Neo Pistea, Miss Bolivia, Femigangsta, La Valenti, Mar Marzo, Silvestre y la Naranja, y Martin Oliver. Mi música fusiona pop, RnB, beats experimentales post-dubstep, música clásica, electrónica y diseño sonoro moderno.',
	'Formo parte de la banda de pop rock Silvestre y la Naranja. Con nuestro último trabajo, "Sueño Cítrico", hemos realizado una gira latinoamericana que incluyó Chile, Perú, Colombia, México, Uruguay y España, culminando en el Estadio Obras.',
	'Actualmente, viajo por el mundo con Silvestre y la Naranja y continúo produciendo discos y singles de artistas argentinos.'
]

export default function Hero() {
	return (
		<section className='Hero-main-container'>
			<img className='Hero-bg--image' src={bgImage} alt='background imagen' />
			<div className='Hero-wrapper-container'>
				<div className='Hero-content-container'>
					<figure className='Hero-logo-container logo--desktop'>
						<img className='Hero-logo--image' src={logo} alt='FERLA' />
					</figure>
					<article className='Hero-information-container'>
						{BIO_INFORMATION.map((item) => (
							<p className='Hero-information--text' key={item}>
								{item}
							</p>
						))}
					</article>
				</div>

				<FloatingBanner />
			</div>
		</section>
	)
}
