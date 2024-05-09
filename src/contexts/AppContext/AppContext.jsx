import { useRef, useState } from "react";
import { createContext } from "react";
import sound1 from '../../assets/sounds/last-of-us/I.mp3'
import sound2 from '../../assets/sounds/last-of-us/II.mp3'
import sound3 from '../../assets/sounds/last-of-us/III.mp3'
import lastImg from '../../assets/images/lastofus01.webp'

const AppContext = createContext()

const AppProvider = ({ children }) => {
   const [isPlaying, setIsPlaying] = useState(false)
   const [currentSong, setCurrentSong] = useState(null)
   const [player, setPlayer] = useState(null)
   const audioRef = useRef()
   const volumeRef = useRef(1)

   const resetPlayerInitialValues = () => {
      setIsPlaying(false)
      setCurrentSong(null)
      setPlayer(null)
      audioRef.current = null
   }

   return (
      <AppContext.Provider
         value={{
            player,
            setPlayer,
            isPlaying,
            setIsPlaying,
            currentSong,
            setCurrentSong,
            audioRef,
            volumeRef,
            resetPlayerInitialValues,
         }}
      >
         {children}
      </AppContext.Provider>
   )
}

export { AppContext, AppProvider }