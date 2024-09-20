import CustomerDetails from '../../Element/CustomerStory/CustomerDetails';
import { Customer } from '../../types/types';

const CustomerSlider = ({ Customer }: { Customer: Customer }) => {
	return (
		<div className="border border-gray-300 p-7 md:pr-0 lg:pr-32 bg-white md:h-auto lg:h-[350px] relative">
			{/* start details */}
			<CustomerDetails Customer={Customer} />
		</div>
	);
};

export default CustomerSlider;
