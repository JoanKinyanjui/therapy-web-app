import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Questionnaire() {
    const router = useRouter();
    const itemId = router.query.therapyId;
    console.log(itemId);

  const [therapy, setTherapy] = useState();
  const [loading, setLoading] = useState(true);

    const fetchTherapy = async () => {
        try {
          const response = await fetch(
            `https://therapy-app-backend.vercel.app/api/clients/therapy/${itemId}`
          );
          const therapyData = await response.json();
          setTherapy(therapyData);
          console.log(therapyData);
        } catch (error) {
          console.error("Failed to fetch therapy:", error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchTherapy();
      }, [itemId]);
    
const handleProceedLogic =async()=>{
    router.push('/match')
}

  return (
    <div>
{therapy && therapy.questions.map((item)=>(
    <div key={item._id}>
        {item.questionText}
        <div>
        {item.options.map((options)=>(
            <div key={options._id}>{options.text}</div>
        ))}
    </div>
    </div>
 

))}

<button onClick={handleProceedLogic} >Book Appointment</button>
    </div>
  )
}

export default Questionnaire;