import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import swal from 'sweetalert';
import auth from '../../../Firebase.config';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const provider = new GoogleAuthProvider()
    const {userLogin, setUser}= useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const emailRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password =form.password.value;
        userLogin(email,password)
        .then(result=>{
            const user=result.user
            setUser(user)
            navigate(location?.state ? location.state : "/")
        })
        .catch((err)=>{
            setError({...error, login: err.code});
            Swal.fire({
                title: 'Error',
                text: 'auth/network-request-failed',
                icon: 'error',
                footer: 'Please check your internet connection and try again.'
            });
        })
        swal("successfully login")
    };

    const handleForgetPassword=()=>{
        const email = emailRef.current.value;
        if(!email){
            alert('Please provide a valid email address')
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(()=>{
                alert('Password Reset email sent, please check your email')
            })
        }
    }
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then((result) =>{
            navigate("/")
            alert('Successfully login with Google',result)
        })
        .catch(error =>{
            alert('Cannot Login', error)
        })
    }

    return (
        <div>
            <div className="card bg-base-100 w-2/4 mx-auto shrink-0 shadow-2xl">
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
                        <button onClick={()=> setShowPassword(!showPassword)} className='btn btn-xs absolute right-4 top-12'>
                        {
                            showPassword ? <FaEyeSlash /> : <FaEye />
                        }
                         </button>
                        {
                            error.login && <label className="label text-yellow-300 text-xs">
                            wrong password !!!
                        </label>
                        }
                        <label onClick={handleForgetPassword} className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Don't have an account ? <Link className="text-red-600 font-bold" to="/register">Register</Link> </p>
                </form>
                <div className='p-8 w-full mx-auto'>
                    <button onClick={handleGoogleSignIn} className='btn w-full bg-slate-400 '>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;