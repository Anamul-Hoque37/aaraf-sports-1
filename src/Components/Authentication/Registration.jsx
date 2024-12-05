import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import swal from 'sweetalert';
import auth from '../../../Firebase.config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthContext } from './AuthProvider';

const Registration = () => {
    
    const {createNewUser, setUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const provider = new GoogleAuthProvider()
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit=(e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name =form.get("name")
        const photo =form.get("photo")
        const email =form.get("email")
        const password =form.get("password")
        createNewUser(email, password)

        if (password.length < 6) {
            setError({...error, password:"Password must be at least 6 characters long."});
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setError({...error, password:"Password must contain at least one uppercase letter."});
            return
        }
        else if (!/[a-z]/.test(password)) {
            setError({...error, password:"Password must contain at least one lowercase letter."})
            return
        }
        setError('')

        

        .then(result =>{
            const user = result.user;
            setUser(user)
            updateUserProfile({displayName:name, photoURL:photo})
            .then(()=>{
                navigate("/")
            }).catch(err =>{
            })
           
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
          swal("Welcome to my website");
    };

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
                        <button onClick={()=> setShowPassword(!showPassword)} className='btn btn-xs absolute right-4 top-12'>
                        {
                            showPassword ? <FaEyeSlash /> : <FaEye />
                        }
                        </button>
                        {
                            error.password && (
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
                    <button onClick={handleGoogleSignIn} className='btn w-full bg-slate-400 '>Login With Google</button>
                </div>
            </div>

        </div>
    );
};

export default Registration;