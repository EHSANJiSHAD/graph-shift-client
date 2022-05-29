import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineReviews } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';

const Dashboard = () => {
    const [user] = useAuthState(auth)

    return (
        <div>
            
    
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-primary font-bold text-2xl ml-5'>DASHBOARD</h2>
                <div class="divider"></div>
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
               

            </div>
            <div class="drawer-side ">
                <label for="my-drawer-2" class="drawer-overlay "></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-gradient-to-t from-secondary to-dark  text-base-content rounded-full">
                    {/* <!-- Sidebar content here --> */}
                    <li className='text-sm text-error '><Link to='/dashboard'> <AiOutlineHome/> MY ORDERS</Link></li>
                    <li className='text-sm text-warning '><Link to='/dashboard/addReviews'> <MdOutlineReviews/> ADD REVIEWS</Link></li>
                    <li className='text-sm text-lime-500 '><Link to='/dashboard/myProfile'> <AiOutlineUser/> MY PROFILE</Link></li>
                    <li className='text-sm text-lime-500 '><Link to='/dashboard/users'> <FiUsers/> USERS</Link></li>
                    {/* {
                        admin && <li><Link to='/dashboard/allUsers'>ALL USERS</Link></li>
                    } */}
                </ul>

            </div>
        </div>
    
        </div>
    );
};

export default Dashboard;