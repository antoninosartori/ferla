import './DisplayButton.css'
import prevIcon from '../../assets/icons/skip_previous.svg'
import nextIcon from '../../assets/icons/skip_next.svg'
import pauseIcon from '../../assets/icons/pause.svg'

export default function DisplayButton() {
   return (
      <div className='DisplayButton-main-container'>
         <div className='DisplayButton-buttons'>
            <button className='DisplayButton--btn'>
               <img src={prevIcon} alt="anterior" />
            </button>
            <button className='DisplayButton--btn DisplayButton--play-pause'>
               <img src={pauseIcon} alt="pausa" />
            </button>
            <button className='DisplayButton--btn'>
               <img src={nextIcon} alt="siguiente" />
            </button>
         </div>
         <div className='DisplayButton-progressionBar-container'></div>
      </div>
   )
}
