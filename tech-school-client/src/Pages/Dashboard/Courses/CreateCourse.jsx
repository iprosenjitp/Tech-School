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
            <div className="w-full p-7">
                <h2 className='text-4xl font-bold text-blue-700'>Create Course</h2>

                <form onSubmit={handleSubmit(handleCreateCourse)}>

                    <div className=" grid grid-cols-2 gap-4">
                        {/* Course Intro */}
                        <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Course Introduction</span>
                            </label>
                            <textarea
                                {
                                ...register("courseIntroduction", {
                                    required: "Course introduction is required",
                                })
                                }
                                className="textarea textarea-bordered border-2 w-full"
                            ></textarea>
                            {errors.courseIntroduction && <p className='text-red-600'>{errors.courseIntroduction?.message}</p>}
                        </div>

                        {/* Who Can Join This Course */}
                        <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Who can join this course?</span>
                            </label>
                            <textarea
                                {
                                ...register("courseLevel", {
                                    required: "Course level is required",
                                })
                                }
                                className="textarea textarea-bordered border-2 w-full"
                            ></textarea>
                            {errors.courseLevel && <p className='text-red-600'>{errors.courseLevel?.message}</p>}
                        </div>
                    </div>

                    <div className=" grid grid-cols-4 gap-4">
                        {/* Course Name */}
                        <div className="form-control w-full mt-2 col-span-3">
                            <label className="label">
                                <span className="label-text font-bold">Course Name</span>
                            </label>
                            <input
                                type="text"{
                                ...register("courseName", {
                                    required: "Course name is required"
                                })}
                                className="input input-bordered w-full border-2" />
                            {errors.courseName && <p className='text-red-600'>{errors.courseName?.message}</p>}
                        </div>

                        {/* Course Batch */}
                        <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Batch Number</span>
                            </label>
                            <input
                                type="number" {
                                ...register("batchNumber", {
                                    required: "Number is required",
                                })}
                                className="input input-bordered w-full border-2"
                            />
                            {errors.batchNumber && <p className='text-red-600'>{errors.batchNumber?.message}</p>}
                        </div>
                    </div>

                    <div className=" grid grid-cols-3 gap-3">
                        {/* Registration Start Date */}
                        <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Registration Start</span>
                            </label>
                            <input
                                type="date" {
                                ...register("registrationStartDate", {
                                    required: "Registration start date is required",
                                })}
                                className="input input-bordered w-full border-2"
                            />
                            {errors.registrationStartDate && <p className='text-red-600'>{errors.registrationStartDate?.message}</p>}
                        </div>

                        {/* Registration End Date */}
                        <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Registration End</span>
                            </label>
                            <input
                                type="date" {
                                ...register("registrationEndDate", {
                                    required: "Registration end date is required",
                                })}
                                className="input input-bordered w-full border-2"
                            />
                            {errors.registrationEndDate && <p className='text-red-600'>{errors.registrationEndDate?.message}</p>}
                        </div>

                        {/* Course Start Date */}
                        <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Course Start</span>
                            </label>
                            <input
                                type="date" {
                                ...register("courseStartDate", {
                                    required: "Course start date is required",
                                })}
                                className="input input-bordered w-full border-2"
                            />
                            {errors.courseStartDate && <p className='text-red-600'>{errors.courseStartDate?.message}</p>}
                        </div>
                    </div>

                    <div className=" grid grid-cols-3 gap-3">
                        {/* Course Duration */}
                        <div className="form-control w-full mt-2">
                            <label className="label font-bold">
                                <span className="label-text">Course Duration (In months)</span>
                            </label>
                            <input
                                type="number" {
                                ...register("courseDurationInMonths", {
                                    required: "Course duration is required",
                                    // You can add additional validation rules here
                                })}
                                className="input input-bordered w-full border-2"
                            />
                            {errors.courseDurationInMonths && <p className='text-red-600'>{errors.courseDurationInMonths?.message}</p>}
                        </div>

                        {/* Select Instructor */}
                        <div className="form-control w-full mt-2">
                            <label className="label font-bold">
                                <span className="label-text">Select Instructor</span>
                            </label>
                            <select
                                {
                                ...register("selectedInstructor", {
                                    required: "Instructor selection is required",
                                })
                                }
                                className="select select-bordered w-full border-2"
                            >
                                <option value="" disabled selected>Select an instructor</option>
                                <option value="instructor1">Instructor 1</option>
                                <option value="instructor2">Instructor 2</option>
                            </select>
                            {errors.selectedInstructor && <p className='text-red-600'>{errors.selectedInstructor?.message}</p>}
                        </div>

                        {/* Course Fee */}
                        <div className="form-control w-full mt-2">
                            <label className="label font-bold">
                                <span className="label-text">Course Fee (In Taka)</span>
                            </label>
                            <input
                                type="number" {
                                ...register("courseFee", {
                                    required: "Course Fee is required",
                                    // You can add additional validation rules here
                                })}
                                className="input input-bordered w-full border-2"
                            />
                            {errors.courseFee && <p className='text-red-600'>{errors.courseFee?.message}</p>}
                        </div>
                    </div>

                    {/* Course Outline */}
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text font-bold">Course Outline</span>
                        </label>
                        <textarea
                            {
                            ...register("courseOutline", {
                                required: "Course outline is required",
                            })
                            }
                            className="textarea textarea-bordered w-full h-32 border-2"
                        ></textarea>
                        {errors.courseOutline && <p className='text-red-600'>{errors.courseOutline?.message}</p>}
                    </div>

                    {/* Course Banner */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Course Banner</span>
                        </label>
                        <input
                            type="file"
                            {...register("courseBanner", {
                                required: "Course banner is required",
                            })}
                            className="input w-full"
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