import Image from "next/image"
import navicon from '../asset/navicon.png'
import uparrow from "../asset/uparrow.svg";
import logowhite from '../asset/white_icon.svg'
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Nav = () => {


  return (
    <>
      <div className="nav-contain">
        <div className="nav-wrap">
          <Image src={logowhite} alt="Arbistream-logo" className="logo" />
          <div className="connect-btn"><ConnectButton /></div>
        </div>
      </div>
    </>
  )
}

export default Nav