import React from 'react'
import Nav from './Nav';
import CommonStyles from '../styles/commons.module.css';
import styles from '../styles/home.module.css';
import Image from 'next/image';

function Home() {
  return (
    <div>
<div className='grid justify-center px-2 py-4 md:py-8'> 
    <p className={`${CommonStyles.textH4} text-center`}>Discover happiness and peace of mind through </p>
    <span className={`${CommonStyles.textH1} mx-auto`}>Online Therapy</span>
    <p className={`${CommonStyles.textH6} mx-auto py-4 text-center`}>What type of Therapy are you looking for? </p>
</div>


<div className=' py-4 md:py-12 w-10/12 lg:w-[70%] xl:w-[60%] mx-auto bg-green-200] grid  grid-cols-1 md:grid-cols-2 gap-4  md:gap-8 px-4' >

<div className={`${styles.TherapyDiv1} md:h-[250px] h-[160px]`}>
<div className={`${styles.therapyDivContent} flex justify-between  px-2 md:px-4 w-full items-center`}>
  <div className='grid gap-[12px]'>
  <p className={`${styles.TopicTitle} text-[18px] md:text-[24px]`}>Individual</p>
    <p className={`${styles.TopicDetail} text-[15px] md:text-[18px]`}>For Myself</p>
  </div>
  <Image className='w-[40px] h-[40px] md:w-[50px] md:h-[40px]' width={40} height={20} alt='now' src='/assets/arrow.png' />
</div>
</div>

<div className={`${styles.TherapyDiv2} md:h-[250px] h-[160px]`}>
<div className={`${styles.therapyDivContent} flex justify-between  px-2 md:px-4 w-full items-center`}>
  <div className='grid gap-[12px]'>
  <p className={`${styles.TopicTitle} text-[18px] md:text-[24px]`}>Couples</p>
    <p className={`${styles.TopicDetail} text-[15px] md:text-[18px]`}>For me and my partner</p>
  </div>
  <Image className='w-[40px] h-[40px] md:w-[50px] md:h-[40px]' width={40} height={20} alt='now' src='/assets/arrow.png' />
</div>
</div>

<div className={`${styles.TherapyDiv3} md:h-[250px] h-[160px]`}>
<div className={`${styles.therapyDivContent} flex justify-between  px-2 md:px-4 w-full items-center`}>
  <div className='grid gap-[12px]'>
  <p className={`${styles.TopicTitle} text-[18px] md:text-[24px]`}>Student</p>
    <p className={`${styles.TopicDetail} text-[15px] md:text-[18px]`}>For a  person enrolled in a n institution</p>
  </div>
  <Image className='w-[40px] h-[40px] md:w-[50px] md:h-[40px]' width={40} height={20} alt='now' src='/assets/arrow.png' />
</div>
</div>

<div className={`${styles.TherapyDiv4} md:h-[250px] h-[160px]`}>
<div className={`${styles.therapyDivContent} flex justify-between  px-2 md:px-4 w-full items-center`}>
  <div className='grid gap-[12px]'>
  <p className={`${styles.TopicTitle} text-[18px] md:text-[24px]`}>Employee</p>
    <p className={`${styles.TopicDetail} text-[15px] md:text-[18px] `}>For a  person working in an organization</p>
  </div>
  <Image className='w-[40px] h-[40px] md:w-[50px] md:h-[40px]' width={40} height={20} alt='now' src='/assets/arrow.png' />
</div>
</div>

</div>
    </div>
  )
}

export default Home