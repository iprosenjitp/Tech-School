import AllCoursesBannerImg from "../AllCoursesBannerImg/AllCoursesBannerImg";
import CourseCard from "../CourseCard/CourseCard";
import TeacherImg from '../../../assets/images/TeachersImg.png';


const AllCourses = () => {
    return (
        <div>
            <AllCoursesBannerImg></AllCoursesBannerImg>
            <div className="my-20 mx-10">
                <h2 className=" text-2xl font-bold">All Courses</h2>
                <div className="grid grid-cols-3 mt-5">
                    <div className="col-span-2 pr-5 space-y-3">
                        <CourseCard></CourseCard>
                        <CourseCard></CourseCard>
                    </div>
                    <div className=" p-4 border space-y-5 rounded drop-shadow-lg">
                        <img src={TeacherImg} alt="" />
                        <div className=" space-y-3">
                            <p className=" font-semibold">Online courses are planned by industry professionals to make sure that you have the knowledge to build professional software</p>
                            <button className="btn btn-outline btn-primary btn-wide">See Our Instructors</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllCourses;