import React from 'react';
import Image from "next/image";

function Account() {
    const data = [
        {
          key: "1",
          menu: "My Wallet",
          icon: "/assets/wallet.png",
          price: "KES 2500",
        },
        {
          key: "2",
          menu: "Subscription Plan",
          icon: "/assets/subscription.png",
          price: "Regular",
        },
        {
          key: "3",
          menu: "Notifications",
          icon: "/assets/notify.png",
          price: "",
        },
        {
          key: "4",
          menu: "Terms of Use",
          icon: "/assets/terms.png",
          price: "",
        },
        {
          key: "5",
          menu: "Faqs",
          icon: "/assets/faqs.png",
          price: "",
        },
      ];

  return (
    <div>

        <div  className='w-full md:flex hidden h-screen '>
        <div className='w-11/12 md:w-10/12 lg:w-[70%] mx-auto'>
        <div   style={{ backgroundImage: "url('/assets/autbg.jpg')", backgroundSize: 'cover', height: '45vh' }} className='rounded-b-xl'> 
           <div className='w-full pl-12 pt-24  text-white'>
           <div className='flex justify-center'> <Image  src='https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600' width={100} height={100} alt='bg' className='md:w-[150px] md:h-[150px] rounded-full border-zinc-200 border-4'/></div>
            <div className='mt-4 mx-auto flex justify-center '><p>Jojo-K</p></div>
            <div className='flex justify-center'><p>0790236990</p></div>
            <div className='flex justify-center'><p>kinyanjuijoan52@gmail.com</p></div>
            <div className='flex justify-center'><p>********</p></div>
           </div>
           </div>
            {/* <div className='w-full border-b-2  border-zinc-400 mt-4'> </div> */}

            <div className=' py-4  w-[70%]  grid'>
           {data.map((item)=>(
             <div className='flex items-center  justify-between py-4'>
             <div className='w-[10%] flex justify-start'><Image  src={item.icon} width={100} height={100} alt='bg' className='w-[30px] h-[30px]' /></div>
             <div className='w-[30%] flex justify-start text-lg'><p>{item.menu}</p></div>
             <div className='w-[60%] flex justify-center text-sm text-zinc-500'>{item.price}</div>
           </div>
           ))}
            <div className='flex items-center  justify-between py-4'>
             <div className='w-[10%] flex justify-start'><Image  src='/assets/logout.png' width={100} height={100} alt='bg' className='w-[30px] h-[30px]' /></div>
             <div className='w-[20%] flex justify-start text-lg'><p>Logout</p></div>
             <div className='w-[70%] flex justify-center text-sm text-zinc-500'></div>
           </div>

                </div>
        </div>

      
        </div>
      

        <div className=' md:hidden grid w-full '>
        <div   style={{ backgroundImage: "url('/assets/autbg.jpg')", backgroundSize: 'cover', height: '35vh' }} className=' text-white'> 
        <div className='mx-auto flex justify-center pt-8'>  <Image  src='https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600' width={80} height={80} alt='bg' className='w-[100px] h-[100px] rounded-full border-zinc-200 border-2'/></div>
            <div className='mx-auto flex justify-center mt-4'><p>Jojo-K</p></div>
            <div className='mx-auto flex justify-center'><p>0790236990</p></div>
            <div className='mx-auto flex justify-center'><p>kinyanjuijoan52@gmail.com</p></div>
            <div className='mx-auto flex justify-center'><p>********</p></div>
        </div>
        </div>
        <div className=' py-4  w-[90%]  grid pl-2'>
           {data.map((item)=>(
             <div className='flex items-center  justify-between py-4'>
             <div className='w-[20%] flex justify-start'><Image  src={item.icon} width={100} height={100} alt='bg' className='w-[30px] h-[30px]' /></div>
             <div className='w-[50%] flex justify-start text-lg'><p>{item.menu}</p></div>
             <div className='w-[30%] flex justify-center text-sm text-zinc-500'>{item.price}</div>
           </div>
           ))}
            <div className='flex items-center  justify-between py-4'>
             <div className='w-[20%] flex justify-start'><Image  src='/assets/logout.png' width={100} height={100} alt='bg' className='w-[30px] h-[30px]' /></div>
             <div className='w-[50%] flex justify-start text-lg'><p>Logout</p></div>
             <div className='w-[30%] flex justify-center text-sm text-zinc-500'></div>
           </div>

                </div>
        </div>
  
  
)}

export default Account