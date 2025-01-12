import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__widget">
          <div className="grid grid--tablet">
            <div className="grid__item grid__item--t--1-2 grid__item--d--1-4">
              <div className="footer__widget-container">
                <HomeOutlinedIcon className="footer__widget-icon" />
                <h4 className="footer__widget-title">Address</h4>
                <h4 className="footer__widget-subtitle">
                  We cover: PA, NJ, DE
                </h4>
              </div>
            </div>
            <div className="grid__item grid__item--t--3-4 grid__item--d--5-8">
              <div className="footer__widget-container">
                <PhoneAndroidOutlinedIcon className="footer__widget-icon" />
                <h4 className="footer__widget-title">Phone</h4>
                <h4 className="footer__widget-subtitle">
                  Phone: +1 267 6162 999
                </h4>
              </div>
            </div>
            <div className="grid__item grid__item--t--5-6 grid__item--d--9-12">
              <div className="footer__widget-container">
                <EmailOutlinedIcon className="footer__widget-icon" />
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
