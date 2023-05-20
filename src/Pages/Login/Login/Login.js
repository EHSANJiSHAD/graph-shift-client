import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading';
import useToken from '../../../hooks/useToken';



const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location =  useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    

    //////////////////SIGNIN WITH EMAIL PASS////////////////////////////
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    //////////////////SIGNIN WITH EMAIL PASS////////////////////////////
    const [token] = useToken(user || gUser);

    if(user||gUser){
        navigate(from, { replace: true });
    }
    
    let signInErrorMsg;
    if(error||gError){
        signInErrorMsg = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }
    if(loading || gLoading){
        return <Loading></Loading>
    }
    const onSubmit = data => { 
        console.log(data); 
        signInWithEmailAndPassword(data.email,data.password)
    }
    

    return (
        <div className=''>
            <div className='flex  justify-center items-center h-screen '>
            <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-t from-slate-800 to-white-300 drop-shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center text-secondary mb-5">LOGIN</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

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
                            <input className='btn btn-outline btn-secondary mt-5 w-full max-w-xs text-white' value='LOGIN' type="submit" />
                        </form>
                        <small><p>New to Graph Shift? <Link to='/signup' className='text-secondary '>Create New Account</Link></p></small>
                        <div className="divider text-secondary">OR</div>

                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;