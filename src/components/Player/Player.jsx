import './Player.css'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext/AppContext'
import PlayerTrack from '../PlayerTrack/PlayerTrack'
import DisplayButton from '../DisplayButton/DisplayButton'

export default function Player() {
   const { player, setPlayer } = useContext(AppContext)

   useEffect(() => {
      const handleKeyDown = (event) => {
         if (event.key === 'Escape' || event.key === 'escape') {
            setPlayer(null);
         }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
         document.removeEventListener('keydown', handleKeyDown);
      };
   }, [setPlayer]);

   if (!player) return null

   return (
      <section className='Player-main-container'>

         <div onClick={() => setPlayer(null)} className='Player--overlay'></div>
         <article className='Player-content-container'>

            <button onClick={() => setPlayer(null)} className='Player--closeBtn'>CERRAR</button>

            <div className='Player-info-wrapper'>
               <figure className='Player-info-image-container'>
                  <img className='Player-project--image' src={player.image} alt="imagen" />
               </figure>
               <div className='Player-info-project-container'>
                  <h2 className='Player-info-project--title'>{player.title}</h2>
                  <p className='Player-info-project--description'>{player.description}</p>
               </div>
            </div>

            <div className='Player-tracks-container'>
               <div className='Player-tracks-wrapper'>
                  {player.tracks.map((track, idx) => (
                     < PlayerTrack key={track.id} isPlaying={track.id === 1} trackName={track.name} trackNumber={idx + 1} />
                  ))}
               </div>

               < DisplayButton />
            </div>
         </article>
      </section>
   )
}
