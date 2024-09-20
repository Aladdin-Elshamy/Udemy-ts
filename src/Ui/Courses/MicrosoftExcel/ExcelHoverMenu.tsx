import CheckIcon from '@mui/icons-material/Check';

const ExcelHoverMenu = () => {
	return (
		<div>
			<div>
				<p className="text-xl font-medium">
					Microsoft Excel - Excel from Beginner to Advanced
				</p>
				<p className="text-sm text-green-950 font-medium pt-1">
					Updated April 2024
				</p>
				<p className="text-sm py-2">
					21 total hoursAll LevelsSubtitles
				</p>
				<p className="text-sm pb-2">
					Excel with this A-Z Microsoft Excel Course. Microsoft Excel
					2010, 2013, 2016, Excel 2019 and Microsoft/Office 365/2024
				</p>

				<div className="flex">
					<CheckIcon sx={{ fontSize: '18px' }} />
					<p className="ml-3 text-sm">
						Master Microsoft Excel from Beginner to Advanced
					</p>
				</div>

				<div className="flex py-2">
					<CheckIcon sx={{ fontSize: '18px' }} />
					<p className="ml-3 text-sm">
						Learn the most common Excel functions used in the Office
					</p>
				</div>

				<div className="flex">
					<CheckIcon sx={{ fontSize: '18px' }} />
					<p className="ml-3 text-sm">
						Build a solid understanding on the Basics of Microsoft
						Excel
					</p>
				</div>

				<button className="bg-violet-800 w-full text-white p-2 mt-2">
					add to cart
				</button>
			</div>
		</div>
	);
};

export default ExcelHoverMenu;
