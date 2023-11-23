import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import avatarImg from "../../../assets/avatar/avatar.jpg";

const Avatar = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <img src={user && user.photoURL ? user.photoURL : avatarImg} alt="" />
        </>
    );
};

export default Avatar;