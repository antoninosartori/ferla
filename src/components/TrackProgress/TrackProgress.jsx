import './TrackProgress.css'
import { useContext, useEffect, useState } from 'react'
import Slider from '../Slider/Slider'
import { AppContext } from '../../contexts/AppContext/AppContext'
import { formateTrackTime } from '../../utils/formateTrackTime'

export default function TrackProgress({handleNextTrack}) {
   const { audioRef } = useContext(AppContext)
   const [currentTime, setCurrentTime] = useState(0)

   useEffect(() => {
      if (!audioRef.current) return
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
      return () => {
         audioRef.current?.removeEventListener('timeupdate,', handleTimeUpdate)
      }
   }, [])

   const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current?.currentTime)
   }

   const duration = audioRef.current?.duration || 0

   if(duration > 0 && duration === audioRef.current?.currentTime ){
      handleNextTrack()
   }
   
   return (
      <div className='TrackProgress-main-container'>
         <span className='TrackProgress--time'>{formateTrackTime(currentTime)}</span>
         < Slider
            value={currentTime}
            min={0}
            max={duration}
            onChange={
               ({ target }) => {
                  audioRef.current.currentTime = target.value
                  setCurrentTime(target.value)
               }
            }
         />
         <span className='TrackProgress--time'>{duration ? formateTrackTime(duration) : '-:-'}</span>
      </div>
   )
}
