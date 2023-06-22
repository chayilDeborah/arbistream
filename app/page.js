"use client";
import React from "react";
import Image from "next/image";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Link from "next/link";


export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: "url('./asset/content-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center"
    /* You can customize other background properties here */
  };
  return (
    <>
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
                Content Creation & Aggregation Dex Built on
                Optimism
              </div>

              <div className="util">
                Utilizing the Bribe Economy, Cheap Gas Fees
                powered by Optimism
              </div>
              <div className="btns-flex">

                <Link
                  href="/dex"
                  scroll={true}
                >
                  <button
                    className="launch-btn1"
                    id="launch-id"
                  >
                    Launch App
                  </button>
                </Link>

                <Link
                  href="/dex"
                  scroll={true}
                >
                  <button className="white-btn">
                    Whitepaper
                  </button>

                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* section 2  */}
        <div className="mt-[100px]">
          <div className="text-white content-group mx-auto mb-[50px]"> Watch and Engage with Your Favourite Content</div>
          <p className="text-white util mb-[50px]">Earn Rewards For Engagements in Astrava Tokens</p>
          
          <div className="flex overflow-scroll ml-5 mt-[50px] scrollbar-hide no-scrollbar">
            <div className="relative h-96 min-w-[300px]">
              <Image
                  src="/img1.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "cover"}}
                  className="rounded-2xl"
              />
            </div>
            <div className="relative h-96 min-w-[300px]">
              <Image
                  src="/img1.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "cover"}}
                  className="rounded-2xl"
              />
            </div>
            <div className="relative h-96 min-w-[300px]">
              <Image
                  src="/img1.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "cover"}}
                  className="rounded-2xl"
              />
            </div>
            <div className="relative h-96 min-w-[300px]">
              <Image
                  src="/img1.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "cover"}}
                  className="rounded-2xl"
              />
            </div>
            <div className="relative h-96 min-w-[300px]">
              <Image
                  src="/img1.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "cover"}}
                  className="rounded-2xl"
              />
            </div>
            <div className="relative h-96 min-w-[300px]">
              <Image
                  src="/img1.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "cover"}}
                  className="rounded-2xl"
              />
            </div>
          </div>  

          <div className="flex items-center mx-auto my-5 align-center">
            <button className="bg-[#274A9D] mx-auto text-white font-semibold rounded-[5px] py-3 px-7">
              Explore Top Creators
            </button>
          </div>
        </div>
        {/* end */}

        {/* section 3 */}
        <div className="flex-col text-white items-center mx-auto mt-[200px] py-[25px] bg-[#4F1763] ">
          <div className="text-white content-group mx-auto mb-[16px]">Multiple Monitization Options</div>
          <p className="text-white util mb-[50px]">Monitize Your content In Multiple Ways as a Creator</p>
        </div>

        <div className="flex mt-[75px] bg-background-black text-white justify-evenly mx-auto">
          <div className="flex-col bg-[#8F2C91] h-[168.98px] w-[207px] rounded-[24px] mb-[20px] justify-center">
            <div className="relative h-[60px] w-[60px] mt-[50px] mx-auto items-center">
              <Image
                  src="/direct.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "fit"}}
                  className=""
              />
            </div>
            <div className="flex text-white font-semibold items-center mt-3 justify-center text-lg mb-[50px]">Direct Contributions</div>
          </div>
          <div className="flex-col bg-[#912C69] h-[168.98px] w-[207px] rounded-[24px] mb-[20px] justify-center">
            <div className="relative h-[60px] w-[60px] mt-[50px] mx-auto items-center">
              <Image
                  src="/content.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "fit"}}
                  className=""
              />
            </div>
            <div className="flex text-white font-semibold items-center mt-3 justify-center text-lg mb-[50px]">Sponsored Content</div>
          </div>
          <div className="flex-col bg-[#582C91] h-[168.98px] w-[207px] rounded-[24px] mb-[20px] justify-center">
            <div className="relative h-[60px] w-[60px] mt-[50px] mx-auto items-center">
              <Image
                  src="/sharing.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "fit"}}
                  className=""
              />
            </div>
            <div className="flex text-white font-semibold items-center mt-3 justify-center text-lg mb-[50px]">Revenue Sharing</div>
          </div>
          <div className="flex-col bg-[#26889E] h-[168.98px] w-[207px] rounded-[24px] mb-[20px] justify-center">
            <div className="relative h-[60px] w-[60px] mt-[50px] mx-auto items-center">
              <Image
                  src="/adverts.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "fit"}}
                  className=""
              />
            </div>
            <div className="flex text-white font-semibold items-center mt-3 justify-center text-lg mb-[50px]">Adverts placement</div>
          </div>
          <div className="flex-col bg-[#1C71A1] h-[168.98px] w-[207px] rounded-[24px] mb-[20px] justify-center">
            <div className="relative h-[60px] w-[60px] mt-[50px] mx-auto items-center">
              <Image
                  src="/streaming.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "fit"}}
                  className=""
              />
            </div>
            <div className="flex text-white font-semibold items-center justify-center text-lg">Real Yield from</div>
            <div className="flex text-white font-semibold items-center justify-center text-lg mb-[50px]">Streaming</div>
          </div>
        </div>
        {/* end */}

        {/* section 4  */}
        <div className="mt-[100px]">
          <div className="text-white content-group mx-auto mb-[50px]"> Secure and Transparent Way To Trade Digital Assets</div>
          <p className="text-white util mb-[50px]">Trade Easily, No Hidden Charges, Community Driven</p>
        </div>

        <div className="flex mt-[75px] bg-background-black text-white justify-evenly mx-auto">
          <div className="flex-col bg-[#26569E] h-[168.98px] w-[207px] rounded-[24px] mb-[20px] items-center justify-center">
            <div className="relative h-[60px] w-[60px] mt-[50px] mx-auto items-center">
              <Image
                  src="/bots.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "fit"}}
                  className=""
              />
            </div>
            <div className="flex text-white font-semibold items-center justify-center mt-3 text-lg mb-[50px]">Alpha Caller Bots</div>
          </div>
          <div className="flex-col bg-[#26569E] h-[168.98px] w-[207px] items-center rounded-[24px] mb-[20px] justify-items-center">
            <div className="relative h-[60px] w-[60px] mt-[50px] mx-auto items-center">
              <Image
                  src="/mask.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "fit"}}
                  className=""
              />
            </div>
            <div className="flex text-white font-semibold mx-auto items-center justify-center text-lg">Streamlined</div>
            <div className="flex text-white font-semibold mx-auto items-center justify-center text-lg mb-[50px]">Blockchain Updates</div>
          </div>
          <div className="flex-col bg-[#26569E] h-[168.98px] w-[207px] rounded-[24px] mb-[20px] justify-center">
            <div className="relative h-[60px] w-[60px] mt-[50px] mx-auto items-center">
              <Image
                  src="/wallet.svg" 
                  fill={true} 
                  alt="Image"
                  style={{objectFit: "fit"}}
                  className=""
              />
            </div>
            <div className="flex text-white font-semibold items-center mt-3 justify-center text-lg mb-[50px]">Wallet Monitoring</div>
          </div>
        </div>
        {/* end */}

        {/* section 5 */}
        <div className="flex-col text-white items-center mx-auto mt-[200px] py-[25px] bg-[#4F1763] ">
          <div className="text-white content-group mx-auto mb-[16px]">Platform Features</div>
          <p className="text-white util mb-[50px]">Utilities and Well Though Out Features, Features Just for You</p>
        </div>
        <div className="relative h-[534px] w-[461px] mt-[50px] mx-auto items-center">
          <Image
              src="/img2.svg" 
              fill={true} 
              alt="Image"
              style={{objectFit: "fit"}}
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
              style={{objectFit: "fit"}}
              className=""
          />
        </div>
        <div className="my-[30px]">
          <div className="text-white content-group mx-auto mb-[20px]">Our Partners</div>
          <p className="text-white util mb-[50px]">We are building the Ecosystem with the help of these Great Teams</p>
        </div>
        <div className="grid grid-cols-3 items-center justify-items-center space-y-5 h-[243px] bg-gray-400">
          <div className="relative w-[129px] h-[38px]">
            <Image
                src="/unipass1.svg" 
                fill={true} 
                alt="Image"
                style={{objectFit: "fit"}}
                className=""
            />
          </div>  
          <div className="relative w-[129px] h-[38px] ">
            <Image
                src="/pinksale2.svg" 
                fill={true} 
                alt="Image"
                style={{objectFit: "fit"}}
                className=""
            />
          </div>  
          <div className="relative w-[129px] h-[38px]">
            <Image
                src="/dexview.svg" 
                fill={true} 
                alt="Image"
                style={{objectFit: "fit"}}
                className=""
            />
          </div>  
          <div className="relative w-[129px] h-[38px]">
            <Image
                src="/arbitrum2.svg" 
                fill={true} 
                alt="Image"
                style={{objectFit: "fit"}}
                className=""
            />
          </div>  
          <div className="relative w-[129px] h-[38px] ">
            <Image
                src="/arbitrum2.svg" 
                fill={true} 
                alt="Image"
                style={{objectFit: "fit"}}
                className=""
            />
          </div>  
          <div className="relative w-[129px] h-[38px] ">
            <Image
                src="/unipass2.svg" 
                fill={true} 
                alt="Image"
                style={{objectFit: "fit"}}
                className=""
            />
          </div>         
        </div>
        {/* end */}

        {/* section 7 */}
        <div className="flex-col text-white items-center mx-auto mt-[200px] py-[25px] bg-[#4F1763] ">
          <div className="text-white content-group mx-auto mb-[16px]">Our RoadMap</div>
          <p className="text-white util mb-[50px]">Anticipate Our Plans & RoadMap</p>
          
          <div className="space-y-5 mt-10 ">
            <div className="flex rounded-lg h-[74px] max-w-[350px] mx-auto items-center justify-center outline outline-4 outline-white">
              
              <div className="relative ml-14 mr-2 h-[38px] w-[40px] justify-evenly items-center">
                <Image
                    src="/vector.png" 
                    fill={true} 
                    alt="Image"
                    style={{objectFit: "fit"}}
                    className=""
                />
            </div>
            <p className="text-lg right-3 font-semibold">Platform Development Commencement</p>
            </div>
            
            <div className="flex rounded-lg h-[74px] max-w-[350px] mx-auto items-center justify-center outline outline-4 outline-white">
              <div className="relative h-[38px] w-[40px] mr-2 justify-evenly items-center">
                <Image
                    src="/vector2.png" 
                    fill={true} 
                    alt="Image"
                    style={{objectFit: "fit"}}
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
                    style={{objectFit: "fit"}}
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
                    style={{objectFit: "fit"}}
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
                    style={{objectFit: "fit"}}
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
                    style={{objectFit: "fit"}}
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
                    style={{objectFit: "fit"}}
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
                    style={{objectFit: "fit"}}
                    className=""
                />
              </div>
              <p className="text-lg font-semibold">Token Airdrop</p>
            </div>
          </div>
          
        </div>
        {/* end */}
      </div>

      <Footer id="section3" />
    </>
  );
}
