import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth/useAuth";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

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