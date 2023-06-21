"use client";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Nav from "../component/Nav";
import Image from "next/image";
import profile from "../asset/profile.svg";
import profilevideo from "../asset/profilevideo.svg";
import love from "../asset/love.svg";

// import comment from
const Stream = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      <Nav />
      <div className="stream-wrap">
        <div>
          <div className="profile-flex-grp">
            <Image src={profile} alt="profile-img" className="profile-img" />
            <div className="profile-names-flex">
              <div className="profile-name">
                Nakiya<span className="profile-span">@Nakiya</span>
              </div>
              <div className="profile-fam">
                Family is all that matters. What did you do for thanksgiving.
                Drop a comment.
              </div>
              <div className="profile-hastags">
                #family #bonding #thanksgiving
              </div>
            </div>
            <button className="profile-btn">Follow</button>
          </div>
          <div className="profile-video-flex">
            <Image src={profilevideo} alt="video" className="prof-video" />
            <div>
              <div className="love-grp">
                <IconButton onClick={handleLikeClick}>
                  {liked ? (
                    <Favorite sx={{ color: "red" }} />
                  ) : (
                    <Image src={love}  style={{border: "white"}} className="love-border" />
                  )}
                </IconButton>
                <div className="reaction-no">3.2k</div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stream;
