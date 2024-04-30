import './Hero.css'
import ferlaImgs from '../../assets/hero/hero_img_group.png'
import { HERO_IMAGES } from '../../utils/hero-images'
import SimpleCarousel from '../../components/SimpleCarousel/SimpleCarousel';

export default function Hero() {

   return (
      <section className='Hero-main-container'>
         <h1 className='Hero--titleLogo'>ferla</h1>

         <section className='Hero-wrapper-container'>
            <figure className='Hero-figure-container'>
               <img className='Hero--image' src={ferlaImgs} alt="imagenes de ferla" />
            </figure>
            
            < SimpleCarousel slides={HERO_IMAGES} />
            
         </section>
      </section>
   );
}
