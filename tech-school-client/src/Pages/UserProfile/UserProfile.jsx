import Avatar from "../Shared/Navbar/Avatar";

const UserProfile = () => {
    return (
        <div className=" p-5 mx-40 flex flex-col justify-center items-center border">
            <div className=" mt-5 avatar">
                <div className=" w-40 rounded-full">
                    <Avatar></Avatar>
                </div>
            </div>

            <div className=" mt-5">
                <h1 className=" text-xl font-bold">Prosenjit Pal</h1>
            </div>

            <div className=" mt-5 w-96">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ea, totam dolorum commodi veniam quidem soluta doloremque sint inventore repellendus, ipsum cupiditate quas odio architecto non doloribus, eius eos enim!
                </p>
            </div>

            <div className=" w-full mt-5 flex justify-between">
                <div className="">
                    <div>
                        <h2>Current City: Dhaka, Bangladesh</h2>
                    </div>
                    <div>
                        <h2>Daffodil International University</h2>
                    </div>
                    <div>
                        <h2>Email: iprosenjit@gmail.com</h2>
                    </div>
                    <div>
                        <h2>Phone: 01747532251</h2>
                    </div>
                    <div>
                        <h2>Gender: Male</h2>
                    </div>
                    <div>
                        <h2>Role: Learner</h2>
                    </div>
                </div>
                <div className="">
                    <button className="btn btn-outline btn-primary">Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;