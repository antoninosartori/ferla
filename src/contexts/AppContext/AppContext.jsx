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
   const [player, setPlayer] = useState({
      image: lastImg,
      title: "the last of us",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tracks: [
         {
            id: crypto.randomUUID(),
            name: 'I',
            sound: sound1
         },
         {
            id: crypto.randomUUID(),
            name: 'II',
            sound: sound2
         },
         {
            id: crypto.randomUUID(),
            name: 'II',
            sound: sound3
         },
      ]
   })
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