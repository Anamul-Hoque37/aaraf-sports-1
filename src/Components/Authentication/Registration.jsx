import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import auth from '../../../Firebase.config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthContext } from './AuthProvider';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Registration = () => {

    const { createNewUser, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const provider = new GoogleAuthProvider()
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")


        if (password.length < 6) {
            setError({ ...error, password: "Password must be at least 6 characters long." });
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setError({ ...error, password: "Password must contain at least one uppercase letter." });
            return
        }
        else if (!/[a-z]/.test(password)) {
            setError({ ...error, password: "Password must contain at least one lowercase letter." })
            return
        }
        // setError('')
        createNewUser(email, password)

            .then(result => {
                // const user = result.user;
                // setUser(user)
                Swal.fire({
                    title: 'success',
                    text: 'Successfully login',
                    icon: 'success',
                });
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    title: 'Error',
                    text: 'auth/network-request-failed',
                    icon: 'error',
                    footer: `${errorCode, errorMessage}`
                });
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate("/")
                alert('Successfully login with Google', result)
            })
            .catch(error => {
                alert('Cannot Login', error)
            })
    }

    return (
        <div className='py-10 flex flex-col gap-4 justify-center bg-gray-100 items-center px-6 sm:px-8 md:px-10 lg:px-12'>
            <div className="card bg-base-100 w-full sm:w-11/12 md:w-10/12 lg:w-3/4 mx-auto">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input name="photo" type="text" placeholder="Photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
                        <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-4 top-12'>
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </button>
                        {
                            error && (
                                <label className="label">
                                    {error.password}
                                </label>
                            )
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign In</button>
                    </div>
                    <p>Have an account ? <Link className="text-red-600 font-bold" to="/login">Login</Link> </p>
                </form>
                <div className='w-full p-8 mx-auto'>
                    <button onClick={handleGoogleSignIn} className='btn w-full text-white bg-indigo-500 hover:bg-indigo-800'>Login With Google</button>
                </div>
            </div>
            <div className='text-sm border p-2 px-8 bg-gradient-to-r from-blue-900 via-slate-300 to-indigo-900 rounded-lg'>
                <Link to='/' className='flex justify-center text-white items-center gap-5'> <FaArrowLeftLong /> Back to Home Page</Link>
            </div>
        </div>
    );
};

export default Registration;