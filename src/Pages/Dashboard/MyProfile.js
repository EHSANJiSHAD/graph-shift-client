import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);


    const educationRef = useRef('')
    const locationRef = useRef('')
    const numberRef = useRef('')
    const linkedInRef = useRef('')

    const handleUpdateInfo = async id => {

        const email = user.email;
        const name = user.displayName;
        const education = educationRef.current.value;
        const location = locationRef.current.value;
        const number = numberRef.current.value;
        const linkedIn = linkedInRef.current.value;

        const userInfo = {
            education,
            location,
            number,
            linkedIn,
        }

        //    event.preventDefault();
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast.success('USER INFO ADDED')


    }
    return (
        <div>
            <h2 className='text-center text-success font-bold text-2xl mb-5'>MY PROFILE</h2>
            <h3 className='text-center text-lime-500'> {user.displayName.toUpperCase()}</h3>
            <h3 className='text-center text-sm text-slate-500'> {user.email}</h3>

            <div className='flex flex-col lg:mx-64 gap-5 mt-10'>
                <input className='bg-slate-700 rounded-2xl text-lime-500 pl-3' ref={educationRef} placeholder='EDUCATION' type="text" />
                <input className='bg-slate-700 rounded-2xl text-lime-500 pl-3' ref={locationRef} placeholder='LOCATION' type="text" />
                <input className='bg-slate-700 rounded-2xl text-lime-500 pl-3' ref={numberRef} placeholder='PHONE' type="text" />
                <input className='bg-slate-700 rounded-2xl text-lime-500 pl-3' ref={linkedInRef} placeholder='LINKEDIN ID' type="text" />
                <input type="button" onClick={() => handleUpdateInfo(user.email)} className='btn btn-outline btn-success' value="SUBMIT" />
            </div>

        </div>
    );
};

export default MyProfile;