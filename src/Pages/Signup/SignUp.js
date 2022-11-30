
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
// import { isCompositeComponent } from 'react-dom/test-utils';
// import useToken from '../../hooks/useToken';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, googleProviderLogin, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    // const[createdUserEmail, setCreatedUserEmail] = useState('')

    // const [token] = useToken(createdUserEmail)
    const location = useLocation()
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';

    // if(token){
    //     navigate('/');
    // }


    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('')

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
                toast('User Created Successfully')

                const userInfo = {
                    displayName: data.name,
                    AccountType: data.account
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.account);
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)

            });
    };

    const googleHandleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                getUserToken(user.email)
               

            })
            .catch(error => console.error(error))

    };


    const saveUser = (name, email, account) => {
        const user = { name, email, account };
        fetch('https://my-assignment12-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                getUserToken(email)
                // setCreatedUserEmail(email);

            })


    }

    const getUserToken = email => {
        fetch(`https://my-assignment12-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                  navigate('/')


                }
            });
    }



    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-97 p-7 bg-error rounded'>
                <h2 className="text-xl text-center">SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)} >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text'
                            {...register("name", {
                                required: "Name is required"
                            }
                            )}

                            className="input input-bordered w-full max-w-xs" />

                    </div>
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

                    </div>
                    <label className="label">
                        <span className="label-text">Select as a</span>
                    </label>
                    <select {...register("account", { required: true })}>

                        <option value="Byer">Byer</option>
                        <option value="Seller">Seller</option>
                    </select>
                    <input className='btn btn-accent w-full mt-4' value="SignUp" type="submit" />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <p>Already have an account ? <Link className='text-white font-bold' to='/login'>Please Login</Link></p>
                <div className="divider text-secondary font-bold">OR</div>
                <button onClick={googleHandleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;