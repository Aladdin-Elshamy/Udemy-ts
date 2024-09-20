import CheckIcon from '@mui/icons-material/Check';
import'../../../App.css'
const PythonHoverMenu = () => {
	return (
		<div>
			<div>
				<p className="text-xl font-medium">
					The Complete Python Bootcamp From Zero to Hero in Python
				</p>
				<p className="text-sm text-green-950 font-medium pt-1">
					Updated July 2023
				</p>
				<p className="text-sm py-2">
					22 total hoursAll LevelsSubtitles
				</p>
				<p className="text-sm pb-2">
					Learn Python like a Professional Start from the basics and
					go all the way to creating your own applications and games
				</p>

				<div className="flex">
					<CheckIcon sx={{ fontSize: '18px' }} />
					<p className="ml-3 text-sm">
						You will learn how to leverage the power of Python to
						solve tasks.
					</p>
				</div>

				<div className="flex py-2">
					<CheckIcon sx={{ fontSize: '18px' }} />
					<p className="ml-3 text-sm">
						You will build games and programs that use Python
						libraries.
					</p>
				</div>

				<div className="flex">
					<CheckIcon sx={{ fontSize: '18px' }} />
					<p className="ml-3 text-sm">
						You will be able to use Python for your own work
						problems or personal projects.
					</p>
				</div>

				<button className="bg-violet-800 w-full text-white p-2 mt-2">
					add to cart
				</button>
			</div>
		</div>
	);
};

export default PythonHoverMenu;
