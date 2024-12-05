import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './Authentication/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const Links = <>
        <li><NavLink to="/" >Home</NavLink></li>
        {
            user && <> <li><NavLink to="/my">My Equipment List</NavLink></li> </>
        }
        {
            user && <> <li><NavLink to="/add">Add Equipment</NavLink></li> </>
        }
        <li><NavLink to="/sports">All Sports Equipment</NavLink></li>
        <li><NavLink to="/Contact">Contact Us</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
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
                    <a className="btn btn-ghost text-xl">Aaraf Sports</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex sm:justify-start lg:justify-end gap-3 items-center shadow p-2 rounded-box px-4'>
                        {user && user?.email ? (<div><img className='w-14 h-14 rounded-full relative' src={user.photoURL} alt="" />
                                <p className='text-xl opacity-0 text-blue-700 hover:opacity-100 bg-transparent w-14 text-center absolute top-8'>{user.displayName}</p></div>) : (""
                        )}

                        {user && user?.email ? (<button onClick={logOut} className='btn'>LogOut</button>) : (<Link to="/login" className='btn'>Login</Link>)}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;