"use client";
import React, { useState } from "react";
import Nav from "../component/Nav";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import Tab, { tabClasses } from '@mui/base/Tab';
import SearchIcon from '@mui/icons-material/Search';
import Image from "next/image";
import profile from "../asset/profile.svg";
import profilevideo from "../asset/profilevideo.svg";
import love from "../asset/love.svg";
import profileplus from "../asset/profileplus.svg";
import comment from '../asset/comment.svg';
import ShareIcon from '@mui/icons-material/Share';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from "@mui/material/Box";
import {useRouter } from 'next/navigation'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import Person2Icon from '@mui/icons-material/Person2';

const Stream = () => {

  const [open, setOpen] = React.useState(false);
  const StyledTab = styled(Tab)`
&.${tabClasses.disabled} {
  opacity: 0.5;
  cursor: not-allowed;
}

&.${tabClasses.selected} {
  color: rgba(255, 255, 255, 1);
  border-bottom: 2px solid rgba(255, 255, 255, 1);
}
`
  const blue = {

  }
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  const router = useRouter();
  const navigateToAnotherPage = () => {
    router.push('/stream'); // Replace '/another-page' with the actual path of the page you want to navigate to
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenWhiteListform = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className="stream-nav-class">
    <Nav />
    </div>
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
            <div className="react-groups">
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
              <div className="combtn">
                  <Image src={comment} alt='comment' className="comment-svgs" />
                  <div className="reaction-no">500</div>
                </div>
                <div className="combtn">
                  <ShareIcon />
                  <div className="reaction-no">285</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    <div className="mobile-stream">
      <Tabs defaultValue={3} className="tabs">
        <div className="tabs-group">
          <TabsList className="tablist" id='tablist-id'>
            <StyledTab value={1} className="tabs" disabled><AddIcon /></StyledTab>
            <StyledTab value={2} className="tabs">Following</StyledTab>
            <StyledTab value={3} className="tabs">Stream</StyledTab>
            <StyledTab value={4} className="tabs" disabled><SearchIcon /></StyledTab>
          </TabsList>
        </div>
        <TabPanel value={1}>First page</TabPanel>
        <TabPanel value={2}>Second page</TabPanel>
        <TabPanel value={3}>
          <div className="stream-background" style={{
            backgroundImage: "url('/backgroundpic.png')", backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <div className="stream-details">
              <div className="feed-details">
                <div className="feed-name">
                  <div className="profile-name">Nakiya<span className="profile-span">@Nakiya</span></div>
                </div>
                <div className="profile-fam">Family is all that matters. What did you do for thanksgiving. Drop a comment.</div>
                <div className="profile-hashtags">#family #bonding #thanksgiving</div>
              </div>
              <div className="reactns">
                <Image src={profileplus} alt="profile-img" className="profile-img" id="profileplus" />
                <div className="iconbtn">
                  <IconButton onClick={handleLikeClick}>
                    {liked ? (
                      <Favorite sx={{ color: "red" }} />
                    ) : (
                      <FavoriteBorder />
                    )}
                  </IconButton>
                  <div className="reaction-no">3.2k</div>
                </div>
                <div className="combtn">
                  <Image src={comment} alt='comment' className="" />
                  <div className="reaction-no">500</div>
                </div>
                <div className="combtn">
                  <ShareIcon />
                  <div className="reaction-no">285</div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <Box sx={{ pb: 7 }} >
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation sx={{ position: 'fixed', bottom: 0, width: 1.0 }} showLabels className="bot-navigate" style={{ background: "#1A1A27" }} id='bot-id'>

            <BottomNavigationAction
              onClick={navigateToAnotherPage}
              icon={<VideoLibraryIcon  />}
              className="nav-action1"
              style={{ color: "#264794" }}
            />


            <BottomNavigationAction
              onClick={handleClickOpen}
              icon={<LibraryMusicIcon />}
              className="nav-action1"
              style={{ color: "#4C4F64" }}
            />


            <BottomNavigationAction
              onClick={handleClickOpen}
            
              icon={<MarkChatUnreadIcon />}
              className="nav-action1"
              style={{ color: "#4C4F64" }}
            />


            <BottomNavigationAction
              onClick={handleClickOpenWhiteListform}
              icon={<Person2Icon />}
              className="nav-action1"
              style={{ color: "#4C4F64" }}
            />

          </BottomNavigation>
        </Paper>
      </Box>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This Feature is coming soon.
            </DialogContentText>
          </DialogContent>
          <DialogActions>

            <Button onClick={handleClose} autoFocus>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This Feature is coming soon.
            </DialogContentText>
          </DialogContent>
          <DialogActions>

            <Button onClick={handleClose} autoFocus>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <></>
      </div>
    </>
  );
};

export default Stream;
