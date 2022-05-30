import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center flex-col h-screen items-center'>
            <div className='mb-10 text-error'>
                <h2>NAME: MD. AHASANUZZAMAN</h2>
                <h3>EMAIL: tanvirehsan60@gmail.com</h3>
            </div>
            <div className='mb-10 text-warning'>
                <h2>EDUCATIONAL BACKGROUND:</h2>
                <h5>JSC: RAJUK UTTARA MODEL COLLEGE (GPA-5)</h5>
                <h5>SSC: RAJUK UTTARA MODEL COLLEGE (GPA-5)</h5>
                <h5>HSC: RAJUK UTTARA MODEL COLLEGE (GPA-5)</h5>
                <h5>BSC(CSE): AMERICAN INTERNATIONAL UNIVERSITY BANGLADESH (process.env.CGPA_SECRET)</h5>
            </div>
            <div className='mb-10 text-success'>
                <h6>TECHNOLOGY OR SKILLS:</h6>
                <h6>PROGRAMMING LANGUAGE: C,C++,C#,PHP,JAVA,JAVASCRIPT(REACT JS),OPENGL,CSS(TAILWIND,BOOTSRAP),HTML</h6>
                <h6>PROBLEM SOLVING(CODEFORCES,HACKERRANK)</h6>
            </div>
            <div className='mb-10 text-info'>
                <h5>LIVE SITE LINKS:</h5>
                <h1>BANGLA BOI [ https://bangla-boi-2bb42.web.app/ ]</h1>
                <h1>SELF MADE [ https://self-made-1947d.web.app/ ]</h1>
                <h1>GRAPH SHIFT [ https://graph-shift.web.app/ ]</h1>
            </div>

        </div>
    );
};

export default MyPortfolio;