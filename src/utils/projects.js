import revolverImage from '../assets/projects/revolver.jpg'
import revolverSound from '../assets/sounds/REVOLVER.mp3'
import lastofusImage from '../assets/projects/lastofus.png'

export const PROJECTS_DATA = [
   {
      id: crypto.randomUUID(),
      title: "REVOLVER",
      image: revolverImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tracks: [{
         id: crypto.randomUUID(),
         name: 'Revolver Sound Design Intro BAF Week',
         sound: revolverSound
      },]
   },
   {
      id: crypto.randomUUID(),
      title: "The Last of Us Serie",
      image: lastofusImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tracks: [{
         id: crypto.randomUUID(),
         name: 'Sonido 1',
         sound: revolverSound
      },]
   }
]