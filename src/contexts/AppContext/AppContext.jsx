import { useEffect, useRef, useState } from "react";
import { createContext } from "react";
const { VITE_STEINHQ_AUTH_PASSWORD, VITE_STEINHQ_AUTH_USERNAME, VITE_STEINHQ_API_URL } = import.meta.env;


const AppContext = createContext()

const AppProvider = ({ children }) => {

   /* DATA */
   const [allProjects, setAllProjects] = useState(null)
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      const getData = async () => {
         try {
            setIsLoading(true);
            const url = `${VITE_STEINHQ_API_URL}/Sheet1`;

            const username = VITE_STEINHQ_AUTH_USERNAME;
            const password = VITE_STEINHQ_AUTH_PASSWORD;
            const credentials = btoa(`${username}:${password}`);

            const headers = new Headers();
            headers.set('Authorization', `Basic ${credentials}`);

            const response = await fetch(url, { headers });
            const data = await response.json();

            if (data && data.length > 0) {
               const processedData = data.map(project => {
                  if (project.tracks && typeof project.tracks === 'string') {
                     const parts = project.tracks.split('---');

                     const tracks = parts.map(part => {
                        const [idPart, namePart, soundPart] = part.split(',').map(s => s.trim());

                        const id = idPart.split(': ')[1];
                        const name = namePart.split(': ')[1].replace(/"/g, '');
                        const sound = soundPart.split(': ')[1].replace(/"/g, '');

                        return { id, name, sound };
                     });

                     return {
                        ...project,
                        tracks: tracks
                     };
                  } else {
                     console.error('Invalid tracks data:', project.tracks);
                     return project;
                  }
               });

               setAllProjects(processedData);
            } else {
               console.error('No data received or empty array:', data);
            }
         } catch (error) {
            console.error(error);
         } finally {
            setIsLoading(false);
         }
      };
      getData();
   }, []);

   const [isOpen, setIsOpen] = useState(false);

   /* PLAYER */
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

   useEffect(() => {
      if (isOpen || player) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'auto';
      }
   }, [isOpen, player]);

   return (
      <AppContext.Provider
         value={{
            isLoading,
            allProjects,
            isOpen,
            setIsOpen,
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