import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders,setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/order?buyer=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setOrders(data);
            console.log(data)
        })
        }
    },[user])
    return (
        <div>
            <h2>MY ORDERS:{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead >
                        <tr className='text-secondary'>
                            <th></th>
                            <th>NAME</th>
                            <th>PRODUCT</th>
                            <th>ADDRESS</th>
                            <th>PHONE</th>
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
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;