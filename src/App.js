import { useEffect, useRef, useState } from "react";
import "./App.scss";
import "./styles/main.scss";
import Service from "./component/service/service";
import About from "./component/about/about";
import Footer from "./component/footer/footer";
import { MenuIcon } from "./icon/menu";
import { CloseIcon } from "./icon/close";
import { MenuHoverIcon } from "./icon/menu-hover";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const headerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add("sticky");
        } else {
          headerRef.current.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      document.body.classList.toggle("no-scroll", !prev);
      return !prev;
    });
  };

  return (
    <body
      className={`page__body page__body--with-men ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      <header className={`header page__section ${isMenuOpen ? "hidden" : ""}`}>
        <div className="container">
          <div className="header__content">
            <div ref={headerRef} className="top-actions">
              <a href="#" className="logo" rel="noreferrer">
                <img
                  className="logo__image"
                  src="images/logo-black.svg"
                  alt="Bose"
                />
              </a>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={toggleMenu}
              >
                {isHovered ? (
                  <MenuHoverIcon fill="white" className="icon" />
                ) : (
                  <MenuIcon fill="white" className="icon" />
                )}
              </div>
            </div>
            <div className="header__title">
              <h1 className="header__title-text">
                Your reliable partner in stone care
              </h1>
              <h4 className="header__title-subtitle">
                Fast master arrival. Free consultation.
              </h4>
            </div>
          </div>
        </div>
      </header>

      <nav
        className={`page__menu menu section ${
          isMenuOpen ? "page__menu-open" : "page__menu-close"
        }`}
        id="menu"
      >
        <div className="container">
          <div className="menu__content">
            <div className="menu__top top-actions top-actions--in-burgermenu">
              <a href="#" className={`logo ${isMenuOpen ? "logo__with-bg" : ""}`} aria-label="logo">
                <img
                  className="logo__image"
                  src="images/logo-black.svg"
                  alt="Bose"
                />
              </a>
              <CloseIcon fill="white" onClick={toggleMenu} className="icon" />
            </div>
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" onClick={toggleMenu} className="menu__link">
                  Home
                </a>
              </li>

              <li className="menu__item">
                <a href="#services" onClick={toggleMenu} className="menu__link">
                  Our Services
                </a>
              </li>

              <li className="menu__item">
                <a href="#about-us" onClick={toggleMenu} className="menu__link">
                  About Us
                </a>
              </li>
            </ul>

            <a
              href="tel:+1 267 6162 999"
              className="menu__call menu__call--phone"
            >
              +1 267 6162 999"
            </a>
            <a
              href="tel:+1 267 6162 999"
              className="menu__call menu__call--action"
            >
              call to order
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Service />
        <About />
      </main>

      <Footer />
    </body>
  );
}

export default App;
