import CourseFeedback from "../CourseFeedback/CourseFeedback";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

const CourseDetailsRightSide = ({ course }) => {
    const { courseStartDate, registrationEndDate, selectedInstructor, } = course;

    return (
        <div>
            <div>
                <h2 className=' text-xl font-bold mb-3'>Schedule</h2>
                <p className=' text-sm font-extrabold'>Mon and Thu 09:00 PM - 11:00 PM</p>
                <p className=' text-sm'>Starts From <span>{courseStartDate}</span></p>
                <p className=' text-sm'>Registration End: <span>{registrationEndDate}</span></p>
            </div>

            <div className="mt-6 ">
                <h2 className=' text-xl font-bold mb-3'>Instructor</h2>
                <div className=" flex space-x-3 items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm font-extrabold">{selectedInstructor}</h2>
                        <h2 className="text-sm">Instructor, Tech School</h2>
                    </div>
                </div>
            </div>

            <div className=" mt-5">
                <FeedbackForm></FeedbackForm>
            </div>

            <div className=" mt-5">
                <h2 className="text-xl font-bold mb-2">What Students Said</h2>
                <CourseFeedback></CourseFeedback>
                <CourseFeedback></CourseFeedback>
            </div>

        </div>
    );
};

export default CourseDetailsRightSide;