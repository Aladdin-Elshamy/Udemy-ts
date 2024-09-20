import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PythonSlider from './PythonSlider';
import PythonTitle from './PythonTitle';

const PythonAllSlider = () => {
	const courses = [
		{
			id: 1,
			img: '/images/python/1.jpg',
			title: 'Microsoft python - python course',
			desc: 'from beginner to advanced',
			instructor: 'Jose Portilla, Pierian Training',
			stars: 3,
			rate: 4,
			rateNumber: '403,83',
			price: 'EL109.99',
			discount: 'EL1,879.99',
			bestSeller: '',
		},
		{
			id: 2,
			img: '/images/python/2.jpg',
			title: 'Zero to Hero in python',
			desc: 'Complete python guide 2024',
			instructor: 'start-tech academy',
			stars: 4,
			rate: 4.2,
			rateNumber: '24,783',
			price: 'EL209.99',
			discount: 'EL1,555.99',
			bestSeller: 'best seller',
		},
		{
			id: 3,
			img: '/images/python/3.jpg',
			title: 'Microsoft python Weekender',
			desc: 'crash course',
			instructor: 'start-tech academy',
			stars: 5,
			rate: 4.9,
			rateNumber: '203,83',
			price: 'EL309.99',
			discount: 'EL1,999.99',
			bestSeller: '',
		},
		{
			id: 4,
			img: '/images/python/4.jpg',
			title: 'Ms python/python 2023',
			desc: 'The Complete Introduction to python',
			instructor: 'yassin marko',
			stars: 4,
			rate: 4.6,
			rateNumber: '503,83',
			price: 'EL250.99',
			discount: 'EL1,222.99',
			bestSeller: '',
		},
		{
			id: 5,
			img: '/images/python/5.jpg',
			title: 'Microsoft python',
			desc: 'from beginner to advanced',
			instructor: 'Jose Portilla, Pierian Training',
			stars: 3,
			rate: 4,
			rateNumber: '403,83',
			price: 'EL109.99',
			discount: 'EL1,879.99',
			bestSeller: 'best seller',
		},
		{
			id: 6,
			img: '/images/python/1.jpg',
			title: 'Microsoft python - python course',
			desc: 'from beginner to advanced',
			instructor: 'Jose Portilla, Pierian Training',
			stars: 3,
			rate: 4,
			rateNumber: '403,83',
			price: 'EL109.99',
			discount: 'EL1,879.99',
			bestSeller: '',
		},
	];

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
				{courses.map(course => (
					<SwiperSlide key={course.id}>
						<PythonSlider course={course} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default PythonAllSlider;
