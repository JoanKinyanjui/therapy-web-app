import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/schedule.module.css";

function Schedule() {
  const [activeTab, setActiveTab] = useState(1);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const upcomingAppointments = appointments
    ? appointments.filter((appointment) => appointment.status === "upcoming")
    : [];
  const pastAppointments = appointments
    ? appointments.filter((appointment) => appointment.status === "past")
    : [];

  const fetchAppointments = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await fetch(
        "https://therapy-app-backend.vercel.app/api/clients/appointments",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("==>", data);
      setAppointments(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="w-11/12 md:w-[70%] lg:w-[50%] mx-auto py-8">
      <div className="flex bg-gray-100 rounded-3xl justify-between">
        <button
          className={`w-1/2  py-2 ${
            activeTab === 1 ? "bg-[#DCDCDC]" : ""
          } rounded-3xl text-gray-600 text-sm md:text-lg`}
          onClick={() => setActiveTab(1)}
        >
          Upcoming Appointments
        </button>
        <button
          className={`w-1/2  py-2 ${
            activeTab === 2 ? "bg-[#DCDCDC]" : ""
          }  rounded-3xl text-gray-600 text-sm md:text-lg`}
          onClick={() => setActiveTab(2)}
        >
          Past Appointments
        </button>
      </div>
      <div>
        {activeTab === 1 && (
          <div className="p-4">
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((item) => (
                <div className="bg-gray-100 rounded-lg w-[85%] md:w-[50%] mx-auto shadow-lg py-2 md:py-4 ">
                  {/* part one */}
                  <div className="first flex justify-between px-2 items-center">
                    <div>
                      <Image
                        src={item.therapist.image}
                        alt="img"
                        width={40}
                        height={40}
                        className="md:w-[55px] md:h-[55px] w-[45px] h-[45px] rounded-full shadow-md"
                      />
                    </div>
                    <div>
                      <p className="text-sm md:text-lg  text-zinc-500">
                        {item.therapist.name}
                      </p>
                      <div>
                        {Array.from(
                          { length: item.therapist.rating },
                          (_, index) => (
                            <Image
                              key={index}
                              width={15}
                              height={15}
                              className="w-[20px] h-[20px]"
                              src="/assets/star.png"
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <Image
                        src="/assets/notify.png"
                        alt="img"
                        width={20}
                        height={20}
                        className="md:w-[25px] md:h-[25px]"
                      />
                    </div>
                  </div>
                  {/* part two */}
                  <div className="grid px-2 py-2 md:py-4">
                    <div>
                      <p className="font-semibold text-md md:text-xl  text-zinc-500">
                        Date and Time
                      </p>
                    </div>
                    <div className="flex justify-start gap-[15px] md:gap-[50px] ">
                      <div className="flex gap-[5px] items-center py-1">
                        <div>
                          <Image
                            src="/assets/schedule.png"
                            alt="img"
                            width={20}
                            height={20}
                            className="md:w-[25px] md:h-[25px]"
                          />
                        </div>
                        <div>
                          <p className="text-sm md:text-lg text-zinc-500">
                            {item.date}{" "}
                            {monthNames[item.month - 1].substring(0, 3)}, 2023
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-[5px] items-center">
                        <div>
                          <Image
                            src="/assets/clock.png"
                            alt="img"
                            width={20}
                            height={20}
                            className="md:w-[25px] md:h-[25px]"
                          />
                        </div>
                        <div>
                          <p className="text-sm md:text-lg  text-zinc-500">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* part 3 */}
                  <div className="flex justify-between px-2 text-sm md:text-md py-2 md:py-4">
                    <button className={`${styles.joinButton}`}>Join</button>
                    <button className={`${styles.scheduleButton}`}>
                      Cancel
                    </button>
                    <button className={`${styles.scheduleButton}`}>
                      Reschedule
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full justify-center flex items-center h-[50vh]"> You do not have any active appointments</div>
            )}
          </div>
        )}

        {activeTab === 2 && (
          <div className="p-4">
            {pastAppointments.length > 0 ?
              pastAppointments.map((item) => (
                <div className="bg-gray-100 rounded-lg w-[85%] md:w-[50%] mx-auto shadow-lg py-2 md:py-4 ">
                  {/* part one */}
                  <div className="first flex justify-between px-2 items-center">
                    <div>
                      <Image
                        src={item.therapist.image}
                        alt="img"
                        width={40}
                        height={40}
                        className="md:w-[55px] md:h-[55px] w-[45px] h-[45px] rounded-full shadow-md"
                      />
                    </div>
                    <div>
                      <p className="text-sm md:text-lg  text-zinc-500">
                        {item.therapist.name}
                      </p>
                      <div>
                        {Array.from(
                          { length: item.therapist.rating },
                          (_, index) => (
                            <Image
                              key={index}
                              width={15}
                              height={15}
                              className="w-[20px] h-[20px]"
                              src="/assets/star.png"
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <Image
                        src="/assets/notify.png"
                        alt="img"
                        width={20}
                        height={20}
                        className="md:w-[25px] md:h-[25px]"
                      />
                    </div>
                  </div>
                  {/* part two */}
                  <div className="grid px-2 py-2 md:py-4">
                    <div>
                      <p className="font-semibold text-md md:text-xl  text-zinc-500">
                        Date and Time
                      </p>
                    </div>
                    <div className="flex justify-start gap-[15px] md:gap-[50px] ">
                      <div className="flex gap-[5px] items-center py-1">
                        <div>
                          <Image
                            src="/assets/schedule.png"
                            alt="img"
                            width={20}
                            height={20}
                            className="md:w-[25px] md:h-[25px]"
                          />
                        </div>
                        <div>
                          <p className="text-sm md:text-lg text-zinc-500">
                            {item.date}{" "}
                            {monthNames[item.month - 1].substring(0, 3)}, 2023
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-[5px] items-center">
                        <div>
                          <Image
                            src="/assets/clock.png"
                            alt="img"
                            width={20}
                            height={20}
                            className="md:w-[25px] md:h-[25px]"
                          />
                        </div>
                        <div>
                          <p className="text-sm md:text-lg  text-zinc-500">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* part 3 */}
                  <div className="flex  justify-between md:justify-center md:gap-[40px] px-2 text-sm md:text-md py-2 md:py-4">
                    <button className={`${styles.scheduleButton2}`}>
                      Book Again
                    </button>
                    <button className={`${styles.joinButton2}`}>
                      Leave a Review
                    </button>
                  </div>
                </div>
              )) : <div className="w-full justify-center flex items-center h-[50vh]"> You do not have any past appointments</div>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Schedule;
