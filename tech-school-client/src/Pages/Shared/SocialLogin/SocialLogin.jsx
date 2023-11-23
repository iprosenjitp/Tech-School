import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div>
            <input onClick={() => handleGoogleSignIn()} className='btn btn-outline w-full' value="Continue with google" type="submit" />
        </div>
    );
};

export default SocialLogin;