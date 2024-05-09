import './Player.css'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext/AppContext'
import PlayerTrack from '../PlayerTrack/PlayerTrack'
import DisplayButton from '../DisplayButton/DisplayButton'

export default function Player() {
   const {
      player,
      setPlayer,
      audioRef,
      resetPlayerInitialValues,
      setIsPlaying
   } = useContext(AppContext)

   useEffect(() => {
      const handleKeyDown = (event) => {
         if (event.key === 'Escape' || event.key === 'escape') {
            resetPlayerInitialValues();
         }
         if (event.key === ' ') {
            setIsPlaying(prevState => !prevState)
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

         <div onClick={() => resetPlayerInitialValues()} className='Player--overlay'></div>

         <article className='Player-content-container'>

            <button onClick={() => resetPlayerInitialValues()} className='Player--closeBtn'>CERRAR</button>

            <div className='Player-info-wrapper'>
               <figure className='Player-info-image-container'>
                  <img className='Player-project--image' src={player.image} alt="imagen" />
               </figure>
               <div className='Player-info-project-container'>
                  <h2 className='Player-info-project--title'>{player.title}</h2>
                  <p className='Player-info-project--description'>{player.description}</p>
               </div>
            </div>
         {console.log(player?.tracks?.length)}
            {(player?.tracks?.length > 0 && player?.tracks?.length !== undefined) &&
               <div className='Player-tracks-container'>
                  <div className='Player-tracks-wrapper'>
                     {player?.tracks?.map((track, idx) => (
                        < PlayerTrack key={track.id} sound={track.sound} trackId={track.id} trackName={track.name} trackNumber={idx + 1} />
                     ))}
                  </div>

                  < DisplayButton />
               </div>}
         </article>

         <audio ref={audioRef}></audio>
      </section>
   )
}
