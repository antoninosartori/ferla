import MainLayout from "./layouts/MainLayout/MainLayout"
import Home from "./pages/Home/Home"
import Player from "./components/Player/Player"
import { useContext } from "react"
import { AppContext } from "./contexts/AppContext/AppContext"

function App() {
   const { player } = useContext(AppContext)

   return (
      <MainLayout>
         < Home />
         {player && < Player />}
      </MainLayout>
   )
}

export default App
