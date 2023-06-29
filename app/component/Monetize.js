import Image from "next/image";
import phonemic from "../asset/phonemic.png";
import smallplay from "../asset/smallplay.png";


const Monetize = () => {
  return (
    <>
      <div className="flex justify-end">
        <Image src={phonemic} alt="svg" className="w-[137.932px] -mb-[68px]" />
      </div>
      <div className="flex-col text-white items-center mx-auto mt-[0] pt-[42px] pb-[49px] bg-[#4F1763]">
        <div className="text-white content-group mx-auto mb-[16px] z-10 w-[93%] lg:w-[100%]">
          Multiple Monetization Options
        </div>
        <p className="text-white util mb-[50px] leading-[0]">
          Monitize Your content In Multiple Ways as a Creator
        </p>
      </div>
      <div className="flex justify-center bg-background-black text-white mx-auto -mt-[0]">
        <div className="lg:w-[75%] lg:mt-[65px]">
          <div className="lg:flex justify-evenly">
            <Image
              src={smallplay}
              alt="image"
              className="mt-[50px] w-[29px] lg:w-[105px]"
            />
            <div className="flex flex-col justify-center align-center bg-[#8F2C91] h-[168.98px] w-[207px] rounded-[24px] mb-[30px] justify-center">
              <div className="relative h-[60px] w-[60px]  mx-auto items-center">
                <Image
                  src="/direct.svg"
                  fill={true}
                  alt="Image"
                  style={{ objectFit: "fit" }}
                  className=""
                />
              </div>
              <div className="flex text-white font-semibold items-center mt-3 justify-center text-lg">
                Direct Contributions
              </div>
            </div>
            <div className="flex flex-col bg-[#912C69] h-[168.98px] w-[207px] rounded-[24px] mb-[30px] justify-center">
              <div className="relative h-[60px] w-[60px]  mx-auto items-center">
                <Image
                  src="/content.svg"
                  fill={true}
                  alt="Image"
                  style={{ objectFit: "fit" }}
                  className=""
                />
              </div>
              <div className="flex text-white font-semibold items-center mt-3 justify-center text-lg">
                Sponsored Content
              </div>
            </div>
            <div className="flex flex-col bg-[#582C91] h-[168.98px] w-[207px] rounded-[24px] mb-[30px] justify-center">
              <div className="relative h-[60px] w-[60px] mx-auto items-center">
                <Image
                  src="/sharing.svg"
                  fill={true}
                  alt="Image"
                  style={{ objectFit: "fit" }}
                  className=""
                />
              </div>
              <div className="flex text-white font-semibold items-center mt-3 justify-center text-lg">
                Revenue Sharing
              </div>
            </div>
          </div>
          <div className="lg:flex ml-[0%] lg:ml-[35%]">
            <div className="flex flex-col bg-[#26889E] h-[168.98px] w-[207px] rounded-[24px] mb-[30px] justify-center lg:mr-[7%]">
              <div className="relative h-[60px] w-[60px]  mx-auto items-center">
                <Image
                  src="/adverts.svg"
                  fill={true}
                  alt="Image"
                  style={{ objectFit: "fit" }}
                  className=""
                />
              </div>
              <div className="flex text-white font-semibold items-center mt-3 justify-center text-lg ">
                Adverts placement
              </div>
            </div>
            <div className="flex flex-col bg-[#1C71A1] h-[168.98px] w-[207px] rounded-[24px] mb-[70px] justify-center">
              <div className="relative h-[60px] w-[60px] mx-auto items-center">
                <Image
                  src="/streaming.svg"
                  fill={true}
                  alt="Image"
                  style={{ objectFit: "fit" }}
                  className=""
                />
              </div>
              <div className="flex text-white font-semibold items-center justify-center text-lg">
                Real Yield from
              </div>
              <div className="flex text-white font-semibold items-center justify-center text-lg">
                Streaming
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Monetize;
