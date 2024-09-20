import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Customer } from '../../types/types';
const CustomerDetails = ({ Customer }: { Customer: Customer }) => {
	return (
		<div>
			<div className="md:flex-col md:flex lg:flex lg:flex-row justify-between">
				<div>
					<div>
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="xsm:text-xl md:text-2xl text-gray-700 mb-2"
						/>
						<div className="mb-4 md:w-full lg:w-3/4">
							<div className="xsm:text-sm md:text-base">
								<p>
									{Customer.desc}
									<span className="font-bold">
										{Customer.specilaDesc}
									</span>
								</p>

								<p>{Customer.desc2}</p>
							</div>
						</div>
					</div>

					<div className="flex items-center md:absolute xsm:absolute xsm:bottom-2 md:bottom-2 lg:bottom-8 left-8">
						<Link
							to={Customer.fullStoryLink}
							className="text-purple-800 font-bold xsm:text-xs md:text-base capitalize underline"
						>
							read full story
						</Link>
					</div>
				</div>

				<div className="pt-10 text-center">
					<img
						className="customer-img rounded-full mb-3 m-auto"
						src={Customer.img}
						alt="customer"
					/>
					<p className="font-bold text-lg">{Customer.name}</p>
					<p>{Customer.job}</p>
					<p className="mt-3 mb-6">{Customer.address}</p>
				</div>
			</div>

		</div>
	);
};

export default CustomerDetails;
