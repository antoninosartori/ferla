import './Hero.css'
import bgImage from '../../assets/hero/hero-bg.jpg'
import logo from '../../assets/logo/logo.png'
import FloatingBanner from '../../components/FloatingBanner/FloatingBanner'

const BIO_INFORMATION = [
	'Fernando Laprida, conocido como Ferla es productor musical y multiinstrumentista de Buenos Aires. Ha trabajado con artistas como Duki, Ysy A, Neo Pistea, Miss Bolivia, Femigangsta, La Valenti, Mar Marzo, Silvestre y la Naranja, y Martin Oliver. Su música fusiona pop, RnB, beats experimentales post-dubstep, música clásica, electrónica y diseño sonoro moderno.',
	'Forma parte de la banda de pop rock Silvestre y la Naranja. Con su último trabajo, "Sueño Cítrico", han realizado una gira latinoamericana que incluyó Chile, Perú, Colombia, México, Uruguay y España, culminando en el Estadio Obras.',
	'Actualmente, viaja por el mundo con Silvestre y la Naranja y continúa produciendo discos y singles de artistas argentinos.'
]

export default function Hero() {
	return (
		<section id='inicio' className='Hero-main-container'>
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
