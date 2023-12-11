import { Link } from "react-router-dom";

const CourseRow = ({ course, idx }) => {
    return (
        <tr>
            <th>
                {idx + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className=" w-40 h-20 rounded">
                            <img src={course?.courseBanner} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{course?.courseName}</div>
                    </div>
                </div>
            </td>
            <td>
                {course?.batchNumber}
            </td>
            <td className=" capitalize">
                {course?.selectedInstructor}
            </td>
            <th>
                <Link to={""} className="btn btn-ghost btn-xs">Details</Link>
            </th>
        </tr>
    );
};

export default CourseRow;