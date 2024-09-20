import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Testimoial } from '../../types/types';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from 'react-router-dom';
const TestimonialsDetails = ({ Testimoial }: { Testimoial: Testimoial }) => {
	return (
		<div>
			<div>
				<FontAwesomeIcon
					icon={faQuoteLeft}
					className="xsm:text-xl md:text-2xl text-gray-700 mb-2"
				/>
				<div className="mb-4">
					<div className="xsm:text-sm md:text-base">
						<p>
							{Testimoial.desc}
							<span className="font-bold">
								{Testimoial.specilaDesc}
							</span>
						</p>

						<p>{Testimoial.desc2}</p>
					</div>
				</div>
				<div className="md:absolute bottom-32 my-8 md:my-0 lg:my-0">
					<span className="bg-black text-white font-bold capitalize p-3 px-2 mr-2 rounded-full">
						{Testimoial.nameWithLetter}
					</span>
					{Testimoial.name}
				</div>
			</div>

			<hr className="md:absolute bottom-24 left-0 w-full my-4 md:my-0 lg:my-0" />
			<div className="flex items-center md:absolute bottom-6">
				<div>
					<PlayCircleIcon
						className="text-purple-800 mr-2"
						sx={{ fontSize: '50px' }}
					/>
				</div>
				<Link
					to={Testimoial.link}
					className="text-purple-800 font-bold xsm:text-xs md:text-lg capitalize"
				>
					{Testimoial.linkTitle}
				</Link>
			</div>
		</div>
	);
};

export default TestimonialsDetails;
