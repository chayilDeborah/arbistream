import Image from "next/image"
import navicon from '../asset/navicon.png'

const Nav = () => {
  return (
    <>
    <div className="nav-wrap">
        <Image src={navicon} alt="Arbistream-logo" className="logo"/>
        <button className="connect-btn">Connect Wallet</button>
    </div>
    </>
  )
}

export default Nav