import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    
    const onSubmit = async data => {
        console.log(data);
        fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast.success('REVIEW ADDED')


    }
    return (
        <div>
            <div className='flex justify-center'>
                <div class="card lg:w-lg  shadow-xl bg-gradient-to-t from-slate-800 to-white-300">

                    <div class="card-body items-center text-center">
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div class="form-control w-full max-w-xs mb-5">
                                    <input
                                        type="text"
                                        placeholder="NAME"
                                        class="input input-bordered w-full max-w-xs"
                                        value={user.displayName}
                                        // disabled
                                        {...register("name")}

                                    />

                                </div>
                                <div class="form-control w-full max-w-xs mb-5">
                                    <input
                                        type="email"
                                        placeholder="EMAIL"
                                        class="input input-bordered w-full max-w-xs"
                                        value={user.email}
                                        // disabled
                                        {...register("email")}

                                    />
                                    {/* <label class="label">
                                        {errors.email?.type === 'required' && <span class="label-text-alt text-error">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-error">{errors.email.message}</span>}

                                    </label> */}
                                </div>
                                <div class="form-control w-full max-w-xs">

                                    <textarea
                                        style={{ color: '#84b84a' }}
                                        type="text"
                                        placeholder="YOUR REVIEW"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register("review", {
                                            required: {
                                                value: true,
                                                message: 'Review is required'
                                            },

                                        })}
                                    />
                                    <label class="label">
                                        {errors.review?.type === 'required' && <span class="label-text-alt text-error">{errors.review.message}</span>}
                                    </label>
                                </div>
                                <div class="form-control w-full max-w-xs">

                                    <input
                                        type="number"
                                        step="0.1"
                                        style={{ color: '#84b84a' }}
                                        placeholder="RATINGS"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register("ratings", {
                                            required: {
                                                value: true,
                                                message: 'Rating is required'
                                            },
                                            max: {
                                                value: 5,
                                                message: `Rate it between 1-5`

                                            }


                                        })}
                                    />
                                    <label class="label">
                                        {errors.ratings?.type === 'required' && <span class="label-text-alt text-error">{errors.ratings.message}</span>}
                                        {errors.ratings?.type === 'max' && <span class="label-text-alt text-error">{errors.ratings.message}</span>}
                                    </label>
                                </div>
                                <input className='btn btn-outline btn-error mt-5 w-full max-w-xs text-white' value='ADD' type="submit" />



                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;