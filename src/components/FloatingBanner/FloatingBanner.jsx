import IconSpotify from '../../assets/icons/IconSpotify'
import IconOpenNew from '../../assets/icons/IconOpenNew.svg'

import './FloatingBanner.css'

export default function FloatingBanner() {
   return (
      <div className='FloatingBanner-main-container'>
         < IconSpotify />
         <div className='FloatingBanner-text-container'>
            <h4 className='FloatingBanner-text--title'>Escuchá mis playlist </h4>
            <p className='FloatingBanner-text--description'>Todos mis trabajos de producción musical, mezcla y mastering.</p>
         </div>
         <a href="" target='_blank'>
            <img src={IconOpenNew} alt="abrir enlace" />
         </a>
      </div>
   )
}
