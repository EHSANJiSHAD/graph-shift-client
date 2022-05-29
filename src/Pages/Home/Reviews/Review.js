import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Review = ({ userReview }) => {
    // const [user] = useAuthState(auth);
    const { _id, ratings, email, review,name } = userReview
    return (
        <div>
            <div class="card lg:w-96 grid grid-cols-2 gap-0 shadow-xl bg-gradient-to-t from-slate-800 to-white-300">
                <div class="avatar pt-14 p-2">
                    <div class="w-12 h-12  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        {
                           <img src="https://api.lorem.space/image/face?hash=3174" />
                        }
                    </div>
                </div>
                <div class="card-body ml-[-10] items-start text-start ">
                    <h1 className='text-warning font-bold'>{ratings} STAR</h1>

                    <h2 class="card-title text-primary">{name }</h2>
                    <h2 class="card-title text-sm text-gray-500">{email}</h2>
                    <p className='text-secondary'>{review}</p>

                </div>
            </div>
        </div>
    );
};

export default Review;