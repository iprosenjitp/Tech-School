import { Link } from 'react-router-dom';
import CProgLangImg from '../../../assets/images/C-Prog-Lang.png';

const CourseCard = () => {
    return (
        <div className=" grid grid-cols-3 border shadow-lg h-96 rounded">
            <div className=' rounded-l overflow-hidden'>
                <img src={CProgLangImg} alt="" className=' w-full h-full' />
            </div>
            <div className=" col-span-2 p-5">
                <h2 className=' text-xl font-bold'>C Programming Language</h2>
                <div className=' badge badge-accent'>
                    <p className=' text-sm font-semibold'>Batch <span>5</span></p>
                </div>
                <p className=' my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quidem cumque provident perspiciatis, quod, perferendis numquam architecto delectus, ut esse animi harum expedita</p>
                <p className=' font-bold mb-2'>Tk. <span>2000</span></p>
                <div className=' grid grid-cols-2'>
                    <div>
                        <h2 className=' mb-1 font-semibold'>Registration</h2>
                        <p className=' text-sm font-extrabold'><span>10</span> Days Remaining</p>
                        <p className=' text-sm'>Registration End: <span>20 December 2023</span></p>
                    </div>
                    <div>
                        <h2 className=' mb-1 font-semibold'>Schedule</h2>
                        <p className=' text-sm font-extrabold'>Mon and Thu 09:00 PM - 11:00 PM</p>
                        <p className=' text-sm'>Starts From <span>22 December 2023</span></p>
                    </div>
                </div>
                <div className=" space-x-3 flex justify-end mt-6">
                    <Link to={""} className="btn btn-outline btn-primary">Add Favourites</Link>
                    <Link to="/course-details" className="btn btn-outline btn-primary">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;