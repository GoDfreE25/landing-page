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
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi
            accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio.
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
                Cobuild impresses you with fully responsiveness and highly
                customization.
              </div>
            </div>
          </div>
          <div className="services__item grid__item grid__item--t--4-6 grid__item--d--7-12">
            <div className="service">
              <div className="service__card-container">
                <HardwareIcon className="service__card-icon" />
              </div>
              <h3 className="service__name">Opening Additional Holes</h3>
              <div className="service__description">
                Cobuild impresses you with fully responsiveness and highly
                customization.
              </div>
            </div>
          </div>
          <div className="services__item grid__item grid__item--t--1-6 grid__item--d--1-4">
            <div className="service">
              <div className="service__card-container">
                <ConstructionIcon className="service__card-icon" />
              </div>
              <h3 className="service__name">Sealer Coating</h3>
              <div className="service__description">
                Cobuild impresses you with fully responsiveness and highly
                customization.
              </div>
            </div>
          </div>
          <div className="services__item grid__item grid__item--t--1-3 grid__item--d--5-8">
            <div className="service">
              <div className="service__card-container">
                <HandymanIcon className="service__card-icon" />
              </div>
              <h3 className="service__name">Repair Of Cracks</h3>
              <div className="service__description">
                Cobuild impresses you with fully responsiveness and highly
                customization.
              </div>
            </div>
          </div>
          <div className="services__item grid__item grid__item--t--4-6 grid__item--d--9-12">
            <div className="service">
              <div className="service__card-container">
                <PlumbingIcon className="service__card-icon" />
              </div>
              <h3 className="service__name">Repair Of Joints</h3>
              <div className="service__description">
                Cobuild impresses you with fully responsiveness and highly
                customization.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Service;
