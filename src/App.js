import { useEffect, useRef, useState } from "react";
import "./App.scss";
import "./styles/main.scss";
import Service from "./component/service/service";
import About from "./component/about/about";
import Footer from "./component/footer/footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

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
                <img className="logo__image" src="images/logo.png" alt="Bose" />
              </a>
              <a
                onClick={toggleMenu}
                href="#menu"
                className="icon icon--menu"
              ></a>
            </div>
            <div className="header__title">
              <h1 className="header__title-text">We’re Building Your Future</h1>
              <h4 className="header__title-subtitle">
                Take a step towards the future of construction with Cobuild
              </h4>
            </div>
          </div>
        </div>
      </header>

      <nav className="page__menu menu section" id="menu">
        <div className="container">
          <div className="menu__content">
            <div className="menu__top top-actions top-actions--in-burgermenu">
              <a href="#" className="logo" aria-label="logo">
                <img className="logo__image" src="images/logo.png" alt="Bose" />
              </a>
              <a
                href="#close"
                onClick={toggleMenu}
                className="icon icon--close"
              ></a>
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
              href="tel:+1 234 5555-55-55"
              className="menu__call menu__call--phone"
            >
              +1 234 5555-55-55"
            </a>
            <a
              href="tel:+1 234 5555-55-55"
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
