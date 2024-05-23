import MainLayout from "./layouts/MainLayout/MainLayout"
import Home from "./pages/Home/Home"
import Player from "./components/Player/Player"
import { useContext, useEffect } from "react"
import { AppContext } from "./contexts/AppContext/AppContext"

function App() {
   const { player, isOpen } = useContext(AppContext)

   useEffect(() => {
      if (isOpen || player) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [isOpen, player]);

   return (
      <MainLayout>
         < Home />
         {player && < Player />}
      </MainLayout>
   )
}

export default App
