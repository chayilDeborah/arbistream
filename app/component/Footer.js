import Image from "next/image";
import logowhite from "../asset/logowhite.svg";
import copy from '../asset/copy.svg';
import twitter from '../asset/twitter.svg'
import linkedin from '../asset/linkedin.svg'
import instagram from '../asset/instagram.svg'
import medium from '../asset/medium.svg'
import telegram from '../asset/telegram.svg'
import github from '../asset/github.svg'


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <div className="footer-body">
            <Image src={logowhite} alt="svg" className="whitelogo" />
            <div className="procom-flex">
              <div className="social-icons">
                <div>
                  <Image src={twitter} alt="twitter" className="soc-icons" />
                  <Image src={linkedin} alt="twitter" className="soc-icons" />
                  <Image src={instagram} alt="twitter" className="soc-icons" />
                </div>
                <div>
                  <Image src={medium} alt="twitter" className="soc-icons" />
                  <Image src={telegram} alt="twitter" className="soc-icons" />
                  <Image src={github} alt="twitter" className="soc-icons" />
                </div>
              </div>

            </div>

          </div>
          <div className="last-footer">
            <div className="copyright-flex">
              <Image src={copy} alt="svg" className="copy" />
              <div className="copyright-text">2023. Astrava. All Rights Reserved.</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
