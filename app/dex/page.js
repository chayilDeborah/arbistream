"use client";
import React, { useState, useEffect } from "react";
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
import TextField from "@mui/material/TextField"
import { useAccount } from 'wagmi'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { fetchTokensForOptimism } from "./../sdk/FetchTokens"
import { Getrate } from "../sdk/GetRate";
import { useNetwork, useSwitchNetwork } from 'wagmi'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

//1. Price
//3. whitelist
//https://script.google.com/macros/s/AKfycbzWZ3V5LNLgROJJoVsgTkD0VXOBfY88YodogxJrQtO4IUKQikm1c7ueh7ezRZIDiWk3/exec
//https://script.google.com/macros/s/AKfycbzWZ3V5LNLgROJJoVsgTkD0VXOBfY88YodogxJrQtO4IUKQikm1c7ueh7ezRZIDiWk3/exec
const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Dex() {
  const [open, setOpen] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);
  const [coummintyCode, setCommuintyCode] = React.useState('')
  const [WalletAddress, setWalletAddress] = React.useState('')
  const [loading, setLoading] = useState({ text: "Join", disabled: false })
  const [token1, setToken1] = useState()
  const [token2, setToken2] = useState()
  const [token1Amount, setToken1Amount] = useState("")
  const [amountOut, setAmountOut] = useState(0)
  const [openError, setOpenError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()
  const [tokenList, setTokenList] = useState([{
    value: 1,
    "symbol": "WETH",
    "address": "0x4200000000000000000000000000000000000006",
    "decimals": 18,
    "img": "https://cdn.paraswap.io/token/token.png",
    "network": 10
  },])
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()
  const styles = {
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
  };
  const data = [
    {
      value: 1,
      "symbol": "WETH",
      "address": "0x4200000000000000000000000000000000000006",
      "decimals": 18,
      "img": "https://cdn.paraswap.io/token/token.png",
      "network": 10
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);
    console.log({ e })
    setToken1(e)
  };
  const handledChange = (e) => {
    setSelectedOption2(e);
    setToken2(e)

  };
  useEffect(() => {
    if (isConnected) {
      setWalletAddress(address)
    }
    console.log(chain)
  }, [])
  useEffect(() => {
    (async () => {
      try {
        // Perform asynchronous operations here
        const token = await fetchTokensForOptimism(chain?.id)
        setTokenList(token.tokens)
        console.log(token.tokens)
      } catch (error) {
        console.error(error);
      }
    })();
  }, [selectedOption, selectedOption2, isConnected, chain?.id])
  function convertEvmUnit(value, fromDecimals, toDecimals) {
    const valueBigInt = BigInt(value);
    const scaleFactor = BigInt(10 ** (toDecimals - fromDecimals));
    const convertedValue = valueBigInt * scaleFactor;
    return convertedValue.toString();
  }

  useEffect(() => {

    (async () => {
      if (token1 && token2 && token1Amount) {
        try {
          // Perform asynchronous operations here
          const res = await Getrate(token1.symbol, token2.symbol, token1Amount, address, chain.id, token1.decimals, token2.decimals)
          if (res) {
            console.log(res)
            setAmountOut(res.sellAmount / (10 ** token2.decimals))

          }
          if (res.code) {
            //  console.log({ res })
            setOpenError(true)
            const { validationErrors } = res
            setErrorMsg(res.reason + "" + validationErrors[0].reason)

          }


        } catch (error) {
          console.error(error);
          setOpenError(true)
          setErrorMsg("Error Occurred")
        }
      }
    })();



  }, [address, token1, token1Amount, token2])



  const router = useRouter();
  const navigateToAnotherPage = (page) => {
    router.push(page); // Replace '/another-page' with the actual path of the page you want to navigate to
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
  const handleCloseWhitelistForm = () => {
    setOpenForm(false);
  };

  const joinWhitelist = async () => {
    //set to loading
    if (isConnected) {
      setWalletAddress(address)
      setLoading({ text: "Loading ....", disabled: true })
      const requestOptions = {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log({ WalletAddress })

      fetch(`https://script.google.com/macros/s/AKfycbxj_mT3gbiFzUL7X-OACoCYbFgxg20RzICb97LmSYUwbRLbCU1YnEIe808q_HWRkUYP/exec?WalletAddress=${WalletAddress}&CommunityCode=${coummintyCode}`, requestOptions)
        .then(response => {
          setLoading({ text: "Joined", disabled: false })
          return response.text()
        })
        .then(response => console.log(response))
        .catch(err => {
          setLoading({ text: "Error Occured", disabled: false })
          console.error(err)
        });


    } else {
      alert("Connect Wallet your Wallet")
    }
  }

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


  return (
    <>
      <div style={{ background: "linear-gradient(rgb(29 35 61), rgb(29 35 61 / 49%)), url(https://images.unsplash.com/photo-1534262521332-cfd802370cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80)", backgroundPosition: "center center", backgroundSize: "contain", margin: "-8px", height: "100vh" }}>
        <Nav />
        <div className="main">
          <div className="container border" style={{ boxShadow: "4px 8px 5px #00000052" }}>
            <div>
              <div className="tab-flex">
                <div className="swap-text">Swap</div>
                <Image src={menu} alt="menu-icon" className="menu-icon" />
              </div>
              <div className="first-token">
                <div>
                  <input onChange={(e) => setToken1Amount(e.target.value)} className="input" />
                  <div className="token_equivalent">$220.07</div>
                </div>

                <Select
                  id='select-id'
                  styles={customStyles}
                  value={selectedOption}
                  options={tokenList}
                  onChange={handleChange}

                  getOptionLabel={(e) => (
                    <div style={{ display: "flex", alignItems: "center" }} id="selectdiv-id">
                      <Image src={e.img} width={20} height={20} />
                      <span style={{ marginLeft: 5 }}>{e.symbol}</span>
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
                  <input className="input" value={amountOut} />
                  <div className="token_equivalent">$238.07</div>
                </div>
                <Select
                  id="select-id"
                  styles={customStyles}
                  value={selectedOption2}
                  options={tokenList}
                  onChange={handledChange}
                  getOptionLabel={(e) => (
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      id="selectdiv-id"
                    >
                      <Image src={e.img} width={20} height={20} />
                      <span style={{ marginLeft: 5 }}>{e.symbol}</span>
                    </div>
                  )}
                />
              </div>
              <div className="swap-btn-flex">
                <button onClick={() => fetchTokensForOptimism()} className="swap-connect-btn">Swap</button>
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
      <Box sx={{ pb: 7 }} >
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation sx={{ position: 'fixed', bottom: 0, width: 1.0 }} showLabels className="bot-navigate" style={{ background: "#1A1A27" }} id='bot-id'>

            <BottomNavigationAction
              onClick={() => navigateToAnotherPage('/dex')}
              label="Swap"
              icon={<Image src={swapIcon} alt="Swap" />}
              className="nav-action"
              style={{ color: "#264794" }}
            />


            <BottomNavigationAction
              onClick={() => navigateToAnotherPage('/stream')}
              label="Stream"
              icon={<Image src={streamIcon} alt="Stream" />}
              className="nav-action"
              style={{ color: "#4C4F64" }}
            />


            <BottomNavigationAction
              onClick={handleClickOpen}
              label="Rewards"
              icon={<Image src={rewardsIcon} alt="more" />}
              className="nav-action"
              style={{ color: "#4C4F64" }}
            />


            <BottomNavigationAction
              onClick={handleClickOpenWhiteListform}
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
          open={openForm}
          onClose={handleCloseWhitelistForm}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>
            White List Form
          </DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <TextField onChange={(e) => setCommuintyCode(e.target.value)} id="outlined-basic" label="Community Code" variant="outlined" sx={{ marginBottom: 2 }} />
            <Button onClick={() => joinWhitelist()} disabled={loading.disabled} variant="contained">{loading.text}</Button>
          </DialogContent>
          <DialogActions>

            <Button onClick={handleCloseWhitelistForm} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <>
        <Snackbar open={openError} autoHideDuration={6000} onClose={() => setOpenError(!openError)}>
          <Alert onClose={() => setOpenError(!openError)} severity="error" sx={{ width: '100%' }}>
            {errorMsg}
          </Alert>
        </Snackbar>
      </>
    </>
  );
}
