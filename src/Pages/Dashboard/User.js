import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://blooming-atoll-01401.herokuapp.com/newUser/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {

                return res.json()
            })
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('NEW ADMIN ADDED')
                }
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">MAKE ADMIN</button>}</td>
            {/* <td><button class="btn btn-xs">REMOVE USER</button></td> */}

        </tr>
    );
};

export default User;