import './Home.css'
import Hero from '../../sections/Hero/Hero'
import { useState } from 'react'
import SecondHero from '../../sections/SecondHero/SecondHero'
import Projects from '../../sections/projects/Projects'
export default function Home() {
   const [isSliderHero, setIsSliderHero] = useState(true)

	return (
		<section className='Home-main-container'>
         <button style={{
            position: 'absolute', 
            top: '30px', 
            left: '30px', 
            backgroundColor: 'var(--color-primary)',
            outline: 'none',
            border: 'none',
            padding: '5px',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontFamily: 'var(--font-primary)',
            color: 'var(--color-background)',
            cursor: 'pointer'
            }} onClick={() => setIsSliderHero(!isSliderHero)}>Cambiar HERO</button>
			{isSliderHero ? < Hero /> : < SecondHero/>}

			< Projects />
			
         {/* < Bio /> */}
			{/* < Fotter /> */}

		</section>
	)
}
