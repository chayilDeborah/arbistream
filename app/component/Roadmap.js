import React from "react";
import Image from "next/image";
import bars2 from "../asset/bars2.svg";
import forwarded from "../asset/forwarded.svg";


const Roadmap = () => {
  return (
    <>
      <div className="flex justify-end">
        <Image
          src={forwarded}
          alt="image"
          className="-mb-[29%] lg:-mb-[8%] 2xl:-mb-[2%] lg:mr-[40%] w-[100px]"
        />
        <Image src={bars2} alt="image" className="-mb-[16%] lg:-mb-[5%]" />
      </div>
      <div className="flex-col text-white items-center mx-auto mt-[00px] pt-[35px] pb-[61px] mb-[80px] bg-[#4F1763] ">
        <div className="text-white content-group mx-auto mb-[16px]">
          Our RoadMap
        </div>
        <p className="text-white util mb-[50px]">
          Anticipate Our Plans & RoadMap
        </p>
        <div className="lg:flex lg:justify-center">
          <div className="space-y-5 lg:w-[90%] 2xl:w-[54%] mx-auto mt-[20px] lg:mt-[33px]">
            <div className="block lg:flex space-y-5 lg:space-y-0">
              <div className="flex rounded-lg h-[74px] max-w-[248px] lg:max-w-[328px] mx-auto lg:mx-[0] items-center lg:mr-[30px] justify-center outline outline-4 outline-white">
                <div className="relative ml-[17px] mr-[10px] h-[38px] w-[40px] justify-evenly items-center">
                  <Image
                    src="/vector.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-[16px] right-3 font-bold lg:text-[24px]">
                  Platform Development Commencement
                </p>
              </div>
              <div className="flex rounded-lg h-[74px] max-w-[168px] lg:max-w-[243px] mx-auto lg:mx-[0]  items-center lg:mr-[30px] justify-center outline outline-4 outline-white">
                <div className="relative ml-[17px] h-[38px] w-[40px] mr-[10px] justify-evenly items-center">
                  <Image
                    src="/vector2.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-bold lg:text-[24px]">
                  Community Building
                </p>
              </div>

              <div className="flex rounded-lg h-[74px] max-w-[164px] lg:max-w-[237px] mx-auto lg:mx-[0] items-center  lg:mr-[30px] justify-center outline outline-4 outline-white">
                <div className="relative ml-[17px] h-[38px] w-[40px] mr-[10px] justify-evenly items-center">
                  <Image
                    src="/awareness.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-semibold lg:text-[24px]">
                  Awareness Creation
                </p>
              </div>

              <div className="flex rounded-lg h-[74px] max-w-[190px] max-w-[248px] mx-auto lg:mx-[0] items-center lg:mr-[30px] justify-center outline outline-4 outline-white">
                <div className="relative ml-[17px] h-[38px] w-[40px] mr-[10px] justify-evenly items-center">
                  <Image
                    src="/vested.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-bold lg:text-[24px]">
                  Vested private Sale
                </p>
              </div>
            </div>
            <div className="block lg:flex space-y-5 lg:space-y-0 mt-[40px]">
              <div className="flex rounded-lg h-[74px] max-w-[187px] lg:max-w-[241px] mx-auto lg:mx-[0] items-center lg:mr-[30px] justify-center outline outline-4 outline-white">
                <div className="relative h-[38px] w-[40px] ml-[17px] mr-[10px] justify-evenly items-center">
                  <Image
                    src="/presale.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-semibold lg:text-[24px] mr-[17px]">
                  Public Presale
                </p>
              </div>
              <div className="flex rounded-lg h-[74px] max-w-[203px] lg:max-w-[297px] mx-auto lg:mx-[0]  items-center lg:mr-[30px] justify-center outline outline-4 outline-white">
                <div className="relative h-[38px] w-[40px] ml-[17px] mr-[10px] justify-evenly items-center">
                  <Image
                    src="/launch.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-semibold lg:text-[24px] mr-[17px]">
                  Platform Launch
                </p>
              </div>

              <div className="flex rounded-lg h-[74px] max-w-[171px] lg:max-w-[247px] mx-auto lg:mx-[0]  items-center  lg:mr-[30px] justify-center outline outline-4 outline-white">
                <div className="relative h-[38px] w-[40px] ml-[17px] mr-[10px] justify-evenly items-center">
                  <Image
                    src="/creators.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-semibold lg:text-[24px] mr-[17px]">
                  Creators Onboarding
                </p>
              </div>

              <div className="flex rounded-lg h-[74px] max-w-[187px] lg:max-w-[271px]  mx-auto lg:mx-[0] items-center lg:mr-[30px] justify-center outline outline-4 outline-white">
                <div className="relative h-[38px] w-[40px] ml-[17px] mr-[10px] justify-evenly items-center">
                  <Image
                    src="/airdrop.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-semibold lg:text-[24px] mr-[17px]">
                  Token Airdrop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Roadmap;