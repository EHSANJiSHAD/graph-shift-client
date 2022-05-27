import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch('items.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[items])
    return (
        <div className='mt-12'>
            <h2 className='text-primary text-2xl font-bold text-center mt-5 bg-gradient-to-t from-slate-800 to-white-300 drop-shadow-2xl'>GRAPHICS CARDS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:px-14 gap-10 mb-10'>
                {
                    items.slice(0,6).map(item=><Item key={item.id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;