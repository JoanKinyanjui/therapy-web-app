import Image from 'next/image'
import React, { useState } from 'react';
import styles from '../styles/commons.module.css';
import authStyles from '../styles/auth.module.css';
import { useRouter } from 'next/router';

function SignUp() {
  const router = useRouter();
  const  [userName,setUserName] = useState('');
  const  [email,setEmail] = useState('');
  const  [password,setPassword] = useState('');
  const  [cPassword,setCPassword] = useState('');
  const  [status,setStatus] = useState('');

  const handleUserNameChange = (e) => {
     setUserName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
       setPassword(e.target.value)
  }
  const handleCPasswordChange = (e) => {
   setCPassword(e.target.value)
  }

  const handleSignUp = async() =>{
    try{
      if(password !== cPassword){
        setStatus('The passwords do not match')
        console.log(status);
        setPassword('');
        setCPassword('');
        return;
      }

      const response = await fetch('https://therapy-app-backend.vercel.app/api/clients/register',{
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body:JSON.stringify({usernme: userName , email, password})
      })

      const {token,client,message} = await response.json();
      console.log(token,client,message);
      setStatus(message);
      localStorage.setItem('token',token);
      localStorage.setItem('client',JSON.stringify(client));
      router.push('/home')
    }catch(e){
        console.log(e)
    }
  }
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
                <input type='text' placeholder='enter userName' className={`${styles.textInput}`} value={userName} onChange={handleUserNameChange}/>
                <input type='text' placeholder='enter email'  className={`${styles.textInput}`} value={email} onChange={handleEmailChange}/>
                <input type='text' placeholder='confirm password' className={`${styles.textInput}`} value={password} onChange={handlePasswordChange}/>
                <input type='text' placeholder='confirm password' className={`${styles.textInput}`} value={cPassword} onChange={handleCPasswordChange}/>
               <div className='flex gap-[3px] md:gap-[5px]'> <input type='checkbox'/><p className={`${styles.textH6} py-2`}> Remenber me</p></div>
            </div>

            <div className='w-[90%] mx-auto'>
                <div className='grid justify-center'>
                    <p className={`${styles.textH6} pt-4`} >Already have an account ? <span className='text-[#7CB7FD] font-medium]'>Login</span></p>
                    <button className={`${styles.blueButtons} my-6`} onClick={handleSignUp}>SignUp</button>
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