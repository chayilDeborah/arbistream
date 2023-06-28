"use client";
import React from "react";
import Image from "next/image";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Link from "next/link";
import cropbar from "./asset/cropbar.png";
import middlebox from "./asset/middlebox.png";
import phonemic from "./asset/phonemic.png";
import smallplay from "./asset/smallplay.png";
import playsvg from "./asset/playsvg.svg";
import camera from "./asset/camera.svg";

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
            <div
              className="text-white text-[28px] lg:text-[50px] lg:w-[68%] w-[80%] leading-[118.3%] font-bold text-center w-[80%] mx-auto mb-[10px]"
            >
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
          <div className="flex justify-end">
            <Image
              src={phonemic}
              alt="svg"
              className="w-[137.932px] -mb-[68px]"
            />
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
                <Image src={smallplay} alt="image" className="mt-[50px] w-[29px] lg:w-[105px]" />
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
                <div className="flex flex-col bg-[#1C71A1] h-[168.98px] w-[207px] rounded-[24px] mb-[30px] justify-center">
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
          {/* end */}

          {/* section 4  */}
          <Image src={playsvg} alt="image" className="playsvg" />
          <Image src={camera} alt="image" />
          <div className="flex justify-center">
            <div>
              <div
                className="text-white text-[28px] lg:text-[50px] lg:-mt-[-15%] font-extrabold w-[342px] lg:w-[71%] leading-[120.3%] mx-auto mb-[10px] lg:mb-[10px] text-center"
              >
                {" "}
                Secure and Transparent Way To Trade Digital Assets
              </div>
              <p className="text-white mb-[10px] w-[234px] lg:w-[100%] font-normal text-[16px] lg:text-[24px] leading-[20px] lg:leading-[33px] m-auto text-center">
                Trade Easily, No Hidden Charges, Community Driven
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-[76%] mt-[50px] justify-center lg:mt-[70px] bg-background-black text-white justify-evenly mx-auto">
            <div className="flex-col bg-[#26569E] h-[168.98px] w-[285px] rounded-[24px] mb-[60px] items-center justify-center">
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
            <div className="flex-col bg-[#26569E] h-[168.98px] w-[285px] items-center rounded-[24px] mb-[20px] justify-items-center">
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

            <div className="flex-col bg-[#26569E] h-[168.98px] w-[285px] rounded-[24px] mb-[20px] justify-center">
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
          <div className="flex-col text-white items-center mx-auto py-[25px] bg-[#4F1763] ">
            <div className="text-white content-group mx-auto mb-[16px]">
              Platform Features
            </div>
            <p className="text-white util mb-[50px]">
              Utilities and Well Though Out Features, Features Just for You
            </p>
          </div>
          <div className="relative h-[534px] w-[461px] mt-[50px] mx-auto items-center">
            <Image
              src="/img2.svg"
              fill={true}
              alt="Image"
              style={{ objectFit: "fit" }}
              className=""
            />
          </div>
          {/* end */}

          {/* section 6 */}
          <div className="relative h-[55px] w-[41px] mt-[200px] mx-auto items-center">
            <Image
              src="/mic.png"
              fill={true}
              alt="Image"
              style={{ objectFit: "fit" }}
              className=""
            />
          </div>
          <div className="my-[30px]">
            <div className="text-white content-group mx-auto mb-[20px]">
              Our Partners
            </div>
            <p className="text-white util mb-[50px]">
              We are building the Ecosystem with the help of these Great Teams
            </p>
          </div>
          <div className="grid grid-cols-3 items-center justify-items-center space-y-5 h-[243px] bg-gray-400">
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
            <div className="relative w-[129px] h-[38px]">
              <Image
                src="/dexview.svg"
                fill={true}
                alt="Image"
                style={{ objectFit: "fit" }}
                className=""
              />
            </div>
            <div className="relative w-[129px] h-[38px]">
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
            <div className="relative w-[129px] h-[38px] ">
              <Image
                src="/unipass2.svg"
                fill={true}
                alt="Image"
                style={{ objectFit: "fit" }}
                className=""
              />
            </div>
          </div>
          {/* end */}

          {/* section 7 */}
          <div className="flex-col text-white items-center mx-auto mt-[200px] py-[25px] bg-[#4F1763] ">
            <div className="text-white content-group mx-auto mb-[16px]">
              Our RoadMap
            </div>
            <p className="text-white util mb-[50px]">
              Anticipate Our Plans & RoadMap
            </p>

            <div className="space-y-5 mt-10 ">
              <div className="flex rounded-lg h-[74px] max-w-[350px] mx-auto items-center justify-center outline outline-4 outline-white">
                <div className="relative ml-14 mr-2 h-[38px] w-[40px] justify-evenly items-center">
                  <Image
                    src="/vector.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg right-3 font-semibold">
                  Platform Development Commencement
                </p>
              </div>

              <div className="flex rounded-lg h-[74px] max-w-[350px] mx-auto items-center justify-center outline outline-4 outline-white">
                <div className="relative h-[38px] w-[40px] mr-2 justify-evenly items-center">
                  <Image
                    src="/vector2.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-semibold">Community Building</p>
              </div>

              <div className="flex rounded-lg h-[74px] max-w-[350px] mx-auto items-center justify-center outline outline-4 outline-white">
                <div className="relative h-[38px] w-[40px] mr-2 justify-evenly items-center">
                  <Image
                    src="/awareness.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-semibold">Awareness Creation</p>
              </div>

              <div className="flex rounded-lg h-[74px] max-w-[350px] mx-auto items-center justify-center outline outline-4 outline-white">
                <div className="relative h-[38px] w-[40px] mr-2 justify-evenly items-center">
                  <Image
                    src="/vested.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-semibold">Vested private Sale</p>
              </div>

              <div className="flex rounded-lg h-[74px] max-w-[350px] mx-auto items-center justify-center outline outline-4 outline-white">
                <div className="relative h-[38px] w-[40px] mr-2 justify-evenly items-center">
                  <Image
                    src="/presale.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-semibold">Public Presale</p>
              </div>

              <div className="flex rounded-lg h-[74px] max-w-[350px] mx-auto items-center justify-center outline outline-4 outline-white">
                <div className="relative h-[38px] w-[40px] mr-2 justify-evenly items-center">
                  <Image
                    src="/launch.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-semibold">Platform Launch</p>
              </div>

              <div className="flex rounded-lg h-[74px] max-w-[350px] mx-auto items-center justify-center outline outline-4 outline-white">
                <div className="relative h-[38px] w-[40px] mr-2 justify-evenly items-center">
                  <Image
                    src="/creators.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-semibold">Creators Onboarding</p>
              </div>

              <div className="flex rounded-lg h-[74px] max-w-[350px] mx-auto items-center justify-center outline outline-4 outline-white">
                <div className="relative h-[38px] w-[40px] mr-2 justify-evenly items-center">
                  <Image
                    src="/airdrop.png"
                    fill={true}
                    alt="Image"
                    style={{ objectFit: "fit" }}
                    className=""
                  />
                </div>
                <p className="text-lg font-semibold">Token Airdrop</p>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
      <Footer id="section3" />
    </>
  );
}
