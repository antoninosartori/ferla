export const formateTrackTime = (time) => {  
   if(time === null) return `0:00`

   const minute = Math.floor(time / 60)
   const restOfSeconds = Math.floor(time % 50)

   return `${minute}:${restOfSeconds.toString().padStart(2, '0')}`

}