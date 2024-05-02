import './PlayerTrack.css'

export default function PlayerTrack({trackNumber, trackName, isPlaying}) {

   const className = isPlaying ? 'PlayerTrack--playing' : ''

   return (
      <article className={`PlayerTrack-container ${className}`}>
         {trackNumber && 
            <div className='PlayerTrack-trackNumber-container'>
               <span className='PlayerTrack--trackNumber'>{trackNumber}</span>
            </div>   
         }
         {trackName && <h3 className='PlayerTrack--trackName'>{trackName}</h3> }
      </article>
  )
}
