import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import './Slider.css'; // Importa el archivo de estilos CSS

export default function Slider({ slides }) {

	return (
		<>
			<Swiper
				spaceBetween={30}
				slidesPerView={4.5}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<img
							className='slide-img'
							src={slide.src}
							alt={slide.alt}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
