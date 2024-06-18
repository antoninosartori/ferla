import { useContext } from 'react'
import './PlayerTrack.css'
import { AppContext } from '../../contexts/AppContext/AppContext'
import IconPause from '../../assets/icons/IconPause'
import IconPlay from '../../assets/icons/IconPlay'
import IconSpotify from '../../assets/icons/IconSpotify'

export default function PlayerTrack({ trackId, trackNumber, trackName, sound, redirectUrl, platform }) {
   const { isPlaying, setIsPlaying, currentSong, setCurrentSong, audioRef, } = useContext(AppContext)

   const handleClickPlay = () => {
      if (redirectUrl) return
      if (isThisTrackPlaying && isPlaying) {
         audioRef.current?.pause()
         return setIsPlaying(false)
      }
      if (isThisTrackPlaying && !isPlaying) {
         audioRef.current.play()
         return setIsPlaying(true)
      }
      audioRef.current.src = sound
      audioRef.current.play()
      setIsPlaying(true)
      setCurrentSong({
         id: trackId,
         sound
      })
   }

   const isThisTrackPlaying = currentSong?.id === trackId

   const className = isThisTrackPlaying ? 'PlayerTrack--playing' : ''

   const mapPlatformIcon = {
      youtube: <IconSpotify/>,
      spotify: < IconSpotify />
   }

   return (
      <article onClick={handleClickPlay} className={`PlayerTrack-container ${className}`}>
         
         {(trackNumber && !redirectUrl) &&
            <div className='PlayerTrack-trackNumber-container'>
               <span className='PlayerTrack--trackNumber'>{trackNumber}</span>
               <span className='PlayerTrack--icon'>
                  {isThisTrackPlaying && isPlaying ? < IconPause color='#EEEEEE' /> : < IconPlay color='#EEEEEE' />}
               </span>
            </div>
         }

         {(redirectUrl && trackNumber) &&
            <a href={redirectUrl} target='_blank' className='PlayerTrack-trackNumber-container'>
               <span className='PlayerTrack--trackNumber'>{trackNumber}</span>
               <span className='PlayerTrack--icon'>
                  {mapPlatformIcon[platform]}
               </span>
            </a>
         }
         {trackName && <h3 className='PlayerTrack--trackName'>{trackName}</h3>}
      </article>
   )
}
