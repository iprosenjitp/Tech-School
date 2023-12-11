import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxios/useAxiosSecure";
import toast from "react-hot-toast";

const CreateCourse = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imgHostingURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`

    const handleCreateCourse = (data) => {
        // console.log(data);
        const formData = new FormData();
        formData.append("image", data.courseBanner[0]);

        fetch(imgHostingURL, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(imgResponse => {
                data.courseBanner = imgResponse.data.display_url
                axiosSecure.post(`${import.meta.env.VITE_API_URL}/courses`, data)
                    .then(res => {
                        console.log(res);
                        if (res.data.insertedId) {
                            toast.success("Course created successfully!")
                        }
                        else {
                            toast.error(res.data.message);
                        }
                    })
            })
    }


    return (
        <div className="flex justify-center items-center">
            <div className="w-96 p-7">
                <h2 className='text-4xl text-center'>Create Course</h2>
                <form onSubmit={handleSubmit(handleCreateCourse)}>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">Course Name</span>
                        </label>
                        <input
                            type="text"{
                            ...register("courseName", {
                                required: "Course name is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.courseName && <p className='text-red-600'>{errors.courseName?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">Batch Number</span>
                        </label>
                        <input
                            type="number" {
                            ...register("batchNumber", {
                                required: "Number is required",
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.batchNumber && <p className='text-red-600'>{errors.batchNumber?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">Who can join this course?</span>
                        </label>
                        <textarea
                            {
                            ...register("courseLevel", {
                                required: "Course level is required",
                            })
                            }
                            className="textarea textarea-bordered w-full max-w-xs"
                        ></textarea>
                        {errors.courseLevel && <p className='text-red-600'>{errors.courseLevel?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">Course Outline</span>
                        </label>
                        <textarea
                            {
                            ...register("courseOutline", {
                                required: "Course outline is required",
                            })
                            }
                            className="textarea textarea-bordered w-full max-w-xs h-32"
                        ></textarea>
                        {errors.courseOutline && <p className='text-red-600'>{errors.courseOutline?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">Select Instructor</span>
                        </label>
                        <select
                            {
                            ...register("selectedInstructor", {
                                required: "Instructor selection is required",
                            })
                            }
                            className="select select-bordered w-full max-w-xs"
                        >
                            <option value="" disabled selected>Select an instructor</option>
                            <option value="instructor1">Instructor 1</option>
                            <option value="instructor2">Instructor 2</option>
                        </select>
                        {errors.selectedInstructor && <p className='text-red-600'>{errors.selectedInstructor?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">Course Duration (In months)</span>
                        </label>
                        <input
                            type="number" {
                            ...register("courseDurationInMonths", {
                                required: "Course duration is required",
                                // You can add additional validation rules here
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.courseDurationInMonths && <p className='text-red-600'>{errors.courseDurationInMonths?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">Registration Start</span>
                        </label>
                        <input
                            type="date" {
                            ...register("registrationStartDate", {
                                required: "Registration start date is required",
                                // You can add additional validation rules here
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.registrationStartDate && <p className='text-red-600'>{errors.registrationStartDate?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">Registration End</span>
                        </label>
                        <input
                            type="date" {
                            ...register("registrationEndDate", {
                                required: "Registration end date is required",
                                // You can add additional validation rules here
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.registrationEndDate && <p className='text-red-600'>{errors.registrationEndDate?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Course Banner</span>
                        </label>
                        <input
                            type="file"
                            {...register("courseBanner", {
                                required: "Course banner is required",
                            })}
                            className="input w-full max-w-xs"
                        />
                        {errors.courseBanner && <p className='text-red-600'>{errors.courseBanner?.message}</p>}
                    </div>

                    <div className=" w-full max-w-xs mt-2">
                        <input className='btn btn-accent w-full' value="Create Course" type="submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateCourse;