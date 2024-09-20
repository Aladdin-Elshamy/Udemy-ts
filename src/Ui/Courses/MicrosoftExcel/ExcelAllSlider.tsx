import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import ExcelTitle from './ExcelTitle';
import ExcelSlider from './ExcelSlider';
import { Navigation, Pagination } from 'swiper/modules';

const ExcelAllSlider = () => {
	const courses = [
		{
			id: 1,
			img: '/images/excel/1.jpg',
			title: 'Microsoft Excel - Excel course',
			desc: 'from beginner to advanced',
			instructor: 'Jose Portilla, Pierian Training',
			stars: 3,
			rate: 4,
			rateNumber: '403,83',
			price: 'EL109.99',
			discount: 'EL1,879.99',
		},
		{
			id: 2,
			img: '/images/excel/2.jpg',
			title: 'Zero to Hero in Excel',
			desc: 'Complete Excel guide 2024A Beginner',
			instructor: 'start-tech academy',
			stars: 4,
			rate: 4.2,
			rateNumber: '24,783',
			price: 'EL209.99',
			discount: 'EL1,555.99',
		},
		{
			id: 3,
			img: '/images/excel/3.jpg',
			title: 'Microsoft Excel Weekender',
			desc: 'crash course',
			instructor: 'start-tech academy',
			stars: 5,
			rate: 4.9,
			rateNumber: '203,83',
			price: 'EL309.99',
			discount: 'EL1,999.99',
		},
		{
			id: 4,
			img: '/images/excel/4.jpg',
			title: 'Ms Excel/Excel 2023',
			desc: 'The Complete Introduction to Excel',
			instructor: 'yassin marko',
			stars: 4,
			rate: 4.6,
			rateNumber: '503,83',
			price: 'EL250.99',
			discount: 'EL1,222.99',
		},
		{
			id: 5,
			img: '/images/excel/5.jpg',
			title: 'Microsoft Excel - Excel course',
			desc: 'from beginner to advanced',
			instructor: 'Jose Portilla, Pierian Training',
			stars: 3,
			rate: 4,
			rateNumber: '403,83',
			price: 'EL109.99',
			discount: 'EL1,879.99',
		},
		{
			id: 6,
			img: '/images/excel/1.jpg',
			title: 'Microsoft Excel - Excel course',
			desc: 'from beginner to advanced',
			instructor: 'Jose Portilla, Pierian Training',
			stars: 3,
			rate: 4,
			rateNumber: '403,83',
			price: 'EL109.99',
			discount: 'EL1,879.99',
		},
	];

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
				{courses.map(course => (
					<SwiperSlide key={course.id}>
						<ExcelSlider course={course} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ExcelAllSlider;
