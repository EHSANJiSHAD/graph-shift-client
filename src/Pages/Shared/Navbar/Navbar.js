import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import auth from '../../../firebase.init';
import Loading from '../Loading';
import './Navbar.css'

const Navbar = () => {
    const [user,loading] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="navbar bg-base-100   rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52 drop-shadow-2xl border-0 font-bold rounded-full">
                        <li className='btn btn-outline btn-error rounded-lg'><Link to='/'>HOME</Link></li>
                        <li className='btn btn-outline btn-primary  rounded-lg'><Link to='/blogs'>BLOGS</Link></li>

                        {/* <li className='btn btn-outline btn-warning rounded-lg font-bold'><Link to='/addReview'>ADD REVIEW</Link></li> */}
                        {
                            user && <li className='btn btn-outline btn-success rounded-lg font-bold'><Link to='/dashboard'>DASHBOARD</Link></li>
                        }
                        <li className='btn btn-outline btn-accent rounded-lg font-bold'><Link to='/myPortfolio'>PORTFOLIO</Link></li>

                        <li >
                            {
                                user ? <button onClick={handleSignOut} className='btn btn-outline btn-secondary rounded-lg'>SIGN OUT</button>
                                    :
                                    <Link className='btn btn-outline btn-secondary  rounded-lg' to='/login'>LOGIN</Link>
                            }
                        </li>

                    </ul>
                </div>
                <a className="btn btn-ghost   rounded-full ">
                    <img className='logo' src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex  drop-shadow-2xl border-0 font-bold  rounded-full">
                <ul className="menu menu-horizontal p-0   hover:none">
                    <li className='btn btn-outline btn-error rounded-full font-bold'><Link to='/'>HOME</Link></li>
                    <li className='btn btn-outline btn-primary rounded-full font-bold'><Link to='/blogs'>BLOGS</Link></li>
                   

                    {/* <li className='btn btn-outline btn-warning rounded-full font-bold'><Link to='/addReview'>ADD REVIEW</Link></li> */}
                    {
                        user && <li className='btn btn-outline btn-success rounded-full font-bold'><Link to='/dashboard'>DASHBOARD</Link></li>
                    }
                     <li className='btn btn-outline btn-accent rounded-full font-bold'><Link to='/myPortfolio'>PORTFOLIO</Link></li>

                    <li className='btn btn-outline btn-secondary font-bold rounded-full'>
                        {
                            user
                                ? <button className='font-bold' onClick={handleSignOut} >SIGN OUT</button>
                                :
                                <Link to='/login'>LOGIN</Link>
                        }
                    </li>

                </ul>
            </div>
            <div class="navbar-end">
                
                     {
                         user? <h2 className='text-warning border p-2 hidden lg:block rounded-full border-warning'>{user.displayName} </h2>:' '
                     }
                
            </div>
            <div className="navbar-end">
                <label tabindex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            {/* <div className="navbar-end avatar ">
                <div className='hidden   lg:block rounded-full w-12 ring ring-primary ring-offset-base-100 ring-offset-2'>
                <h6 className=" rounded-full ">
                    {
                        user ? <img className='rounded-full w-12' src={user?.photoURL} alt="" /> : ' '
                    }
                </h6>
                </div>
                
            </div> */}
        </div>
    );
};

export default Navbar;