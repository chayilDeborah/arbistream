import Image from "next/image"
import navlogo from '../asset/navlogo.svg'

const Nav = () => {
  return (
    <>
    <div className="nav-wrap">
        <Image src={navlogo} alt="Arbistream-logo" className="logo"/>
        <button className="connect-btn">Connect Wallet</button>
    </div>
    </>
  )
}

export default Nav