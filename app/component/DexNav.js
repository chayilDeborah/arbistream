import Image from "next/image"
import navicon from '../asset/navicon.png'
import uparrow from "../asset/uparrow.svg";
import logowhite from '../asset/logowhite.svg'
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Nav = () => {
  return (
    <>
      <div className="nav-contain">
        <div className="nav-wrap">
          <Image src={logowhite} alt="Arbistream-logo" className="logo" />
          <div className="navbar-links">
            <div className="nav-home">Home</div>
            <div className="product-flex">
              <div className="nav-home" id="product">
                Product
              </div>
              <Image src={uparrow} alt="icon" className="uparrow" />
            </div>
            <div className="product-flex">
              <div className="nav-home" id="product">
                Docs
              </div>
              <Image src={uparrow} alt="icon" className="uparrow" />
            </div>
            <div className="nav-home">Community</div>
          </div>
          <div className="connect-btn"><ConnectButton /></div>
        </div>
      </div>
    </>
  )
}

export default Nav