import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const googleProvider = new GoogleAuthProvider();
    const { signIn,googleProviderLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');






    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }

    const googleHandleSignIn = () =>{
        googleProviderLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
           
        })
        .catch(error => console.error(error))
    }








    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-97 p-7 bg-error rounded'>
                <h2 className="text-xl text-center">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text'
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password'
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text"> Forget Password</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />

                    <div>
                        {loginError && <p className='text-red-600 font-bold'>{loginError}</p>}
                    </div>

                </form>
                <p>New to Mobile!mela? <Link className='text-white font-bold' to='/signup'>Create new account</Link></p>
                <div className="divider text-secondary font-bold">OR</div>
                <button onClick={googleHandleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>

    );
};

export default Login;