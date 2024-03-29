import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
// import { MdOutlineDelete } from 'react-icons/md';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?buyer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    else if (res.status === 403) {

                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                    // console.log(data)
                })
        }
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('ARE YOU SURE YOU WANT TO CANCEL?');
        if (proceed) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // if(data.deletedCount>0){
                    //     const remaining = item.
                    // }
                    toast.success('ORDER DELETED');
                })
        }
    }
    return (
        <div>
            <h2 className='text-center font-bold text-error'>TOTAL ORDERS : {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead >
                        <tr className='text-secondary'>
                            <th></th>
                            <th>NAME</th>
                            <th>PRODUCT</th>
                            <th>ADDRESS</th>
                            <th>PHONE</th>
                            <th>ACTION</th>
                            <th>PROCEED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) => <tr>
                                <th className='text-secondary'>{index + 1}</th>
                                <td className='text-error'>{o.buyerName}</td>
                                <td className='text-error'>{o.item}</td>
                                <td className='text-error'>{o.address}</td>
                                <td className='text-error'>{o.phone}</td>
                                <td><button onClick={() => handleDelete(o._id)} className='text-error text-sm btn btn-outline btn-error rounded-full '>CANCEL</button></td>
                                <td><button className='text-error text-sm btn btn-outline btn-success rounded-full '>PAY</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;