import { Link } from 'react-router-dom';
import moment from 'moment';

const CourseCard = ({ course }) => {
    console.log(course);
    const { _id, courseBanner, courseName, batchNumber, courseFee, courseIntroduction, registrationEndDate, courseStartDate } = course || {};

    const remDays = moment(registrationEndDate).fromNow("days");

    return (
        <div className=" grid grid-cols-3 border shadow-lg h-96 rounded">

            <div className=' rounded-l overflow-hidden'>
                <img src={courseBanner} alt="" className=' w-full h-full' />
            </div>

            <div className=" col-span-2 p-5">
                <h2 className=' text-xl font-bold'>{courseName}</h2>
                <div className=' badge badge-accent'>
                    <p className=' text-sm font-semibold'>Batch <span>{batchNumber}</span></p>
                </div>
                <p className=' my-2'>{courseIntroduction?.length > 200 ? courseIntroduction.slice(0, 200) + "..." : courseIntroduction}</p>
                <p className=' font-bold mb-2'>Tk. <span>{courseFee}</span></p>
                <div className=' grid grid-cols-2'>
                    <div>
                        <h2 className=' mb-1 font-semibold'>Registration</h2>
                        <p className=' text-sm font-extrabold'><span>{remDays}</span> Days Remaining</p>
                        <p className=' text-sm'>Registration End: <span>{registrationEndDate}</span></p>
                    </div>
                    <div>
                        <h2 className=' mb-1 font-semibold'>Schedule</h2>
                        <p className=' text-sm font-extrabold'>Mon and Thu 09:00 PM - 11:00 PM</p>
                        <p className=' text-sm'>Starts From <span>{courseStartDate}</span></p>
                    </div>
                </div>
                <div className=" space-x-3 flex justify-end mt-6">
                    <Link to={""} className="btn btn-outline btn-primary">Add Favourites</Link>
                    <Link to={`/all-courses/${_id}`} className="btn btn-outline btn-primary">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;