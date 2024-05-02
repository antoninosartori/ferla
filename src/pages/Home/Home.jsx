import { useContext } from 'react'
import './Home.css'
import { AppContext } from '../../contexts/AppContext/AppContext'
import revolverImg from '../../assets/projects/revolver.jpg'

export default function Home() {
   const { setPlayer } = useContext(AppContext)
   
   const FAKEDATA = 
      {
         id: 1,
         image: revolverImg,
         title: 'REVOLVER',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
         tracks: [
            {
               id: 1,
               name: 'track 1',
            },
            {
               id: 3,
               name: 'track 1',
            },
            {
               id: 2,
               name: 'track 1',
            },
            {
               id: 3,
               name: 'track 1',
            },
            {
               id: 2,
               name: 'track 1',
            },
            {
               id: 3,
               name: 'track 1',
            },
            {
               id: 2,
               name: 'track 1',
            },
            {
               id: 3,
               name: 'track 1',
            },
            {
               id: 2,
               name: 'track 1',
            },
            {
               id: 3,
               name: 'track 1',
            },{
               id: 2,
               name: 'track 1',
            },
            {
               id: 3,
               name: 'track 1',
            },{
               id: 2,
               name: 'track 1',
            },
            {
               id: 3,
               name: 'track 1',
            },{
               id: 2,
               name: 'track 1',
            },
            {
               id: 3,
               name: 'track 1',
            },{
               id: 2,
               name: 'track 1',
            },
            {
               id: 3,
               name: 'track 1',
            },
            
         ]
      }

   return (
      <section className='Home-main-container'>

         {/* < Hero /> */}
         {/* < Projects /> */}
         {/* < Bio /> */}
         {/* < Fotter /> */}
         <button onClick={() => setPlayer(FAKEDATA)}>fakedata</button>
      </section>
   )
}
