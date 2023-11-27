import avatarImg from "../../../assets/avatar/avatar.jpg";
import useAuth from "../../../Hooks/useAuth/useAuth";

const Avatar = () => {
    const { user } = useAuth();

    return (
        <>
            <img src={user && user.photoURL ? user.photoURL : avatarImg} alt="" />
        </>
    );
};

export default Avatar;