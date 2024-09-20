import TestimonialsDetails from '../../Element/Testimoials/TestimonialsDetails';
import { Testimoial } from '../../types/types';

const TestimonilasSlider = ({ Testimoial }: { Testimoial: Testimoial }) => {
	return (
		<div className="border border-gray-300 p-4 bg-white testimonil-box relative">
			{/* start details */}
			<TestimonialsDetails Testimoial={Testimoial} />
		</div>
	);
};

export default TestimonilasSlider;
