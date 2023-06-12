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
      </div>
      <Footer id="section3" />
    </>
  );
}
