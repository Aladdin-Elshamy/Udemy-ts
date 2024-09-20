import PythonDetails from '../../../Element/Courses/Python/PythonDetails';
import { Course } from '../../../types/types';
import PythonHoverMenu from './PythonHoverMenu';

const PythonSlider = ({ course }: { course: Course }) => {
	return (
		<div className="flex flex-col box">
			{/* start details */}
			<PythonDetails course={course} />

			{/* start hover menu */}
			<div className="menu">
				<PythonHoverMenu />
			</div>
		</div>
	);
};

export default PythonSlider;
