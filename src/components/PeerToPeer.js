import Image from "next/image";
import React, { useEffect, useState } from "react";

function PeerToPeer() {
    // fetch groups
    const [peerGroups, setPeerGroups] = useState();

    const fetchPeerGroups = async () => {
        const response = await fetch(
          "https://therapy-app-backend.vercel.app/api/peer-groups"
        );
        const data = await response.json();
        console.log(data);
        setPeerGroups(data);
      };
    
      useEffect(() => {
        fetchPeerGroups();
      }, []);

    // JoinGroup ...
    async function joinGroup(groupId, pseudoName) {
        console.log(groupId,pseudoName)
        try {
          const token = await AsyncStorage.getItem("token");
          const response = await fetch(
            `https://therapy-app-backend.vercel.app/api/peer-groups/join/${groupId}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
              body: JSON.stringify({ pseudoName: pseudoName }),
            }
          );
    
          const data = await response.json();
    
          if (response.ok) {
            console.log("Successfully joined the group!");
            fetchPeerGroups();
          } else {
            console.log(data.message || "Error joining group.");
          }
        } catch (error) {
          console.error(error);
          console.log("Error joining group. Please try again.");
        }
      }
    // Join Waitlist ...
    async function joinWaitlist(groupId) {
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await fetch(
                `http://therapy-app-backend.vercel.app/api/peer-groups/join-waitlist/${groupId}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );
          
            const data = await response.json();
            if (!response.ok) {
              console.error("Response not OK:", response.status, response.statusText);
          }
          
    
            if (response.status === 200) {
                showSuccessNotification(data.message);
                fetchPeerGroups();  
            } else {
                showErrorNotification(data.message);
            }
        } catch (error) {
          console.error("Error in /join-waitlist:", error.message);
            showErrorNotification("Error joining waitlist. Please try again.");
        }
    }
  return (
    <div className=" mx-auto h-[100vh] w-10/12 lg:w-[70%] md:my-12">
      <div className="w-full flex items-center justify-end md:w-5/6 lg:w-3/4 xl:w-[60%] mx-auto">
        <div className="flex items-center ">
          <div className="bg-gray-100  h-[35px] md:h-[40px] flex items-center px-2 rounded-l-3xl ">
            <Image
              src="/assets/searchIcon.png"
              alt="searchIcon"
              width={20}
              height={20}
              className="md:w-[25px] md:h-[25px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="enter keyword"
              className="h-[35px] md:h-[40px] bg-gray-100"
            />
          </div>
          <div className="bg-gray-300 px-6 rounded-r-sm  h-[35px] md:h-[40px] flex items-center">
            <Image
              src="/assets/filter.png"
              alt="searchIcon"
              width={20}
              height={20}
              className="md:w-[30px] md:h-[30px]"
            />
          </div>
        </div>
      </div>

      <div className="my-4 flex md:justify-start w-full md:w-5/6 lg:w-3/4 xl:w-[60%] mx-auto">
        <p className="text-[#7CB7FD] font-semibold text-2xl md:text-3xl">
          Explore
        </p>
      </div>


{/* Map Data */}
{peerGroups && peerGroups.map((item)=>(
          <div key={item._id} className=" w-full md:w-5/6 lg:w-3/4 xl:w-[60%] mx-auto my-4 md:my-8">
          <div className="grid w-full">
              
            <div className="flex justify-between items-center py-4">
              <p className="text-[20px] md:text-[28px] text-[#353434] font-medium">{item.title}</p>
              <p className="text-[#7CB7FD] text-sm md:text-md">KES {item.fee}</p>
            </div>
  
            <div>
              <p className="text-[#747272] text-sm md:text-lg py-1">{item.description}</p>
            </div>
  
            <div>
              <Image  src={item.image} alt="img" width={500} height={500} className="w-[100%] mx-auto rounded-md h-[200px] md:w-[100%] md:h-[350px]"/>
            </div>
  
            <div className="flex justify-between pt-2">
              <div className="flex gap-[5px] md:[20px] items-center">
                  <Image src='/assets/love.png' alt="img" width={25} height={25}  className="md:w-[40px] md:h-[40px]"/>
                  <p className="text-[12px] md:text-[15px] text-gray-600">300</p>
              </div> 
              <div className="flex gap-[5px] md:[20px] items-center">
                  <Image src='/assets/comments.png' alt="img" width={25} height={25}  className="md:w-[40px] md:h-[40px]"/>
                  <p className="text-[12px] md:text-[15px] text-gray-600">20</p>
              </div> 
              <div className="flex gap-[5px] md:[20px] items-center">
                  <Image src='/assets/forward.png' alt="img" width={25} height={25}  className="md:w-[40px] md:h-[40px]"/>
                  <p className="text-[12px] md:text-[15px] text-gray-600">70</p>
              </div> 
              {(item.status=== "closed")? <div className="flex gap-[5px] md:[20px] items-center">
                  <Image src='/assets/notify.png' alt="img" width={25} height={25}  className="md:w-[40px] md:h-[40px]"/>
              </div> :<div className="flex gap-[5px] md:[20px] items-center">
                  <Image src='/assets/add.png' alt="img" width={25} height={25}  className="md:w-[40px] md:h-[40px]"/>
              </div> }
            </div>
          </div>
        </div>
))}
    </div>
  );
}

export default PeerToPeer;
