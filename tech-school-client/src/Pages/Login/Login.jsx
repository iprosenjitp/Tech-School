import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useAuth from '../../Hooks/useAuth/useAuth';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useAuth();
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.form?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            });
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"{
                            ...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError &&
                            <p className=' text-red-600'>
                                {loginError}
                            </p>
                        }
                    </div>
                </form>
                <p>New to Tech School <Link className='text-primary' to="/signup">Create New Account</Link></p>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;