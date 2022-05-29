import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {
    const {data:users,isLoading,refetch} = useQuery('users',()=> fetch('http://localhost:5000/newUser').then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center text-xl text-accent'>ALL USERS : {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                 
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                        </tr>
                    </thead>
                    <tbody>        
                       {
                           users.map(user=><User refetch={refetch} key={user._id} user={user}></User>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;