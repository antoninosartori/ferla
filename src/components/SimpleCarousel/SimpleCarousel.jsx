import './SimpleCarousel.css'
import { useEffect, useState } from 'react'

export default function SimpleCarousel({ 
   slides, 
   duration = 5000, 
   animationDuration = 500 
}) {
   const [slideIndex, setSlideIndex] = useState(0);
   const [fadeOut, setFadeOut] = useState(false);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setFadeOut(true); // Inicia la animación de desvanecimiento
         setTimeout(() => {
            setSlideIndex((prevIndex) =>
               prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
            setFadeOut(false); // Reinicia la animación
         }, animationDuration); // Espera 500ms antes de cambiar la imagen y reiniciar la animación
      }, duration); // Cambia la imagen cada 3 segundos

      return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
   }, []);

   return (
      <div className='SimpleCarousel-container'>
         <img
            className={`SimpleCarousel--image ${fadeOut ? 'fade-out' : ''}`}
            src={slides[slideIndex].src}
            alt="Imagen del carrusel"
         />
      </div>
   )
}
