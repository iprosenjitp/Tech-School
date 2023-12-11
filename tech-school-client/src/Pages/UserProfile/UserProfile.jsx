import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxios/useAxiosSecure";
import Avatar from "../Shared/Navbar/Avatar";
// import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Link } from "react-router-dom";

const UserProfile = () => {
    // const { id } = useParams();
    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    });

    const currentUser = users.find(userInfo => userInfo?.email === user?.email);

    const { _id, name, email, role, gender, biography, currCity, institution, phone, profilePicture } = currentUser || {};

    return (
        <div className=" p-5 mx-40 flex flex-col justify-center items-center border">
            <div className=" mt-5 avatar">
                <div className=" w-40 rounded-full">
                    {
                        profilePicture ? <img src={profilePicture} alt="" className="w-full object-cover" /> : <Avatar></Avatar>
                    }
                </div>
            </div>

            <div className=" mt-5">
                <h1 className=" text-xl font-bold">{name}</h1>
            </div>

            {
                biography &&
                <div className=" mt-5 w-96">
                    <p>
                        {biography}
                    </p>
                </div>
            }

            <div className=" w-full mt-5 flex justify-between">
                <div className="">
                    {
                        currCity &&
                        <div>
                            <h2>Current City: <span>{currCity}</span></h2>
                        </div>
                    }
                    {
                        institution &&
                        <div>
                            <h2>{institution}</h2>
                        </div>
                    }
                    <div>
                        <h2>Email: {email}</h2>
                    </div>
                    {
                        phone &&
                        <div>
                            <h2>Phone: <span>{phone}</span></h2>
                        </div>
                    }
                    {
                        gender &&
                        <div>
                            <h2>Gender: <span>{gender}</span></h2>
                        </div>
                    }
                    <div>
                        <h2 >Role: <span className=" capitalize">{role}</span></h2>
                    </div>
                </div>
                <div className="">
                    <Link className="btn btn-outline btn-primary" to={`/update-profile/${_id}`}>Edit Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;