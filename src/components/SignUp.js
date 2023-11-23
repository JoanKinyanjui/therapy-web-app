import Image from 'next/image'
import React from 'react';
import styles from '../styles/commons.module.css';
import authStyles from '../styles/auth.module.css';

function SignUp() {
  return (
    <div className='relative'>
        <div>
            <Image src='/assets/autbg.jpg' width={500} height={500} className='w-full mx-auto  h-[100vh] md:h-[100vh] ' alt='background img'/>
        </div>

        <div className={`${authStyles.authContainer} w-5/6 mx-auto md:w-1/2 lg:w-[40%] xl:w-[35%] py-2 md:py-8 px-2 md:px-4`}>
            <div className='w-full py-4 md:py-8'>
                <p className={`${styles.textH1} flex justify-center`}>Register</p>
                <p className={`${styles.textH6} flex justify-center`}>Create your account</p>
            </div>
            <div className='grid gap-[10px] w-[90%] md:w-[80%] mx-auto py-4'>
                <input type='text' placeholder='enter userName' className={`${styles.textInput}`}/>
                <input type='text' placeholder='enter email'  className={`${styles.textInput}`}/>
                <input type='text' placeholder='enter password' className={`${styles.textInput}`}/>
                <input type='text' placeholder='confirm password' className={`${styles.textInput}`}/>
               <div className='flex gap-[3px] md:gap-[5px]'> <input type='checkbox'/><p className={`${styles.textH6} py-2`}> Remenber me</p></div>
            </div>

            <div className='w-[90%] mx-auto'>
                <div className='grid justify-center'>
                    <p className={`${styles.textH6} pt-4`} >Already have an account ? <span className='text-[#7CB7FD] font-medium]'>Login</span></p>
                    <button className={`${styles.blueButtons} my-6`}>SignUp</button>
                </div>
                <div>
                  <div  className='flex my-2  h-[50px] items-center md:gap-[5px]'>
                  <div className='w-1/3 border-b-2 border-gray-400'></div>
                    <p className={`${styles.normalText} text-center w-1/3`}>or continue with</p>
                    <div className='w-1/3  border-b-2 border-gray-400'></div>
                  </div>
                  <div><Image  width={40} height={40} alt='image' src='/assets/googleIcon.png' className='mx-auto md:w-[70px] md:h-[70px]' /></div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SignUp