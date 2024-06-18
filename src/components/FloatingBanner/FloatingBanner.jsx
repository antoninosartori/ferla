import IconSpotify from '../../assets/icons/IconSpotify'
import IconOpenNew from '../../assets/icons/IconOpenNew.svg'

import './FloatingBanner.css'

export default function FloatingBanner({title = 'Escuchá mis playlist', description = 'Todos mis trabajos de producción musical, mezcla y mastering.', redirectUrl = 'https://open.spotify.com/playlist/04dVFs4l4T0dXR8pUzKjud?si=fcce524589c94f7b'}) {
   return (
      <div className='FloatingBanner-main-container'>
         < IconSpotify />
         <div className='FloatingBanner-text-container'>
            {title && <h4 className='FloatingBanner-text--title'>{title}</h4>}
            {description && <p className='FloatingBanner-text--description'>{description}</p>}
         </div>
         <a href={redirectUrl} target='_blank'>
            <img src={IconOpenNew} alt="abrir enlace" />
         </a>
      </div>
   )
}
