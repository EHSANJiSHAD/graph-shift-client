import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [purchaseItems, setPurchaseItems] = useState([]);
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => setPurchaseItems(data))
    }, [purchaseItems])
    const onSubmit = data => {
        console.log(data);

        // const minQuantity = purchaseItems.minimum_order_quantity;

    }
    const onquantitySubmit = async data => {
        console.log(data);

    }
    return (

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:mx-14'>
            <div>
                <div className='flex justify-center'>
                    <div class="card lg:w-lg  shadow-xl bg-gradient-to-t from-slate-800 to-white-300">
                        <figure class="px-10 pt-10">
                            <img src={purchaseItems.img} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-primary">{purchaseItems.name}</h2>
                            <p>{purchaseItems.description}...</p>

                            <div class="divider"></div>
                            <h2 className='text-primary text-2xl'>{purchaseItems.price} tk</h2>
                            <div class="divider"></div>
                            <p>MINIMUM ORDER QUANTITY: {purchaseItems.minimum_order_quantity}</p>
                            <p>AVAILABLE QUANTITY: {purchaseItems.available_quantity}</p>

                            <div>
                                <form onSubmit={handleSubmit(onquantitySubmit)}>
                                    <div class="form-control w-full max-w-xs mb-5">
                                        <input
                                            type="number"
                                            style={{ color: '#84b84a' }}
                                            placeholder="PURCHASE QUANTITY"
                                            class="input input-bordered w-full max-w-xs"
                                            {...register("purchaseQuantity", {
                                                required: {
                                                    value: true,
                                                    message: 'Insert a number'
                                                },
                                                min: {
                                                    value: `${purchaseItems.minimum_order_quantity}`,
                                                    message: `Quantity can't be less than Minimum Order Quantity`
                                                },
                                                max: {
                                                    value: `${purchaseItems.available_quantity}`,
                                                    message: `Quantity can't be more than Minimum Order Quantity`
                                    
                                                }

                                            })}
                                        />

                                    </div>
                                    <label class="label">
                                        {errors.purchaseQuantity?.type === 'required' && <span class="label-text-alt text-error">{errors.purchaseQuantity.message} </span>}
                                        {errors.purchaseQuantity?.type === 'min' && <span class="label-text-alt text-error">{errors.purchaseQuantity.message}</span>}
                                        {errors.purchaseQuantity?.type === 'max' && <span class="label-text-alt text-error">{errors.purchaseQuantity.message}</span>}

                                    </label>

                                    <div class="card-actions flex justify-center">
                                        <button disabled={errors.purchaseQuantity} class="btn  btn-outline btn-primary rounded-xl font-bold">PRESS</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex  justify-center items-center h-screen '>
                    <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-t from-slate-800 to-white-300 drop-shadow-2xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-bold text-center text-error mb-5">PLACE ORDER</h2>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div class="form-control w-full max-w-xs mb-5">
                                    <input
                                        type="text"
                                        placeholder="NAME"
                                        class="input input-bordered w-full max-w-xs"
                                        value={user.displayName.toUpperCase()}
                                        disabled
                                    />

                                </div>
                                <div class="form-control w-full max-w-xs mb-5">
                                    <input
                                        type="email"
                                        placeholder="EMAIL"
                                        class="input input-bordered w-full max-w-xs"
                                        value={user.email}
                                        disabled
                                    />
                                    <label class="label">
                                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                                    </label>
                                </div>
                                <div class="form-control w-full max-w-xs">

                                    <textarea
                                        style={{ color: '#84b84a' }}
                                        type="text"
                                        placeholder="ADDRESS"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is required'
                                            },

                                        })}
                                    />
                                    <label class="label">
                                        {errors.address?.type === 'required' && <span class="label-text-alt text-error">{errors.address.message}</span>}
                                    </label>
                                </div>
                                <div class="form-control w-full max-w-xs">

                                    <input
                                        type="text"
                                        style={{ color: '#84b84a' }}
                                        placeholder="PHONE"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'Phone number is required'
                                            },


                                        })}
                                    />
                                    <label class="label">
                                        {errors.phone?.type === 'required' && <span class="label-text-alt text-error">{errors.phone.message}</span>}
                                    </label>
                                </div>
                                <input className='btn btn-outline btn-error mt-5 w-full max-w-xs text-white' value='ORDER' type="submit" />



                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;