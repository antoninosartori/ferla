// sarkany, hotel, revolver, venue, tlou, tlou2
import sarkanyImage from '../assets/images/sarkany.webp'
import sarkanySound from '../assets/sounds/sarkany/sarkany-musica.mp3'

import hotelImage from '../assets/images/hotel-estudio/logo_hotel.webp'
import hotelSound from '../assets/sounds/hotel-estudio/hotel-drop-audio.mp3'

import revolverImage from '../assets/images/revolver/revolver04.webp'
import revolverSound from '../assets/sounds/revolver/revolver-sound.mp3'

import venueImage from '../assets/projects/venue_brand.png'
// venue tiene 2 archivos mp4

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


export const PROJECTS_DATA = [
	{
		id: crypto.randomUUID(),
		title: "Campaña Sarkany",
		category: "Produccion Musical",
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
		category: "Produccion Musical",
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
		category: "Produccion Musical",
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
		title: "VENUE BRAND EXPERIENCE",
		category: "Produccion Musical",
		image: venueImage,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		//tracks: [{
		//	id: crypto.randomUUID(),
		//	name: 'Revolver Sound Design Intro BAF Week',
		//	sound: revolverSound
		//},]
	},
  {
		id: crypto.randomUUID(),
		title: "The Last of Us Serie",
		category: "Produccion Musical",
		image: lastofusImage01,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
		category: "Produccion Musical",
		image: lastofusImage02,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
