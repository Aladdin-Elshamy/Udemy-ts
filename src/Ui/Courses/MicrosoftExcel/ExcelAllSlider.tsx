import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import ExcelTitle from './ExcelTitle';
import ExcelSlider from './ExcelSlider';
import { Navigation, Pagination } from 'swiper/modules';
import { excelCourses } from '../../../utils/constant';

const ExcelAllSlider = () => {
	return (
		<div className="border border-gray-500 px-4 md:px-8 lg:px-10 py-6">
			<ExcelTitle />
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
				{excelCourses.map(course => (
					<SwiperSlide key={course.id}>
						<ExcelSlider course={course} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ExcelAllSlider;
