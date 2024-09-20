import ExcelDetails from '../../../Element/Courses/MicrosoftExcel/ExcelDetails';
import { Course } from '../../../types/types';
import ExcelHoverMenu from './ExcelHoverMenu';

const ExcelSlider = ({ course }: { course: Course }) => {
	return (
		<div className="flex flex-col box">
			{/* start details */}
			<ExcelDetails course={course} />

			{/* start hover menu */}
			<div className="menu">
				<ExcelHoverMenu />
			</div>
		</div>
	);
};

export default ExcelSlider;
