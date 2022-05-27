import React from 'react';
import gcard from '../../../assets/images/Nvidia-RTX-4000-Series-Quadro-RTX-4000.png'

const ComingSoon = () => {
    return (
        <div>
            <div class="hero min-h-80 bg-base-200  my-10">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <img className='lg:max-w-lg' src={gcard}/>
                    <div>
                        <h1 class="lg:text-5xl sm:text-2xl font-bold text-primary">COMING SOON...</h1>
                        <p class="py-6 text-lime-500">GeForce RTX 4000 series Coming Soon with detailed specs and price</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;