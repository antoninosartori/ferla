import './Home.css'
import Hero from '../../sections/Hero/Hero'
import Projects from '../../sections/Projects/Projects'

export default function Home() {

	return (
		<section className='Home-main-container'>
         < Hero />

			< Projects />
			
         {/* < Bio /> */}
			{/* < Fotter /> */}

		</section>
	)
}
