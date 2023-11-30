import { useLoaderData } from "react-router-dom";
import Avatar from "../Shared/Navbar/Avatar";
import { useForm } from 'react-hook-form';


const UpdateUserProfile = () => {
    const userInfo = useLoaderData();
    const { name, email } = userInfo || {};
    console.log(userInfo);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleUpdateUserProfile = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleUpdateUserProfile)}>
                <div className=" mt-5 avatar">
                    <div className=" w-40 rounded-full">
                        <Avatar></Avatar>
                    </div>
                </div>

                <div className="form-control w-full max-w-xs">
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

                <div className="form-control w-full max-w-xs">
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

                <div className="form-control w-full max-w-xs">
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
                        placeholder="Mobile number"
                        {...register("phone", {
                            minLength: 11,
                            maxLength: 11
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Biography</span>
                    </label>
                    <textarea
                        type="text"{
                        ...register("biography")}
                        placeholder="A short introduction about yourself. This would be visible to visitors of Tech School website"
                        className="input input-bordered w-full max-w-xs h-32" />
                    {errors.biography && <p className='text-red-600'>{errors.biography?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Gender</span>
                    </label>
                    <div className=" flex gap-5">
                        <label>
                            <input type="radio"
                                value="male"
                                {...register("gender")}
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

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">School/College/University</span>
                    </label>
                    <input
                        type="text"{
                        ...register("institution")}
                        placeholder="XYZ University"
                        className="input input-bordered w-full max-w-xs" />
                    {errors.institution && <p className='text-red-600'>{errors.institution?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">LinkedIn Profile Link</span>
                    </label>
                    <input
                        type="text"{
                        ...register("linkedIn")}
                        placeholder="https://www.linkedin.com/in/iprosenjitp/"
                        className="input input-bordered w-full max-w-xs" />
                    {errors.linkedIn && <p className='text-red-600'>{errors.linkedIn?.message}</p>}
                </div>

                <input className='btn btn-accent w-32' value="Save Changes" type="submit" />
            </form>
        </div>
    );
};

export default UpdateUserProfile;