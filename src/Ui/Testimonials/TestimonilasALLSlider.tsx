import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import TestimoialsTitle from '../../Element/Testimoials/TestimoialsTitle';
import TestimonilasSlider from './TestimonialsSlider';
import { Testimoials } from '../../utils/constant';

const TestimonilasALLSlider = () => {

	return (
		<div>
			<TestimoialsTitle />
			<Swiper
				slidesPerView={1}
				centeredSlides={false}
				spaceBetween={30}
				pagination={{ type: 'fraction' }}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper testimonial-swiper"
				breakpoints={{
					567: { slidesPerView: 1 },
					600: { slidesPerView: 1 },
					768: { slidesPerView: 1 },
					1000: { slidesPerView: 1 },
					1200: { slidesPerView: 3 },
				}}
			>
				{Testimoials.map(Testimoial => (
					<SwiperSlide
						className="testimonial-swiper-slider"
						key={Testimoial.id}
					>
						<TestimonilasSlider Testimoial={Testimoial} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default TestimonilasALLSlider;
