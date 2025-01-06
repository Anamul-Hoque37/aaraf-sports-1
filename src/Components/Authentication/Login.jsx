import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import auth from '../../../Firebase.config';
import { AuthContext } from './AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const provider = new GoogleAuthProvider()
    const { userLogin } = useContext(AuthContext)
    const [error, setError] = useState({});
    const location = useLocation();
    const emailRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                navigate(location?.state ? location.state : "/")
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
                Swal.fire({
                    title: 'Error',
                    text: 'auth/network-request-failed',
                    icon: 'error',
                    footer: 'Please check your internet connection and try again.'
                });
            })
        // Swal("successfully login")
    };

    // const handleForgetPassword=()=>{
    //     const email = emailRef.current.value;
    //     if(!email){
    //         alert('Please provide a valid email address')
    //     }
    //     else{
    //         sendPasswordResetEmail(auth, email)
    //         .then(()=>{
    //             alert('Password Reset email sent, please check your email')
    //         })
    //     }
    // }
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
            <div className="card bg-base-100 w-full md:w-10/12 lg:w-3/4 mx-auto rounded-lg">
                <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-2xl font-bold text-center">Login Your Account</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" ref={emailRef} type="email" placeholder="email" className="input input-bordered" required />
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
                            error.login && <label className="label text-yellow-300 text-xs">
                                wrong password !!!
                            </label>
                        }
                        {/* <label onClick={handleForgetPassword} className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Don't have an account ? <Link className="text-red-600 font-bold" to="/register">Register</Link> </p>
                </form>
                <div className='p-8 w-full mx-auto'>
                    <button onClick={handleGoogleSignIn} className='btn w-full bg-indigo-500 hover:bg-indigo-800'>Login With Google</button>
                </div>
            </div>
            <div className='text-sm border p-2 bg-indigo-700 rounded-lg'>
                <Link to='/' className='flex justify-center text-white items-center gap-5'> <FaArrowLeftLong /> Back to Home Page</Link>
            </div>
        </div>
    );
};

export default Login;