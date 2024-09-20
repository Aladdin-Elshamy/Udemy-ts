import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CustomerSlider from './CustomerSlider';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CustomerALLSlider = () => {
	const Customers = [
		{
			id: 1,
			desc: 'Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its',
			desc2: 'that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.',
			specilaDesc:
				'data scientists, with highly relevant and in-demand tech skills',
			img: '/images/customer-story/1.jpeg',
			name: 'Jim Hemgen',
			job: 'Principal',
			address: 'Booz Allen Hamilton',
			fullStoryLink: '/',
			customerLink: '/',
		},
		{
			id: 2,
			desc: 'I am proud to say that after a few months of taking this course...',
			desc2: 'This content was exactly what the CCP exam covered.',
			specilaDesc:
				'I passed my exam and am now an AWS Certified Cloud Practitioner!',
			img: '/images/customer-story/1.jpeg',
			name: 'Jim Hemgen',
			job: 'Principal',
			address: 'Booz Allen Hamilton',
			fullStoryLink: '/',
			customerLink: '/',
		},
		{
			id: 3,
			desc: 'I am proud to say that after a few months of taking this course...',
			desc2: 'This content was exactly what the CCP exam covered.',
			specilaDesc:
				'I passed my exam and am now an AWS Certified Cloud Practitioner!',
			img: '/images/customer-story/1.jpeg',
			name: 'Jim Hemgen',
			job: 'Principal',
			address: 'Booz Allen Hamilton',
			fullStoryLink: '/',
			customerLink: '/',
		},
		{
			id: 4,
			desc: 'I am proud to say that after a few months of taking this course...',
			desc2: 'This content was exactly what the CCP exam covered.',
			specilaDesc:
				'I passed my exam and am now an AWS Certified Cloud Practitioner!',
			img: '/images/customer-story/1.jpeg',
			name: 'Jim Hemgen',
			job: 'Principal',
			address: 'Booz Allen Hamilton',
			fullStoryLink: '/',
			customerLink: '/',
		},
		{
			id: 5,
			desc: 'I am proud to say that after a few months of taking this course...',
			desc2: 'This content was exactly what the CCP exam covered.',
			specilaDesc:
				'I passed my exam and am now an AWS Certified Cloud Practitioner!',
			img: '/images/customer-story/1.jpeg',
			name: 'Jim Hemgen',
			job: 'Principal',
			address: 'Booz Allen Hamilton',
			fullStoryLink: '/',
			customerLink: '/',
		},
		{
			id: 6,
			desc: 'I am proud to say that after a few months of taking this course...',
			desc2: 'This content was exactly what the CCP exam covered.',
			specilaDesc:
				'I passed my exam and am now an AWS Certified Cloud Practitioner!',
			img: '/images/customer-story/1.jpeg',
			name: 'Jim Hemgen',
			job: 'Principal',
			address: 'Booz Allen Hamilton',
			fullStoryLink: '/',
			customerLink: '/',
		},
	];

	return (
		<div>
			<Swiper
				slidesPerView={1}
				centeredSlides={false}
				spaceBetween={30}
				pagination={{ type: 'fraction' }}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper customer-swiper"
			>
				{Customers.map(Customer => (
					<SwiperSlide
						className="testimonial-swiper-slider"
						key={Customer.id}
					>
						<CustomerSlider Customer={Customer} />
					</SwiperSlide>
				))}
			</Swiper>
			<Link to="/">
				<div className="flex items-center justify-center mt-0 text-purple-700 capitalize font-bold">
					<p>view more customer stories</p>
					<ChevronRightIcon className="pt-1" />
				</div>
			</Link>
		</div>
	);
};

export default CustomerALLSlider;
