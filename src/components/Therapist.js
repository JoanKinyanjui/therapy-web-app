import { useRouter } from 'next/router';
import React, { useEffect, useReducer, useState } from 'react'
import LoadingPage from './LoadingPage';

function Therapist() {
    const router = useRouter();
    const {therapistId} = router.query;
    console.log(therapistId);

     //fetch Therapist
  const [therapist, setTherapist] = useState();
  async function fetchTherapist() {
    try {
      const response = await fetch(
        `https://therapy-app-backend.vercel.app/api/therapists/${therapistId}`
      );
      const data = await response.json();
      console.log(data);
      setTherapist(data);
    } catch (error) {
      console.error("There was an error fetching therapists:", error);
    }
  }

  useEffect(() => {
    fetchTherapist();
  }, []);

  return (
    <div>
    {therapist ? <div>{therapist.name}</div> 
    :
    <LoadingPage />
    }
    </div>
  )
}

export default Therapist