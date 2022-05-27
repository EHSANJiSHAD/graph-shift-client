import React from 'react';
import banner from '../../../../assets/banner/7.jpg'

const Progress = () => {
    return (
        <div>
            <div class="hero min-h-80 my-10 rounded-full" style={{ backgroundImage: `url(${banner})` }}>
                <div class="hero-overlay bg-opacity-60 glass rounded-lg"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <div className='grid lg:grid-cols-1 gap-2 my-10'>
                            <h1 className='text-slate-800 font-bold mb-10  rounded-full  text-xl '>SALES RATE OF LAST 5 YEARS</h1>
                            <h6>2022</h6>
                            <progress class="progress progress-primary lg:w-80" value="90" max="100"></progress>
                            <h6>2021</h6>
                            <progress class="progress progress-secondary lg:w-80" value="70" max="100"></progress>
                            <h6>2020</h6>
                            <progress class="progress progress-accent lg:w-80" value="50" max="100"></progress>
                            <h6>2019</h6>
                            <progress class="progress progress-info lg:w-80" value="40" max="100"></progress>
                            <h6>2018</h6>
                            <progress class="progress progress-success lg:w-80" value="30" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Progress;