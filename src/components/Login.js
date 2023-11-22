import Image from 'next/image'
import React from 'react';
import styles from '../styles/commons.module.css';
import authStyles from '../styles/auth.module.css';

function Login() {
  return (
    <div className='relative'>
        <div>
            <Image src='/assets/authbg.jpg' width={500} height={500} className='w-full  h-[400px] md:h-[600px] ' alt='background img'/>
        </div>

        <div className={`${authStyles.authContainer} w-5/6 mx-auto md:w-1/2 lg:w-[40%] xl:w-[35%] md:py-8 px-2 md:px-4`}>
            <div className='w-full py-8'>
                <p className={`${styles.textH1} flex justify-center`}>Welcome Back</p>
                <p className={`${styles.textH6} flex justify-center`}>Log into your account</p>
            </div>
            <div className='grid gap-[10px] w-[90%] md:w-[80%] mx-auto py-4'>
                <input type='text' placeholder='enter email'  className={`${styles.textInput}`}/>
                <input type='text' placeholder='enter password' className={`${styles.textInput}`}/>
               <div className='flex gap-[3px] md:gap-[5px]'> <input type='checkbox'/><p className={`${styles.textH6} py-2`}> Remember me</p></div>
            </div>

            <div className='w-[90%] mx-auto'>
                <div className='grid justify-center'>
                    <p className={`${styles.textH6} pt-4`} >Do you have an account ? <span className='text-[#7CB7FD] font-medium]'>Register</span></p>
                    <button className={`${styles.blueButtons} my-6`}>Log In</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Login