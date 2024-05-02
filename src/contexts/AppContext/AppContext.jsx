import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {

   const [player, setPlayer] = useState(null)


   return(
      <AppContext.Provider 
         value={{
            player, setPlayer
         }}
      >
         {children}
      </AppContext.Provider>
   )
}

export {AppContext, AppProvider}