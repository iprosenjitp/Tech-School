import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;

                const saveUser = {
                    name: loggedUser?.displayName,
                    email: loggedUser?.email,
                    profilePicture: loggedUser?.photoURL,
                    role: "learner",
                };

                fetch(`${import.meta.env.VITE_API_URL}/users`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(saveUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            toast.success("Profile created successfully");
                            navigate("/");
                        }
                    });
            })
            .catch((error) => {
                toast.error(error.message);
            });
        // .then((result) => {
        //     const loggedUser = result.user;
        //     console.log(loggedUser);
        // })
        // .catch((error) => {
        //     toast.error(error.message);
        // });
    };

    return (
        <div>
            <input onClick={() => handleGoogleSignIn()} className='btn btn-outline w-full' value="Continue with google" type="submit" />
        </div>
    );
};

export default SocialLogin;