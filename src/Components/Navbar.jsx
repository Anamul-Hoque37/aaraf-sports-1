import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './Authentication/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const userEmail = user?.email;

    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }, []);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    };
    const Links = <>
        <li><NavLink to="/" >Home</NavLink></li>
        {
            user && <> <li><NavLink to={`/my/${userEmail}`}>My Equipment List</NavLink></li> </>
        }
        {
            user && <> <li><NavLink to="/add">Add Equipment</NavLink></li> </>
        }
        <li><NavLink to="/sports">All Sports Equipment</NavLink></li>
    </>
    return (
        <div className='bg-gray-800 sticky top-0 z-20'>
            <div className="navbar text-white px-6 md:px-10 lg:px-14 bg-indigo-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-indigo-800 rounded-box z-10 mt-3 w-48 p-2 shadow">
                            {
                                Links
                            }
                        </ul>
                    </div>
                    <Zoom>
                    <p className="btn btn-ghost text-xl">Aaraf Sports</p>
                    </Zoom>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex-none">
                        <label className="swap swap-rotate">
                            {/* This checkbox toggles the dark mode */}
                            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                            {/* Light mode and Dark Mode icon */}        
                            <div className='text-5xl items-center text-center md:pr-4'>
                            {isDarkMode? <CiLight /> : <MdDarkMode />}
                            </div>
                        </label>
                    </div>
                    <div className='flex sm:justify-start lg:justify-end gap-3 items-center shadow p-2 rounded-box px-4'>
                        {user && user?.email ? (<div><img className='w-14 h-14 rounded-full relative' src={user.photoURL} alt="" />
                            <p className='text-xl opacity-0 text-blue-700 hover:opacity-100 bg-transparent w-14 text-center absolute top-8'>{user.displayName}</p></div>) : (""
                        )}

                        {user && user?.email ? (<button onClick={logOut} className='btn'>LogOut</button>) : ( <div className='flex gap-1 md:gap-4'>
                            <Link to="/login" className='btn'>Login</Link>
                            <Link to="/register" className='btn'>Register</Link>
                        </div>)}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;