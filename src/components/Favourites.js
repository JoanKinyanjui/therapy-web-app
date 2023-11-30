import Image from "next/image";
import React from "react";

function Favourites() {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-[70%] mx-auto py-24">
      {/* map data */}
<div className="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto">
<div className="flex justify-between items-center">
        <div className="w-[20%] flex place-content-center">
          <Image
            src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
            width={50}
            height={50}
            alt="img"
            className="rounded-full w-[50px] h-[50px] md:w-[70px] md:h-[70px] shadow-lg mx-auto"
          />
        </div>
        <div className="w-[50%] place-content-center grid">
          <div>
            <p className="md:text-lg text-zinc-500 text-left">Joan Kinyanjui</p>
          </div>
          <div className="flex gap-[5px] md:gap-[8px]">
            <Image
              src="/assets/bluestar.png"
              width={50}
              height={50}
              alt="img"
              className="rounded-full w-[20px] h-[20px] md:w-[25px] md:h-[25px] "
            />
            <Image
              src="/assets/bluestar.png"
              width={50}
              height={50}
              alt="img"
              className="rounded-full w-[20px] h-[20px] md:w-[25px] md:h-[25px] "
            />
          </div>
        </div>
        <div className="w-[20%] flex place-content-center md:font-bold">
          <Image
            src="https://img.icons8.com/?size=50&id=37783&format=png"
            alt="img"
            width={15}
            height={15}
            className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
          />
        </div>
      </div>
      <div className="border-b border-gray-300 my-4 md:my-8"></div>
</div>
    </div>
  );
}

export default Favourites;
