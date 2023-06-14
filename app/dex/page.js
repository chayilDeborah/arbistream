"use client";
import React, { useState } from "react";
import Select from "react-select";
import Nav from "../component/DexNav";
import Image from "next/image";
import menu from "../asset/menu.svg";
import convert from "../asset/convert.svg";
import equiv from "../asset/equiv.svg";
import notice from "../asset/notice.svg";
import logowhite from '../asset/logowhite.svg'
import tick from "../asset/tick.svg";
import streamIcon from "../asset/stream_icon.svg"
import swapIcon from "../asset/swap_icon.svg"
import moreIcon from "../asset/more_icon.svg"
import rewardsIcon from "../asset/rewards_icon.svg"
import Box from "@mui/material/Box";
import Link from "next/link";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/VideoCall";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PeopleIcon from "@mui/icons-material/More";
import GifBox from "@mui/icons-material/CardGiftcard"
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'



export default function Dex() {
  const [open, setOpen] = React.useState(false);
  const styles = {
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
  };

  const router = useRouter();
  const navigateToAnotherPage = () => {
    router.push('/dex'); // Replace '/another-page' with the actual path of the page you want to navigate to
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "rgb(29, 34, 61)",
      borderRadius: "17px",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#ECECEC" : "#ececec",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#26489E" : "#26489E",

      }
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none"
    }),
    placeholder: (base) => ({
      ...base,
      placeholder: "Select Token"
    }),
    indicatorsContainer: (base) => ({
      ...base,
      color: "#D5D5D6"
    }),
    menu: (base) => ({
      ...base,
      // background: "#2d2c2c94"
      color: "#26489E"
    }),
    singleValue: (base) => ({
      ...base,
      color: "#26489E",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "17px"
    })
  };

  const data = [
    {
      value: 1,
      token: "ETH",
      icon: "https://res.cloudinary.com/dmye53wps/image/upload/v1686398570/ETH_ndf4du.svg",
    },
    {
      value: 2,
      token: "AST",
      icon: "https://res.cloudinary.com/dmye53wps/image/upload/v1686394877/AST_qd9pml.svg",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);
  };
  const handledChange = (e) => {
    setSelectedOption2(e);
  };
  return (
    <>
      <div style={{ background: "rgb(29, 34, 61)", margin: "-8px" }}>
        <Nav />
        <div className="main">
          <div className="container" style={{boxShadow: "0.2px 0.2px 1px black"}}>
            <div>
              <div className="tab-flex">
                <div className="swap-text">Swap</div>
                <Image src={menu} alt="menu-icon" className="menu-icon" />
              </div>
              <div className="first-token">
                <div>
                  <input className="input" />
                  <div className="token_equivalent">$220.07</div>
                </div>

                <Select
                  id='select-id'
                  styles={customStyles}
                  value={selectedOption}
                  options={data}
                  onChange={handleChange}
                  getOptionLabel={(e) => (
                    <div style={{ display: "flex", alignItems: "center" }} id="selectdiv-id">
                      <Image src={e.icon} width={20} height={20} />
                      <span style={{ marginLeft: 5 }}>{e.token}</span>
                    </div>
                  )}
                />
              </div>
              <div className="break-flex">
                <div className="first-line"></div>
                <Image src={convert} alt="convert" className="convert" />
                <div className="sec-line"></div>
              </div>
              <div className="first-token">
                <div>
                  <input className="input" />
                  <div className="token_equivalent">$238.07</div>
                </div>
                <Select
                  id="select-id"
                  styles={customStyles}
                  value={selectedOption2}
                  options={data}
                  onChange={handledChange}
                  getOptionLabel={(e) => (
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      id="selectdiv-id"
                    >
                      <Image src={e.icon} width={20} height={20} />
                      <span style={{ marginLeft: 5 }}>{e.token}</span>
                    </div>
                  )}
                />
              </div>
              <div className="swap-btn-flex">
                <button className="swap-connect-btn">Swap</button>
              </div>
              <div className="estimate-group">
                <div className="estim">
                  <div className="estimate-flex">
                    <div className="estim-text">Estimated Cost</div>
                    <div className="estim-no">
                      <Image src={equiv} alt="icon" className="equiv" />
                      <div className="estim-num">$5.08</div>
                    </div>
                  </div>
                  <div className="estimate-flex" id="estim-id">
                    <div className="estim-text">Price Impact</div>
                    <div className="estim-no">
                      <div className="estim-num">0.00%</div>
                    </div>
                  </div>
                  <div className="estimate-flex" id="estim-id">
                    <div className="estim-text-flex">
                      <div className="save">You Save</div>
                      <Image src={notice} alt="note" className="note" />
                    </div>
                    <div className="estim-no">
                      <Image src={tick} alt="icon" className="tick" />
                      <div className="estim-num">$5.08</div>
                    </div>
                  </div>
                  <div className="estimate-flex1" id="estim-id">
                    <div className="estim-text">Minimum Received</div>
                    <div className="estim-no">
                      <div className="estim-num">22,000 AST</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ pb: 7 }} className="bottom-nav">
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation sx={{ position: 'fixed', bottom: 0, width: 1.0 }} showLabels className="bot-navigate" style={{ background: "#1A1A27" }} id='bot-id'>

            <BottomNavigationAction
              onClick={navigateToAnotherPage}
              label="Swap"
              icon={<Image src={swapIcon} alt="Swap" />}
              className="nav-action"
              style={{ color: "#264794" }}
            />


            <BottomNavigationAction
              onClick={handleClickOpen}
              label="Stream"
              icon={<Image src={streamIcon} alt="Stream" />}
              className="nav-action"
              style={{ color: "#4C4F64" }}
            />


            <BottomNavigationAction
              onClick={handleClickOpen}
              label="Docs"
              icon={<Image src={rewardsIcon} alt="more" />}
              className="nav-action"
              style={{ color: "#4C4F64" }}
            />


            <BottomNavigationAction
              onClick={handleClickOpen}
              label="More"
              icon={<Image src={moreIcon} alt="more" />}
              className="nav-action"
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
          <DialogTitle id="alert-dialog-title">
            {"UNDERCONSTRUCTION"}
          </DialogTitle>
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
    </>
  );
}
