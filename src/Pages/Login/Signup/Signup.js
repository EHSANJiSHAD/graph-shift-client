import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, userError] = useUpdateProfile(auth);

    //////////////////CREATE USER WITH EMAIL PASS////////////////////////////
        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth);
    //////////////////CREATE USER WITH EMAIL PASS////////////////////////////
    const navigate = useNavigate();
    let signInErrorMsg;
    if(error||gError||userError){
        signInErrorMsg = <p className='text-red-500'>{error?.message || gError?.message || userError?.message}</p>
    }
    if(loading || gLoading || updating){
        return <div className='flex h-screen justify-center items-center'><button className="btn loading">loading</button></div>
    }
        
    const onSubmit = async data => { 
        console.log(data); 
        await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({ displayName:data.name});
        
    }
    if(user || gUser){
        navigate('/')
    }
    return (
        <div>
            <div className='flex  justify-center items-center h-screen '>
            <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-t from-slate-800 to-white-300 drop-shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center text-success mb-5">SIGN UP</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs mb-5">
                            <input 
                            type="text" 
                            placeholder="NAME" 
                            class="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required:{
                                value:true,
                                message:'NAME IS REQUIRED'
                                },
                              })}
                             />
                            <label class="label">
                               {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs mb-5">
                            <input 
                            type="email" 
                            placeholder="EMAIL" 
                            class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required:{
                                value:true,
                                message:'EMAIL IS REQUIRED'
                                },
                                pattern: {
                                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                  message: 'PROVIDE A VALID EMAIL' 
                                }
                              })}
                             />
                            <label class="label">
                               {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                               {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            
                            <input 
                            type="password" 
                            placeholder="PASSWORD" 
                            class="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required:{
                                value:true,
                                message:'PASSWORD IS REQUIRED'
                                },
                                minLength: {
                                  value: 6,
                                  message: 'MUST CONTAIN AT LEAST 6 CHARACTERS' 
                                }
                              })}
                             />
                            <label class="label">
                               {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                               {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                
                            </label>
                        </div>

        
                            
                        {signInErrorMsg}
                            <input className='btn btn-outline btn-success mt-5 w-full max-w-xs text-white' value='SIGN UP' type="submit" />
                        </form>
                        <small><p>Already have an account? <Link to='/login' className='text-success '>Please Login</Link></p></small>
                        <div className="divider text-success">OR</div>

                        <button  className="btn btn-outline btn-success">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;