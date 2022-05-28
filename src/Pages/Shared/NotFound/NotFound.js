import React from 'react';
import Notfound from '../../../assets/images/404.jpg'

const NotFound = () => {
    return (
        <div style={{background:`url(${Notfound})`,backgroundSize:'cover'}} className='glass rounded-lg h-screen'>
            <h2 className='flex justify-center items-center text-4xl font-bold text-pink-800 drop-shadow-2xl   glass'>404! NOT FOUND</h2>
        </div>
    );
};

export default NotFound;