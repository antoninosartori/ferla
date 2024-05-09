import './SecondHero.css'
import ferlaImgs from '../../assets/hero/hero_img_group.png'
import { HERO_IMAGES } from '../../utils/hero-images'
import SimpleCarousel from '../../components/SimpleCarousel/SimpleCarousel';

export default function SecondHero() {

   return (
      <section className='SecondHero-main-container'>
         <h1 className='SecondHero--titleLogo'>ferla</h1>

         <section className='SecondHero-wrapper-container'>
            <figure className='SecondHero-figure-container'>
               <img className='SecondHero--image' src={ferlaImgs} alt="imagenes de ferla" />
            </figure>
            
            < SimpleCarousel slides={HERO_IMAGES} />
            
         </section>
      </section>
   );
}
