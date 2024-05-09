import './DisplayButton.css'

import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/AppContext/AppContext'

import PlayerSlider from '../PlayerSlider/PlayerSlider'
import IconPlay from '../../assets/icons/IconPlay'
import IconPause from '../../assets/icons/IconPause'
import IconPrev from '../../assets/icons/IconPrev'
import IconNext from '../../assets/icons/IconNext'
import TrackProgress from '../TrackProgress/TrackProgress'
import IconMute from '../../assets/icons/IconMute'
import IconMidSound from '../../assets/icons/IconMidSound'
import IconMaxSound from '../../assets/icons/IconMaxSound'
import Loader from '../Loader/Loader'

export default function DisplayButton() {
   const {
      isPlaying,
      setIsPlaying,
      audioRef,
      volumeRef,
      currentSong,
      setCurrentSong,
      player,
   } = useContext(AppContext)

   const [volume, setVolume] = useState(50)
   const [prevVolume, setPrevVolume] = useState(50)

   const tracks = player?.tracks
   const currentTrackIndex = tracks?.findIndex(track => track.id === currentSong?.id)
   const albumLength = tracks?.length - 1

   useEffect(() => {
      isPlaying
         ? audioRef.current.play()
         : audioRef.current.pause()
   }, [isPlaying])

   useEffect(() => {
      setCurrentSong({
         id: player.tracks[0].id,
         sound: player.tracks[0].sound
      })
      const src = player.tracks[0].sound
      audioRef.current.src = src
      audioRef.current.volume = volumeRef.current
      audioRef.current.play()
      setIsPlaying(true)
   }, [])



   const handleNextTrack = () => {
      if (albumLength === currentTrackIndex) return null
      const nextTrack = tracks[currentTrackIndex + 1]
      audioRef.current.src = nextTrack.sound
      audioRef.current.play()
      setCurrentSong({
         id: nextTrack.id,
         sound: nextTrack.sound
      })
   }

   const handlePrevTrack = () => {
      if (currentTrackIndex === 0) return null
      const prevTrack = tracks[currentTrackIndex - 1]
      audioRef.current.src = prevTrack.sound
      audioRef.current.play()
      setCurrentSong({
         id: prevTrack.id,
         sound: prevTrack.sound
      })
   }

   const toggleSoundVolume = () => {
      if (volume > 0) {
         setPrevVolume(volume)
         setVolume(0)
         volumeRef.current = 0
         audioRef.current.volume = 0
         return
      }
      setVolume(prevVolume)
      volumeRef.current = prevVolume / 100
      audioRef.current.volume = prevVolume / 100
   }

   const isLoading = isPlaying && !audioRef?.current?.src

   return (
      <div className='DisplayButton-main-container'>

         <div className='DisplayButton-wrapper-container'>
            <div className='DisplayButton-buttons'>
               <button className='DisplayButton--btn' onClick={handlePrevTrack}>
                  < IconPrev />
               </button>
               <button className='DisplayButton--btn DisplayButton--play-pause' onClick={() => setIsPlaying(!isPlaying)} >
                  {isPlaying && !isLoading && < IconPause />}
                  {!isPlaying && !isLoading && < IconPlay color='var(--color-tertiary)' />}
                  {isLoading && < Loader />
                  }
               </button>
               <button className='DisplayButton--btn' onClick={handleNextTrack}>
                  < IconNext />
               </button>
            </div>
            <div className='DisplayButton-volume-container'>
               <div className='DisplayButton-volume-iconContainer' onClick={toggleSoundVolume}>
                  {volume < 1 && < IconMute />}
                  {volume > 0 && volume <= 55 && < IconMidSound />}
                  {volume > 55 && < IconMaxSound />}
               </div>
               < PlayerSlider
                  width={`40px`}
                  value={volume}
                  onChange={({ target }) => {
                     setVolume(target.value)
                     volumeRef.current = target.value / 100
                     audioRef.current.volume = target.value / 100
                  }}

               />
            </div>
         </div>

         < TrackProgress handleNextTrack={handleNextTrack} />

      </div>
   )
}
