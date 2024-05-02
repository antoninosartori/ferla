import MainLayout from "./layouts/MainLayout/MainLayout"
import Home from "./pages/Home/Home"
import Player from "./components/Player/Player"

function App() {
   return (
      <MainLayout>
         < Home />
         < Player />
      </MainLayout>
   )
}

export default App
