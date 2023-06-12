import Image from "next/image";
import logowhite from "../asset/logowhite.svg";
import uparrow from "../asset/uparrow.svg";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="nav-contain">
        <div className="nav-group">
          <Image src={logowhite} alt="Astrava" className="logowhite" />
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
          <Link href="/dex">
            <button className="launch-btn">Launch App</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;