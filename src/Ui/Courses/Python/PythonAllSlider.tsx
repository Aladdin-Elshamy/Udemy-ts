import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PythonSlider from './PythonSlider';
import PythonTitle from './PythonTitle';
import { pythonCourses } from '../../../utils/constant';

const PythonAllSlider = () => {
	return (
		<div className="border border-gray-300 px-4 md:px-8 lg:px-8 py-6">
			<PythonTitle />
			<Swiper
				slidesPerView={1}
				centeredSlides={false}
				spaceBetween={10}
				pagination={{ type: 'fraction' }}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper mt-10"
				breakpoints={{
					567: { slidesPerView: 1 },
					600: { slidesPerView: 2 },
					768: { slidesPerView: 3 },
					990: { slidesPerView: 4 },
					1100: { slidesPerView: 5 },
				}}
			>
				{pythonCourses.map(course => (
					<SwiperSlide key={course.id}>
						<PythonSlider course={course} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default PythonAllSlider;
