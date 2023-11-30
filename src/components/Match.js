import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import LoadingPage from './LoadingPage';
import Image from 'next/image';

function Match() {
    // fetch therapists
    const [therapists, setTherapists] = useState([]);
    async function fetchData() {
      try {
        const response = await fetch('https://therapy-app-backend.vercel.app/api/therapists/all');
        const data = await response.json();
        console.log(data);
        setTherapists(data);
      } catch (error) {
        console.error("There was an error fetching therapists:", error);
      }
  }
  
    useEffect(() => {
      fetchData();
    }, []);

// Add to Favourites Logic
const addToFavorites = async (therapistId) => {
    console.log(therapistId)
    try {
      const token = await JSON.parse(localStorage.getItem('token'));
        const response = await fetch(`https://therapy-app-backend.vercel.app/api/clients/favorites/add/${therapistId}`, 
        {
           method: 'POST' ,
           headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
          });
        const result = await response.json();
        console.log(result.message);
        refresh();
    } catch (error) {
        console.log("Error adding to favorites.");
    }
}

  return (
    <div className='w-11/12 md:w-10/12 lg:w-[70%] mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6  py-8 '>
       {(therapists) ?  therapists.map((item)=>(
        <div key={item._id}  className='h-[280px] md:h-[450px] w-[100%] shadow-lg rounded-md md:rounded-xl  relative' style={{ 
          background: `linear-gradient(to top,rgba(0,0,0,1), rgba(0,0,0,0),transparent), url(${item.image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center' ,
        }}>
          <Link href={`/therapist?therapistId=${item._id}`}>
           <div className='absolute bottom-0 px-2 pb-2'  >
                <p className='text-zinc-200 text-[14px] md:text-[15px] lg:text-[18px] font-medium '>{item.name}</p>
               <div className='flex gap-[5px] md:gap-[8px] md:py-2'>
               {Array.from(
                          { length: item.rating },
                          (_, index) => (
                            <Image
                              key={index}
                              width={10}
                              height={10}
                              className="w-[15px] h-[15px] "
                              src="/assets/bluestar.png"
                            />
                          )
                        )}
               </div>
                <p className='text-[12px] md:text-[14px] text-zinc-400 lg:text-[16px]'>{item.specializations.join(',').substr(0,41) + ' ' +'...'}</p>
           </div>
          </Link>
        </div>
       )) : <LoadingPage />}
    </div>
  )
}

export default Match