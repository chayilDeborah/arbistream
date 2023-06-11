"use client";

import Image from "next/image";
import Nav from "./component/Nav";
import groupmic from "./asset/groupmic.svg";
import cropmusic from "./asset/cropmusic.png";
import box from "./asset/box.svg";
import star from "./asset/star.svg";
import Footer from "./component/Footer";
import mob from "./asset/mob.svg";
import mobmus from "./asset/mobmus.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <div>
          <div className="page-flex">
            <Image src={groupmic} alt="svg" className="groupmic" />
            <Image src={mob} alt="svg" className="mobsvg" />
            <div className="content-group">
              Content Creation & Aggregation Dex Built on Optimism
            </div>
            <Image src={cropmusic} alt="svg" className="grpmusic" />
            <Image src={mobmus} alt="svg" className="mobmus" />
          </div>
          <div className="util">
            Utilizing the Bribe Economy, Cheap Gas Fees powered by Optimism
          </div>
          <div className="btns-flex">
            <Image src={box} alt="svg" className="box" />
            <Link href="/dex" className="launch-link">
              <button  className="launch-btn1"id="launch-id">
                Launch App
              </button>
            </Link>
            <button className="white-btn">Whitepaper</button>
          </div>
          <div className="star-grp">
            <Image src={star} alt="svg" className="star" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
