import './Footer.css'

import IconInstagramWhite from '../../assets/icons/IconInstagramWhite'
import IconSpotifyWhite from '../../assets/icons/IconSpotifyWhite'

export default function Footer() {
   return (
      <footer className='Footer-main-container'>
         <div className='Footer-wrapper-container'>
            <div className='Footer-icons-container'>
               
               <a className='Footer-icon-link' href="https://open.spotify.com/playlist/04dVFs4l4T0dXR8pUzKjud?si=fcce524589c94f7b&nd=1&dlsi=12fa06085ea34817">
                  < IconSpotifyWhite />
               </a>
               <a className='Footer-icon-link' href="https://www.instagram.com/byferla/">
                  < IconInstagramWhite />
               </a>
            </div>
         </div>
      </footer>
   )
}
