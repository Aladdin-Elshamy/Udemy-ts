import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CustomerSlider from './CustomerSlider';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Customers } from '../../utils/constant';

const CustomerALLSlider = () => {

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
