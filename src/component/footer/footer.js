import { HomeIcon } from "../../icon/home";
import { PhoneIcon } from "../../icon/phone";
import { MailIcon } from "../../icon/mail";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__widget">
          <div className="grid grid--tablet">
            <div className="grid__item grid__item--t--1-2 grid__item--d--1-4">
              <div className="footer__widget-container">
                <HomeIcon className="footer__widget-icon" />
                <h4 className="footer__widget-title">Address</h4>
                <h4 className="footer__widget-subtitle">
                  We cover: PA, NJ, DE
                </h4>
              </div>
            </div>
            <div className="grid__item grid__item--t--3-4 grid__item--d--5-8">
              <div className="footer__widget-container">
                <PhoneIcon className="footer__widget-icon" />
                <h4 className="footer__widget-title">Phone</h4>
                <h4 className="footer__widget-subtitle">+1 267 6162 999</h4>
              </div>
            </div>
            <div className="grid__item grid__item--t--5-6 grid__item--d--9-12">
              <div className="footer__widget-container">
                <MailIcon className="footer__widget-icon" />
                <h4 className="footer__widget-title">Email</h4>
                <h4 className="footer__widget-subtitle">
                  rkstonerepair@gmail.com
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
