import CourseDetailsBanner from "../CourseDetailsBanner/CourseDetailsBanner";
import CourseDetailsLeftSide from "../CourseDetailsLeftSide/CourseDetailsLeftSide";
import CourseDetailsRightSide from "../CourseDetailsRightSide/CourseDetailsRightSide";

const CourseDetails = () => {
    return (
        <div>
            <CourseDetailsBanner></CourseDetailsBanner>
            <div className=" grid grid-cols-3 px-10 mt-10">
                <div className=" col-span-2 pr-20">
                    <CourseDetailsLeftSide></CourseDetailsLeftSide>
                </div>
                <div>
                    <CourseDetailsRightSide></CourseDetailsRightSide>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;