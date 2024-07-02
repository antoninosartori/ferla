import marMarzoImage from '../assets/images/pulsion.jpg'

import martinOliverImage from '../assets/images/martin_oliver.png'

import sarkanyImage from '../assets/images/sarkany.webp'
import sarkanySound from '../assets/sounds/sarkany/sarkany-musica.mp3'

import hotelImage from '../assets/images/hotel-estudio/logo_hotel.webp'
import hotelSound from '../assets/sounds/hotel-estudio/hotel-drop-audio.mp3'

import revolverImage from '../assets/images/revolver/revolver04.webp'
import revolverSound from '../assets/sounds/revolver/revolver-sound.mp3'

import venueImage from '../assets/projects/venue_brand.png'

import lastofusImage01 from '../assets/images/lastofus01.webp'
import lastofusImage02 from '../assets/images/lastofus02.webp'
import lastofusISound from '../assets/sounds/last-of-us/I.mp3'
import lastofusIISound from '../assets/sounds/last-of-us/II.mp3'
import lastofusIIISound from '../assets/sounds/last-of-us/III.mp3'
import lastofusIVSound from '../assets/sounds/last-of-us/IV.mp3'
import lastofusVSound from '../assets/sounds/last-of-us/V.mp3'
import lastofusVISound from '../assets/sounds/last-of-us/VI.mp3'
import lastofusVIISound from '../assets/sounds/last-of-us/VII.mp3'
import lastofusVIIISound from '../assets/sounds/last-of-us/VIII.mp3'

import { PROJECT_CATEGORIES } from '../utils/project-categories-enum'


export const PROJECTS_DATA = [
   {
      id: crypto.randomUUID(),
      title: "Mar Marzo Pulsión",
      category: PROJECT_CATEGORIES.production,
      image: marMarzoImage,
      description: 'Pulsión es un álbum de 10 canciones, reconocido con dos nominaciones a los premios Gardel. Esta obra rebosa emocionalidad y ofrece una rica variedad de texturas sonoras. A lo largo del álbum, se exploran géneros que van desde el pop alternativo hasta la música experimental, pasando por el RnB y el jazz.',
      albumRedirectUrl: 'https://open.spotify.com/album/19atAigwiE58wvFBfoqmQ2?si=ej8keIBtQXKSICs8caOuEQ',
      platform: 'spotify',
      tracks: [
         {
            id: crypto.randomUUID(),
            name: 'Pulsión',
            redirectUrl: 'https://open.spotify.com/intl-es/track/34XXyrPMLQv6fk40xADfdW',
            platform: 'spotify'
         },
         {
            id: crypto.randomUUID(),
            name: 'M.T',
            redirectUrl: 'https://www.youtube.com/watch?v=cwEU6qvG7t0',
            platform: 'youtube'
         },
         {
            id: crypto.randomUUID(),
            name: 'Amanace',
            redirectUrl: 'https://www.youtube.com/watch?v=90CArt74WQo',
            platform: 'youtube'
         },
         {
            id: crypto.randomUUID(),
            name: 'Baldosas',
            redirectUrl: 'https://www.youtube.com/watch?v=FHTYOxOOIqw',
            platform: 'youtube'
         }
      ]
   },
   {
      id: crypto.randomUUID(),
      title: "“pm” - Martin Oliver",
      category: PROJECT_CATEGORIES.production,
      image: martinOliverImage,
      description: 'PM emerge como una respuesta a la búsqueda de luz en los momentos de oscuridad. El resultado es un disco que, aunque posee un tono melancólico, irradia calidez. Martín dedica este álbum a la memoria de su padre y su madre, quienes fallecieron hace uno y dos años respectivamente. Este último trabajo presenta una estética completamente renovada en su carrera, caracterizada por una profunda conexión con la música popular argentina de las décadas de los 80 y 90.',
      albumRedirectUrl: 'https://open.spotify.com/album/5L0fWyPoM783LpEQh2R2b0?si=0ijcR5MVSAORr-D1OZF0Ig',
      platform: 'spotify',
      tracks: [
         {
            id: crypto.randomUUID(),
            name: 'lofi',
            redirectUrl: 'https://www.youtube.com/watch?v=LEAD-49gFEg',
            platform: 'youtube'
         },
         {
            id: crypto.randomUUID(),
            name: 'por si algun dia me muero',
            redirectUrl: 'https://www.youtube.com/watch?v=k3ncdoxfUao',
            platform: 'youtube'
         },
         {
            id: crypto.randomUUID(),
            name: 'las horas',
            redirectUrl: 'https://open.spotify.com/track/0TtSHJMV0h3AggR2Hc1LNH?si=21a91dc8f535486a',
            platform: 'spotify'
         },
         {
            id: crypto.randomUUID(),
            name: 'pm',
            redirectUrl: 'https://open.spotify.com/track/07DKkaeJHMuD4wUy7D4BSx?si=666c2677b4294f46',
            platform: 'spotify'
         },
      ]
   },
   // {
   //    id: crypto.randomUUID(),
   //    title: "AQNP - Mia Zeta",
   //    category: PROJECT_CATEGORIES.production,
   //    image: null,
   //    description: 'Single',
   //    albumRedirectUrl: 'https://open.spotify.com/track/7uKq218KOSyY2dKR6ermSw?si=fc81bf49c5d04b0f',
   //    platform: 'spotify',
   // },
   // {
   //    id: crypto.randomUUID(),
   //    title: "La Lune - Yesan",
   //    category: PROJECT_CATEGORIES.production,
   //    image: null,
   //    description: 'Single',
   //    albumRedirectUrl: 'https://open.spotify.com/track/6sPEHT3coWNOJ8ZFamf9uS?si=599ed47cf1bd418e',
   //    platform: 'spotify',
   // },
   //    {
   //    id: crypto.randomUUID(),
   //    title: "Kompressor Remix",
   //    category: PROJECT_CATEGORIES.production,
   //    image: null,
   //    description: 'Single',
   //    albumRedirectUrl: 'https://open.spotify.com/track/7CNNHUhVlsCH4vyAA4Sqb7?si=a54e32143ea747ca',
   //    platform: 'spotify',
   // },
   {
      id: crypto.randomUUID(),
      title: "Campaña Sarkany",
      category: PROJECT_CATEGORIES.soundDesign,
      image: sarkanyImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tracks: [{
         id: crypto.randomUUID(),
         name: 'Sarkany Campaña Musica',
         sound: sarkanySound
      },]
   },
   {
      id: crypto.randomUUID(),
      title: "Hotel estudio",
      category: PROJECT_CATEGORIES.soundDesign,
      image: hotelImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tracks: [{
         id: crypto.randomUUID(),
         name: 'HOTEL DROP RELEASE MUSIK',
         sound: hotelSound
      },]
   },

   {
      id: crypto.randomUUID(),
      title: "REVOLVER",
      category: PROJECT_CATEGORIES.soundDesign,
      image: revolverImage,
      description: 'Presentación de la colección de invierno de RVR durante el BAF WEEK, celebrado en el Museo de Ciencias Naturales de Parque Centenario. El evento estuvo ambientado en una temática inspirada en los dinosaurios, la selva, la jungla y otros elementos de la naturaleza salvaje.',
      tracks: [{
         id: crypto.randomUUID(),
         name: 'Revolver Sound Design Intro BAF Week',
         sound: revolverSound
      },]
   },
   {
      id: crypto.randomUUID(),
      title: "VENUE BRAND EXPERIENCE",
      category: PROJECT_CATEGORIES.soundDesign,
      image: venueImage,
      description: 'Desarrollo de Diseño Sonoro para VENUE BRAND EXPERIENCE, una productora dedicada a crear experiencias únicas para eventos corporativos de marcas.',
      //tracks: [{
      //	id: crypto.randomUUID(),
      //	name: 'Revolver Sound Design Intro BAF Week',
      //	sound: revolverSound
      //},]
   },
   {
      id: crypto.randomUUID(),
      title: "The Last of Us Serie",
      category: PROJECT_CATEGORIES.soundDesign,
      image: lastofusImage01,
      description: 'Desarrollo de la banda sonora para la 2da Temporada de “The Last Of Us”, enfocada en crear tensiones musicales que complementen la trama de la serie.',
      tracks: [
         {
            id: crypto.randomUUID(),
            name: 'Sonido I',
            sound: lastofusISound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido II',
            sound: lastofusIISound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido III',
            sound: lastofusIIISound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido IV',
            sound: lastofusIVSound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido V',
            sound: lastofusVSound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido VI',
            sound: lastofusVISound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido VII',
            sound: lastofusVIISound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido VIII',
            sound: lastofusVIIISound
         }
      ]
   },
   {
      id: crypto.randomUUID(),
      title: "The Last of Us Serie",
      category: PROJECT_CATEGORIES.soundDesign,
      image: lastofusImage02,
      description: 'Desarrollo de la banda sonora para la 2da Temporada de “The Last Of Us”, enfocada en crear tensiones musicales que complementen la trama de la serie.',
      tracks: [
         {
            id: crypto.randomUUID(),
            name: 'Sonido I',
            sound: lastofusISound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido II',
            sound: lastofusIISound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido III',
            sound: lastofusIIISound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido IV',
            sound: lastofusIVSound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido V',
            sound: lastofusVSound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido VI',
            sound: lastofusVISound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido VII',
            sound: lastofusVIISound
         },
         {
            id: crypto.randomUUID(),
            name: 'Sonido VIII',
            sound: lastofusVIIISound
         }
      ]
   }
]
