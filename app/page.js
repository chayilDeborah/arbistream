"use client";
import React from "react";
import Image from "next/image";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Link from "next/link";
import cropbar from "./asset/cropbar.png";
import middlebox from "./asset/middlebox.png";


import playsvg from "./asset/playsvg.svg";
import camera from "./asset/camera.svg";
import bell from "./asset/bell.svg";
import img2 from "./asset/img2.svg";
import desktopimg from "./asset/desktopimg.png";
import imgboy from "./asset/imgboy.png";
import imgirl from "./asset/imgirl.png";
import Monetize from "./component/Monetize";
import Roadmap from "./component/Roadmap";
import Partners from "./component/Partners";

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: "url('./asset/content-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    /* You can customize other background properties here */
  };
  return (
    <>
      <div className="bigg-wrap">
        <div className="wrapper" id="section1">
          <Nav />
          <div>
            <div
              className="page-flex"
              style={{
                backgroundImage: "url('/content-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* <Image src={ContentBg} alt="bg" /> */}
              <div className="home-container">
                <div className="content-group" id="section2">
                  Content Creation & Aggregation Dex Built on Optimism
                </div>

                <div className="util">
                  Utilizing the Bribe Economy, Cheap Gas Fees powered by
                  Optimism
                </div>
                <div className="btns-flex">
                  <Link href="/dex" scroll={true}>
                    <button className="launch-btn1" id="launch-id">
                      Launch App
                    </button>
                  </Link>

                  <Link href="/dex" scroll={true}>
                    <button className="white-btn">Whitepaper</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* section 2  */}
          <div className="mt-[50px]">
            <div className="text-white text-[28px] lg:text-[50px] lg:w-[68%] w-[80%] leading-[118.3%] font-bold text-center w-[80%] mx-auto mb-[10px]">
              {" "}
              Watch and Engage with Your Favourite Content
            </div>
            <p className="text-white util mb-[50px] w-[70%] lg:w-[100%]">
              Earn Rewards For Engagements in Astrava Tokens
            </p>
            <div className="lg:flex justify-center">
              <div className="flex overflow-scroll ml-5 mt-[50px] scrollbar-hide no-scrollbar w-full max-w-7xl">
                <div className="relative h-96 min-w-[300px]">
                  <Image
                    src="/img1.svg"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                </div>
                <div className="relative h-96 min-w-[300px]">
                  <Image
                    src={imgboy}
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                </div>
                <div className="relative h-96 min-w-[300px]">
                  <Image
                    src={imgirl}
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                </div>
                <div className="relative h-96 min-w-[300px]">
                  <Image
                    src="/img1.svg"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                </div>
                <div className="relative h-96 min-w-[300px]">
                  <Image
                    src="/img1.svg"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                </div>
                <div className="relative h-96 min-w-[300px]">
                  <Image
                    src="/img1.svg"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center explorcret mx-auto my-5 align-center">
              <button className="bg-[#274A9D] mx-auto text-white font-semibold rounded-[5px] py-3 px-7">
                Explore Top Creators
              </button>
            </div>
            <Image src={cropbar} alt="bar" className="w-[80px] lg:w-[273px]" />
            <Image
              src={middlebox}
              alt="svg"
              className="mx-auto -mt-[47px] lg:mt-[19px] w-[61px] h-[61px] lg:w-[153px] lg:h-[153px]"
            />
          </div>
          {/* end */}

          {/* section 3 */}
          <Monetize />

          
          {/* end */}

          {/* section 4  */}
          <Image
            src={playsvg}
            alt="image"
            className="playsvg w-[35px] lg:w-[99px] -mt-[38%] -mb-[27%] lg:-mb-[35%] 2xl:-mb-[14%] 2xl:mt-[8%]"
          />
          <Image src={camera} alt="image" className="w-[127px] lg:w-[448px]" />
          <div className="flex justify-center">
            <div>
              <div className="text-white text-[28px] lg:text-[50px] -mt-[10%] lg:-mt-[15%] font-extrabold w-[342px] lg:w-[71%] leading-[120.3%] mx-auto mb-[10px] lg:mb-[10px] text-center">
                {" "}
                Secure and Transparent Way To Trade Digital Assets
              </div>
              <p className="text-white mb-[10px] w-[234px] lg:w-[100%] font-normal text-[16px] lg:text-[24px] leading-[20px] lg:leading-[33px] m-auto text-center">
                Trade Easily, No Hidden Charges, Community Driven
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-[76%] mt-[50px] justify-center lg:mt-[70px] bg-background-black text-white justify-evenly mx-auto">
            <div className="flex-col bg-[#26569E] h-[168.98px] w-[285px] rounded-[24px] mb-[30px] items-center justify-center">
              <div className="relative h-[60px] w-[60px] mt-[30px] mx-auto items-center">
                <Image
                  src="/bots.svg"
                  fill={true}
                  alt="Image"
                  style={{ objectFit: "fit" }}
                  className=""
                />
              </div>
              <div className="flex text-white font-semibold items-center justify-center mt-3 text-lg mb-[50px]">
                Alpha Caller Bots
              </div>
            </div>
            <div className="flex-col bg-[#26569E] h-[168.98px] w-[285px] items-center rounded-[24px] mb-[30px] justify-items-center">
              <div className="relative h-[60px] w-[60px] mt-[30px] mx-auto items-center">
                <Image
                  src="/mask.svg"
                  fill={true}
                  alt="Image"
                  style={{ objectFit: "fit" }}
                  className=""
                />
              </div>
              <div className="flex text-white font-semibold mx-auto items-center justify-center text-lg">
                Streamlined
              </div>
              <div className="flex text-white font-semibold mx-auto items-center justify-center text-lg mb-[50px]">
                Blockchain Updates
              </div>
            </div>

            <div className="flex-col bg-[#26569E] h-[168.98px] w-[285px] rounded-[24px] mb-[100px] justify-center">
              <div className="relative h-[60px] w-[60px] mt-[30px] mx-auto items-center">
                <Image
                  src="/wallet.svg"
                  fill={true}
                  alt="Image"
                  style={{ objectFit: "fit" }}
                  className=""
                />
              </div>
              <div className="flex text-white font-semibold items-center mt-3 justify-center text-lg mb-[50px]">
                Wallet Monitoring
              </div>
            </div>
          </div>
          {/* end */}

          {/* section 5 */}
          <div className="flex justify-end">
            <Image
              src={bell}
              alt="image"
              className="w-[110px] lg:w-[185px] lg:-mb-[10%] -mb-[21%]"
            />
          </div>
          <div className="flex-col text-white items-center mx-auto py-[25px] bg-[#4F1763] ">
            <div className="text-white font-bold leading-[102.3%] text-center text-[28px] mx-auto mb-[16px]">
              Platform Features
            </div>
            <p className="text-white util mb-[50px]">
              Utilities and Well Though Out Features, Features Just for You
            </p>
          </div>
          <div className="flex justify-center relative w-[100%] mt-[50px] mx-auto items-center">
            <Image src={desktopimg} alt="image" className="hidden lg:block" />
            <Image
              src={img2}
              // fill={true}
              alt="Image"
              // style={{ objectFit: "fit" }}
              className="block lg:hidden "
            />
          </div>
          {/* end */}

          {/* section 6 */}
          <Partners />
          
          {/* end */}

          {/* section 7 */}
          <Roadmap />
          
          {/* end */}
        </div>
      </div>
      <Footer id="section3" />
    </>
  );
}