import { useLoaderData, useNavigate } from "react-router-dom";
import Avatar from "../Shared/Navbar/Avatar";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../Hooks/useAxios/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateUserProfile = () => {
    const [axiosSecure] = useAxiosSecure();

    const userInfo = useLoaderData();

    const navigate = useNavigate();

    const { _id, name, email, phone, biography, institution, linkedIn, profilePicture } = userInfo || {};
    // console.log(userInfo);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgHostingURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`

    const handleUpdateUserProfile = (data) => {
        // console.log(data);
        if (data.profilePicture[0] === undefined) {
            data.profilePicture = profilePicture;
            axiosSecure.put(`${import.meta.env.VITE_API_URL}/users/${_id}`, data)
                .then(data => {
                    console.log(data);
                    if (data.data.modifiedCount > 0) {
                        reset();
                        toast.success("Profile update successfully");
                        navigate("/user-profile");
                    }
                })
        }
        else {
            const formData = new FormData();
            formData.append("image", data.profilePicture[0]);

            fetch(imgHostingURL, {
                method: "POST",
                body: formData,
            })
                .then(res => res.json())
                .then(imgResponse => {
                    data.profilePicture = imgResponse.data.display_url
                    axiosSecure.put(`${import.meta.env.VITE_API_URL}/users/${_id}`, data)
                        .then(data => {
                            console.log(data);
                            if (data.data.modifiedCount > 0) {
                                reset();
                                toast.success("Profile update successfully");
                                navigate("/user-profile");
                            }
                        })
                })
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className=" ">
                <h2 className='text-4xl text-center'>Update your profile</h2>
                <form onSubmit={handleSubmit(handleUpdateUserProfile)}>
                    <div className=" mt-5 avatar flex items-center">
                        <div className=" w-40 rounded-full ">
                            {
                                profilePicture ? <img src={profilePicture} alt="" className="w-full object-cover" /> : <Avatar></Avatar>
                            }
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Change Picture</span>
                            </label>
                            <input
                                type="file"
                                {...register("profilePicture", {
                                })}
                                className="input w-full max-w-xs"
                            />
                        </div>

                        {/* <div className="relative mt-1">
                            <input
                                type="file"
                                {...register("profilePicture", {
                                    required: "Course banner is required",
                                })}
                                className=" hidden btn btn-accent w-full max-w-xs"
                                id="profilePictureInput"
                                onChange={(e) => {
                                    setValue("profilePicture", e.target.files[0]);
                                }}
                            />
                            <button type="button" className="btn btn-secondary" onClick={() => document.getElementById("profilePictureInput").click()}>
                                Choose File
                            </button>
                        </div> */}

                        {/* <input className=' ml-3 btn btn-accent w-32' value="Change Picture" type="submit" /> */}
                    </div>

                    <div className="mt-5 form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"{
                            ...register("name", {
                                required: "Name is required"
                            })}
                            defaultValue={name}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="mt-5 form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input
                            type="email"{
                            ...register("email", {
                                required: "Email is required"
                            })}
                            defaultValue={email}
                            readOnly
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="mt-5 form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        {/* <input
                        type="number"{
                        ...register("phone")}
                        placeholder="01711111111"
                        className="input input-bordered w-full max-w-xs" />
                    {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>} */}
                        <input type="tel"
                            // placeholder="Mobile number"
                            {...register("phone", {
                                minLength: 11,
                                maxLength: 11
                            })}
                            defaultValue={phone}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                    </div>

                    <div className="mt-5 form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Biography</span>
                        </label>
                        <textarea
                            type="text"{
                            ...register("biography")}
                            // placeholder="A short introduction about yourself. This would be visible to visitors of Tech School website"
                            defaultValue={biography}
                            className="input input-bordered w-full max-w-xs h-32" />
                        {errors.biography && <p className='text-red-600'>{errors.biography?.message}</p>}
                    </div>

                    <div className="mt-5 form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <div className=" flex gap-5">
                            <label>
                                <input type="radio"
                                    value="male"
                                    {...register("gender")}
                                    // defaultValue={gender && gender === "male" ? defaultChecked : ""}
                                    defaultChecked
                                />
                                <span className=" ml-2">Male</span>
                            </label>

                            <label>
                                <input type="radio"
                                    value="female"
                                    {...register("gender")}
                                />
                                <span className=" ml-2">Female</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-5 form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">School/College/University</span>
                        </label>
                        <input
                            type="text"{
                            ...register("institution")}
                            // placeholder="XYZ University"
                            defaultValue={institution}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.institution && <p className='text-red-600'>{errors.institution?.message}</p>}
                    </div>

                    <div className="mt-5 form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">LinkedIn Profile Link</span>
                        </label>
                        <input
                            type="text"{
                            ...register("linkedIn")}
                            // placeholder="https://www.linkedin.com/in/iprosenjitp/"
                            defaultValue={linkedIn}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.linkedIn && <p className='text-red-600'>{errors.linkedIn?.message}</p>}
                    </div>

                    <div className="mt-5 flex items-center justify-center">
                        <input className=' btn btn-accent w-32' value="Save Changes" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUserProfile;