import Nav from "./component/Nav";
import Image from "next/image";
import menu from "./asset/menu.svg";
import ETH from "./asset/ETH.svg";
import arrow from "./asset/arrow.svg";
import convert from "./asset/convert.svg";
import AST from "./asset/AST.svg";
import equiv from './asset/equiv.svg'
import notice from './asset/notice.svg'

export default function Home() {
  return (
    <>
      <Nav />
      <div className="main">
        <div className="container">
          <div>
            <div className="tab-flex">
              <div className="swap-text">Swap</div>
              <Image src={menu} alt="menu-icon" className="menu-icon" />
            </div>
            <div className="first-token">
              <div>
                <div className="token">0.153</div>
                <div className="token_equivalent">$220.07</div>
              </div>
              <button className="first-token-btn">
                <Image src={ETH} alt="ETH" className="ETH" />
                <div className="eth-text">ETH</div>
                <Image src={arrow} alt="arrow" className="arrow" />
              </button>
            </div>
            <div className="break-flex">
              <div className="first-line"></div>
              <Image src={convert} alt="convert" className="convert" />
              <div className="sec-line"></div>
            </div>
            <div className="first-token">
              <div>
                <div className="token">22,000</div>
                <div className="token_equivalent">$238.07</div>
              </div>
              <button className="first-token-btn">
                <Image src={AST} alt="ETH" className="ETH" />
                <div className="eth-text">AST</div>
                <Image src={arrow} alt="arrow" className="arrow" />
              </button>
            </div>
            <button className="swap-connect-btn">Connect Wallet</button>
            <div className="estimate-group">
              <div className="estim">
                <div className="estimate-flex">
                  <div className="estim-text">Estimated Cost</div>
                  <div className="estim-no">
                    <Image src={equiv} alt="icon" className='equiv' />
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

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
