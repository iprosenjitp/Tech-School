import { Link } from 'react-router-dom';

const CourseDetailsBanner = ({ course }) => {

    const { courseName, batchNumber, courseFee, courseBanner } = course;

    return (
        <div className=''>
            <div className=' grid grid-cols-4 justify-center shadow-lg'>
                <div className=' col-span-3 px-10 pt-3'>
                    <h2 className=' text-3xl font-bold text-blue-600'>{courseName}</h2>
                    <div className=' badge badge-accent'>
                        <p className=' text-sm font-semibold'>Batch <span>{batchNumber}</span></p>
                    </div>
                    <p className=' font-bold my-3'>Tk. <span>{courseFee}</span></p>
                    <div className="">
                        <Link to={""} className="btn btn-outline btn-primary">Register Now</Link>
                        <Link to="/classroom" className="btn btn-outline btn-primary">Enter Classroom</Link>
                    </div>
                </div>
                <div>
                    <img src={courseBanner} alt="" className=' w-full h-48' />
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsBanner;