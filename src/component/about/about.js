import { Button } from "@mui/material";
import "./about.scss";

function About() {
  return (
    <section className="page__section about section" id="about-us">
      <div className="container">
        <div className="grid grid--tablet">
          <div className="grid__item grid__item--t--1-6 grid__item--d--1-12">
            <div className="about__container">
              <h2 className="about__title">
                CALL US TODAY TO SCHEDULE A FREE IN-HOME CONSULTATION!
              </h2>
              <Button
                  className="button"
                  size="medium"
                  variant="outlined"
                  href="tel:+1 267 6162 999"
              >
                CALL US
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
