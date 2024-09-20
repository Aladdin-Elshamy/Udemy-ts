import CourseHeader from '../Element/Courses/CourseHeader';
import AllTabs from '../Ui/Courses/Tabs';

const Courses = () => {
	return (
		<div className="p-4 md:p-8 lg:p-8">
			<CourseHeader />
			<AllTabs />
		</div>
	);
};

export default Courses;
