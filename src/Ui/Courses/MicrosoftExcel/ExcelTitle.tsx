const ExcelTitle = () => {
	return (
		<div>
			<div className="course-title">
				<h2 className="text-2xl font-bold">
					Analyze and visualize data with Excel
				</h2>

				<p className="my-3 w-4/6">
					Take a Microsoft Excel course from Udemy, and learn how to
					use this industry-standard software. Real-world experts will
					show you the basics like how to organize data into sheets,
					rows and columns, and advanced techniques like creating
					complex dynamic formulas. Both small businesses and large
					companies use Excel to...
				</p>

				<button className="bg-white border border-gray-500 px-3 py-2 capitalize font-medium relative z-10">
					explore microsoft excel
				</button>
			</div>
			<div>
				<h2 className="capitalize text-2xl font-medium md:hidden lg:hidden mb-5">
					microsoft excel
				</h2>
			</div>
		</div>
	);
};

export default ExcelTitle;
