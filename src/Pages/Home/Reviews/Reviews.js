import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    return (
        <div className='my-10 sm:mt-48'>
            <h1 className='text-center font-bold text-2xl text-primary bg-gradient-to-t from-slate-800 to-white-300 drop-shadow-2xl'>REVIEWS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:px-14 gap-10 mb-10'>
                {
                    reviews.map(userReview => <Review key={userReview._id} userReview={userReview}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;