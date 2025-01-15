import HandymanIcon from "@mui/icons-material/Handyman";
import CountertopsIcon from "@mui/icons-material/Countertops";
import HardwareIcon from "@mui/icons-material/Hardware";
import ConstructionIcon from "@mui/icons-material/Construction";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import "./service.scss";
import "./services.scss";

function Service() {
  return (
    <section className="page__section services section" id="services">
      <div className="container">
        <div className="page__section-container">
          <h2 className="page__section-title">Our Services</h2>
          <h4 className="page__section-subtitle page__section-subtitle--space">
            Counter-top repair and customization services to save money and improve space utilization.
          </h4>
        </div>
        <div className="grid grid--tablet">
          <div className="services__item grid__item grid__item--t--1-3 grid__item--d--2-6">
            <div className="service">
              <div className="service__card-container">
                <CountertopsIcon className="service__card-icon" />
              </div>
              <h3 className="service__name">Sink Replacement</h3>
              <div className="service__description">
                We offer professional services to replace or fix your sink to prevent leaks or renew your countertop
              </div>
            </div>
          </div>
          <div className="services__item grid__item grid__item--t--4-6 grid__item--d--7-12">
            <div className="service">
              <div className="service__card-container">
                <HardwareIcon className="service__card-icon" />
              </div>
              <h3 className="service__name">Drilling Holes</h3>
              <div className="service__description">
                Additional holes can be drilled in countertop for various installations, faucets, soap dispensers or garbage disposal button.
              </div>
            </div>
          </div>
          <div className="services__item grid__item grid__item--t--1-6 grid__item--d--1-4">
            <div className="service">
              <div className="service__card-container">
                <ConstructionIcon className="service__card-icon" />
              </div>
              <h3 className="service__name">Cleaning and Sealing</h3>
              <div className="service__description">
                Removing dirt, debris, and old finishes and applying a sealant to protect from damage, stains, and wear and tear.
              </div>
            </div>
          </div>
          <div className="services__item grid__item grid__item--t--1-3 grid__item--d--5-8">
            <div className="service">
              <div className="service__card-container">
                <HandymanIcon className="service__card-icon" />
              </div>
              <h3 className="service__name">Seam, cracks and chip repair</h3>
              <div className="service__description">
                Whether it's a small chip, large crack or if you need a new seam we can restore your countertop to its original beauty.
              </div>
            </div>
          </div>
          <div className="services__item grid__item grid__item--t--4-6 grid__item--d--9-12">
            <div className="service">
              <div className="service__card-container">
                <PlumbingIcon className="service__card-icon" />
              </div>
              <h3 className="service__name">Cabinets installation and repair</h3>
              <div className="service__description">
                Our services include installation, repair, and renovation of kitchen cabinets, wardrobes, and other types of furniture.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Service;
