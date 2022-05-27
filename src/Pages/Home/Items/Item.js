import React from 'react';

const Item = ({ item }) => {
    const { name, price, id, description, img, minimum_order_quantity, available_quantity } = item;
    return (
        <div>
            <div class="card lg:w-96  shadow-xl bg-gradient-to-t from-slate-800 to-white-300">
                <figure class="px-10 pt-10">
                    <img src={img} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-primary">{name}</h2>
                    <p>{description.slice(0,90)}...</p>
                    
                    <div class="divider"></div>
                    <h2 className='text-primary text-2xl'>{price} tk</h2>
                    <div class="divider"></div>
                    <p>MINIMUM ORDER QUANTITY: {minimum_order_quantity}</p>
                    <p>AVAILABLE QUANTITY: {available_quantity}</p>
                    <div class="card-actions">
                        <button class="btn btn-outline btn-primary rounded-xl font-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;