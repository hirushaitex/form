import React from 'react'
import bgimg from '../assets/img1.jpg';
import {useForm}from 'react-hook-form';

function Form() {

const{register,handleSubmit,watch, formState:{errors}}=useForm()
const onSubmit=data=>console.log(data);

console.log(watch('Username'));

    return ( 
        <section>
            <div className='register'>
                <div className='col-1'>
                <h2><center>Sign in</center></h2>
                <span><center>Register and enjoy the service</center></span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' {...register("Username")} placeholder='Username'/>
                    <input type='text' {...register("Password")} placeholder='Password'/>
                    <input type='text' {...register("Confirm password")} placeholder='Confirm password'/>
                    <input type='text' {...register("mobile",{required:true, maxLength:10, minLength:10})} placeholder='mobile number'/>
                    {errors.mobile?.type === "required" && "Mobile number is required"}
                    {errors.mobile?.type === "maxLength" && "Max length exceed"}
                    {errors.mobile?.type === "minLength" && "Missing characters, try again!"}
                    <button className='btn'>Sign-in</button>
                </form>
                </div>
                <div className='col-2'></div>
                <img src={bgimg} width='40%' alt='fuck'/>
            </div>
        </section>
      
    );
  }

export default Form
