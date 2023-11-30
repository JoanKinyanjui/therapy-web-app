import Image from 'next/image'
import React, { useState } from 'react';
import styles from '../styles/commons.module.css';
import authStyles from '../styles/auth.module.css';
import { useRouter } from 'next/router';

function Login() {
    const router = useRouter()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

 const handleLogin =async()=>{
    try{
       const response =await fetch('https://therapy-app-backend.vercel.app/api/clients/login',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({email,password}),
       })

       const {token,client} = await response.json();
       console.log(token,client);
       
      if(token && client){
        localStorage.setItem('token',token);
        localStorage.setItem('client',JSON.stringify(client));
        router.push('/home');
      }
     
    }catch(e){
        console.log(e)

    }
 }

 const onHandlleEmailChange = (e) =>{
     setEmail(e.target.value);
 }

 const onHandlePasswordChange =(e)=>{
    setPassword(e.target.value);
 }
  return (
    <div className='relative'>
        <div>
            <Image src='/assets/autbg.jpg' width={500} height={500} className='w-full  h-[100vh] md:h-[100vh] ' alt='background img'/>
        </div>

        <div className={`${authStyles.authContainer} w-5/6 mx-auto md:w-1/2 lg:w-[40%] xl:w-[35%] md:py-8 px-2 md:px-4`}>
            <div className='w-full py-8'>
                <p className={`${styles.textH1} flex justify-center`}>Welcome Back</p>
                <p className={`${styles.textH6} flex justify-center`}>Log into your account</p>
            </div>
            <div className='grid gap-[10px] w-[90%] md:w-[80%] mx-auto py-4'>
                <input type='text' placeholder='enter email'  className={`${styles.textInput}`} value={email} onChange={onHandlleEmailChange}/>
                <input type='text' placeholder='enter password' className={`${styles.textInput}`} value={password} onChange={onHandlePasswordChange}/>
               <div className='flex gap-[3px] md:gap-[5px]'> <input type='checkbox'/><p className={`${styles.textH6} py-2`}> Remember me</p></div>
            </div>

            <div className='w-[90%] mx-auto'>
                <div className='grid justify-center'>
                    <p className={`${styles.textH6} pt-4`} >Do you have an account ? <span className='text-[#7CB7FD] font-medium]'>Register</span></p>
                    <button className={`${styles.blueButtons} my-6`} onClick={handleLogin}>Log In</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Login