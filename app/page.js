"use client";
import React from "react";
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
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PeopleIcon from "@mui/icons-material/People";
import Paper from "@mui/material/Paper";

export default function Home() {
  return (
    <>
      <div className="wrapper" id="section1">
        <Nav />
        <div>
          <div className="page-flex">
            <Image src={groupmic} alt="svg" className="groupmic" />
            <Image src={mob} alt="svg" className="mobsvg" />
            <div className="content-group" id="section2">
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
            <Link href="/dex" className="launch-link" scroll={true}>
              <button className="launch-btn1" id="launch-id">
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
      <Footer id="section3" />

    </>
  );
}
