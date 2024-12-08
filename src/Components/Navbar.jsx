import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './Authentication/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import { Zoom } from 'react-awesome-reveal';

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
        <div className='bg-gray-800 p-3'>
            <div className="navbar border rounded-xl bg-base-100">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                            {/* Light mode icon */}
                            <svg
                                className="swap-on fill-current w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5.64 17.657l-1.415-1.414L3.222 18l1.415 1.414 1.004-1.757zm0-11.314l-1.415 1.414L3.222 6 4.637 4.586l1.004 1.757zm11.314 0l-1.004-1.757L20.778 6l-1.415 1.414-1.004-1.757zM18 12a6 6 0 1 1-6-6 6.008 6.008 0 0 1 6 6zm-6 8.778a7.95 7.95 0 0 0 4.242-1.364l-1.004-1.757L13.657 21H10.343l1.757-1.004 1.004 1.757A7.95 7.95 0 0 0 12 20.778z" />
                            </svg>
                            {/* Dark mode icon */}
                            <svg
                                className="swap-off fill-current w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 3.807c-3.548.245-6.519 3.216-6.764 6.764a7.931 7.931 0 0 0 9.891 9.891c3.548-.245 6.519-3.216 6.764-6.764a7.931 7.931 0 0 0-9.891-9.891z" />
                            </svg>
                        </label>
                    </div>
                    <div className='flex sm:justify-start lg:justify-end gap-3 items-center shadow p-2 rounded-box px-4'>
                        {user && user?.email ? (<div><img className='w-14 h-14 rounded-full relative' src={user.photoURL} alt="" />
                            <p className='text-xl opacity-0 text-blue-700 hover:opacity-100 bg-transparent w-14 text-center absolute top-8'>{user.displayName}</p></div>) : (""
                        )}

                        {user && user?.email ? (<button onClick={logOut} className='btn'>LogOut</button>) : (<Link to="/login" className='btn'>Login</Link>)}

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;