import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import TestimoialsTitle from '../../Element/Testimoials/TestimoialsTitle';
import TestimonilasSlider from './TestimonialsSlider';

const TestimonilasALLSlider = () => {
	const Testimoials = [
		{
			id: 1,
			desc: 'I am proud to say that after a few months of taking this course...',
			desc2: 'This content was exactly what the CCP exam covered.',
			specilaDesc:
				'I passed my exam and am now an AWS Certified Cloud Practitioner!',
			name: 'jone mark',
			nameWithLetter: 'j m',
			linkTitle: '[NEW] ultimate AWS certified cloud partitioner - 2022',
			link: '/',
		},
		{
			id: 2,
			desc: 'This course helped me',
			desc2: 'Thanks guys :)',
			specilaDesc: 'freshen up on my product manager skills and land a job at Facebook!',
			name: 'will peter',
			nameWithLetter: 'w p',
			link: '/',
			linkTitle: 'become a product manager | learn skills & get the job',
		},
		{
			id: 3,
			desc: 'I am proud to say that after a few months of taking this course...',
			desc2: 'This content was exactly what the CCP exam covered.',
			specilaDesc:
				'I passed my exam and am now an AWS Certified Cloud Practitioner!',
			name: 'jone mark',
			nameWithLetter: 'j m',
			linkTitle: '[NEW] ultimate AWS certified cloud partitioner - 2022',
			link: '/',
		},
		{
			id: 4,
			desc: 'from beginner to advanced',
			desc2: 'This content was exactly what the CCP exam covered.',
			specilaDesc: 'freshen up on my product manager skills and land a job at Facebook!',
			name: 'will peter',
			nameWithLetter: 'w p',
			link: '/',
			linkTitle: 'become a product manager | learn skills & get the job',
		},
		{
			id: 5,
			desc: 'I am proud to say that after a few months of taking this course...',
			desc2: 'This content was exactly what the CCP exam covered.',
			specilaDesc:
				'I passed my exam and am now an AWS Certified Cloud Practitioner!',
			name: 'jone mark',
			nameWithLetter: 'j m',
			linkTitle: '[NEW] ultimate AWS certified cloud partitioner - 2022',
			link: '/',
		},
		{
			id: 6,
			desc: 'from beginner to advanced',
			desc2: 'This content was exactly what the CCP exam covered.',
			specilaDesc: 'freshen up on my product manager skills and land a job at Facebook!',
			name: 'will peter',
			nameWithLetter: 'w p',
			link: '/',
			linkTitle: 'become a product manager | learn skills & get the job',
		},
	];

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
