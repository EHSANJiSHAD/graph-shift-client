import './Banner.css'
import React from 'react';
import banner1 from '../../../assets/banner/1.jpg'
import banner2 from '../../../assets/banner/2.jpg'
import banner3 from '../../../assets/banner/3.jpg'
import banner4 from '../../../assets/banner/4.jpg'

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full mb-5">
                <div id="item1" class="carousel-item w-full">
                    <img src={banner2} class="w-full h-72 border-4 border-double border-sky-600 rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;