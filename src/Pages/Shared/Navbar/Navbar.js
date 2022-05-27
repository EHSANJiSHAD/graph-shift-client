import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100  drop-shadow-2xl rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52 bg-gradient-to-b from-sky-600 to-slate-800 hover:from-slate-800 hover:to-sky-600 text-sky-200 hover:rounded-full hover:text-sky-300 drop-shadow-2xl border-0 font-bold rounded-full">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/blogs'>BLOGS</Link></li>
                        
                    </ul>
                </div>
                <a className="btn btn-ghost   rounded-full ">
                    <img className='logo' src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex bg-gradient-to-b from-sky-600 to-slate-800 hover:from-slate-800 hover:to-sky-600 text-sky-200 hover:text-sky-300 drop-shadow-2xl border-0 font-bold  rounded-full">
                <ul className="menu menu-horizontal p-0">
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/blogs'>BLOGS</Link></li>
                    
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn  bg-gradient-to-b from-sky-600 to-slate-800 hover:from-slate-800 hover:to-sky-600 text-sky-200 hover:text-sky-300 drop-shadow-2xl border-0 font-bold rounded-full">LOG IN</a> */}
            </div>
        </div>
    );
};

export default Navbar;