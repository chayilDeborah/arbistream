import React from "react";
import Image from "next/image";
import forward from "../asset/forward.svg";
import mic from "../asset/mic.png"; 


const Partners = () => {
  return (
    <>
      <div className="flex mt-[60px] lg:mt-[12%] mx-auto items-center 2xl:mt-[6%]">
        <Image src={forward} alt="image" className="w-[145px] mr-[52px] lg:w-[483px] 2xl:mb-[3%]" />
        <Image
          src={mic}
          alt="Image"
          className=" lg:w-[89px] lg:h-[121px] lg:-mt-[15%] lg:ml-[10%] lg:-mb-[4%] 2xl:ml-[24%]"
        />
      </div>
      <div className="mt-[-27px] lg:-mt-[14%] mb-[41px]">
        <div className="text-white content-group mx-auto mb-[20px]">
          Our Partners
        </div>
        <p className="text-white util mb-[50px]">
          We are building the Ecosystem with the help of these Great Teams
        </p>
      </div>
      <div className="flex justify-center bg-gray-400 pb-[20px] lg:bg-white mb-[80px]">
        <div className="grid grid-cols-2 items-center justify-items-center  h-[243px] w-[100%] lg:w-[60%] lg:mt-[30px] lg:mb-[30px]">
          <div className="relative w-[129px] h-[38px]">
            <Image
              src="/unipass1.svg"
              fill={true}
              alt="Image"
              style={{ objectFit: "fit" }}
              className=""
            />
          </div>
          <div className="relative w-[129px] h-[38px] ">
            <Image
              src="/pinksale2.svg"
              fill={true}
              alt="Image"
              style={{ objectFit: "fit" }}
              className=""
            />
          </div>
          <div className="relative w-[129px] h-[38px] ml-[0] lg:ml-[76%]">
            <Image
              src="/dexview.svg"
              fill={true}
              alt="Image"
              style={{ objectFit: "fit" }}
              className=""
            />
          </div>
          <div className="relative w-[129px] h-[38px] ml-[0] lg:ml-[76%]">
            <Image
              src="/arbitrum2.svg"
              fill={true}
              alt="Image"
              style={{ objectFit: "fit" }}
              className=""
            />
          </div>
          <div className="relative w-[129px] h-[38px] ">
            <Image
              src="/arbitrum2.svg"
              fill={true}
              alt="Image"
              style={{ objectFit: "fit" }}
              className=""
            />
          </div>
          <div className="relative w-[129px] h-[38px] mb-[20px]">
            <Image
              src="/unipass2.svg"
              fill={true}
              alt="Image"
              style={{ objectFit: "fit" }}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;