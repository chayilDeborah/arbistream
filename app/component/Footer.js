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
            <div className="product-grp">
              <div>
                <div className="product-footer">Product</div>
                <div className="mini-footer">Overview</div>
                <div className="mini-footer">Features</div>
                <div className="mini-footer">Solutions</div>
                <div className="mini-footer">Tutorials</div>
                <div className="mini-footer">RoadMap</div>
              </div>
              <div className="company">
                <div className="product-footer">Company</div>
                <div className="mini-footer">About Us</div>
                <div className="mini-footer">Career</div>
                <div className="mini-footer">Press</div>
                <div className="mini-footer">News</div>
                <div className="mini-footer">Contact</div>
              </div>
              <div className="company">
                <div className="product-footer">Resources</div>
                <div className="mini-footer">Blog</div>
                <div className="mini-footer">Newsletter</div>
                <div className="mini-footer">Events</div>
                <div className="mini-footer">Helpcenter</div>
                <div className="mini-footer">Support</div>
              </div>
            </div>
            <div className="product-grp">
              <div className="company-social">
                <div className="product-footer-social">Social</div>
               <div className="mini-footer"> <a href="#">Twitter</a></div>
                <div className="mini-footer"><a href="#">LinkedIn</a></div>
                <div className="mini-footer"><a href="#">Instagram</a></div>
                <div className="mini-footer"><a href="#">Medium</a></div>
                <div className="mini-footer"><a href="#">Telegram</a></div>
                <div className="mini-footer"><a href="#">Github</a></div>
              </div>
              <div className="company">
                <div className="product-footer-social">Legal</div>
                <div className="mini-footer">Terms</div>
                <div className="mini-footer">Privacy</div>
                <div className="mini-footer">Licenses</div>
                <div className="mini-footer">Settings</div>
              </div>
            </div>
          </div>
        </div>
        <div className="last-footer">
            <div className="copyright-flex">
                <Image src={copy} alt="svg" className="copy" />
                <div className="copyright-text">2023. Astrava. All Rights Reserved.</div>
            </div>
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
      </div>
    </>
  );
};

export default Footer;
