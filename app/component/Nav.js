import Image from "next/image"
import logowhite from '../asset/logowhite.svg'
import uparrow from '../asset/uparrow.svg';
import hamburger from '../asset/hamburger.svg'

const Nav = () => {
  return (
   <>
   <div className="nav-group">
    <Image src={logowhite} alt="Astrava" className="logowhite" />
    <Image src={hamburger} alt="menu" className="hamburger" />
    <div className="navbar-links">
      <div className="nav-home">Home</div>
      <div className="product-flex">
        <div className="nav-home" id="product">Product</div>
        <Image src={uparrow} alt="icon" className="uparrow" />
      </div>
      <div className="product-flex">
        <div className="nav-home" id="product">Docs</div>
        <Image src={uparrow} alt="icon" className="uparrow" />
      </div>
      <div className="nav-home">Community</div>
    </div>
    <button className="launch-btn">Launch App</button>
   </div>
   </>
  )
}

export default Nav