import './Blogs.css'
import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center'>
            <h2 className='text-2xl text-primary'>BLOGS</h2>

            {/* <h2>1. How will you improve the performance of a React Application?</h2>
            <p>ANS: Wherever possible, i should try to keep component state local.In React, I may use windowing or virtualization to create a virtualized list.By preventing Lazy loading images in React and by using immutable data structures.</p>

            <h2>2. What are the different ways to manage a state in a React application?</h2>
            <p>ANS:There are 4 main type of state to manage in react app.Local state,server state,global state,URL state.The useState hook is most commonly used in React to manage local state.Authenticated user state is a common example of global state. It is important to obtain and alter a user's data throughout our program if the user is logged in.SWR and React Query are two utilities that make handling server state considerably easier.</p>

            <h2>3. How does prototypical inheritance work?</h2>
            <p>ANS:Objects in JavaScript have a property called '[Prototype]' that is either null or refers to another object. This item is referred to as a "prototype".When we read a property from an object when it isn't present, JavaScript takes it from the prototype. This is known as "prototypal inheritance" in programming.</p>

            <h2>4. What is a unit test? Why should write unit tests?</h2>
            <p>ANS:Individual units or components of software are tested in unit testing.So the main purpose is to check each and every code of a specific software to find out as it turned out to be as expected</p>
            <h2>5. Why you do not set the state directly in React?</h2>
            <p>ANS:It is never a good idea to change the state directly because,If we update it immediately, the update you made may be overwritten if we execute setState() later.And another thing,this.state is not changed instantly when you directly update the state. Instead, it generates a pending state transition, which will only yield the current value if accessed after using this function.</p> */}
        </div>
    );
};

export default Blogs;