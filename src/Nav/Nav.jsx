import { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [mobile, setMobile] = useState();

  const handleClick = () => {
    if (mobile === "flex") {
      setMobile("none");
    } else {
      setMobile("flex");
    }
  };

  return (
    <nav className="Nav">
      <div className="Nav__left-wrapper">
        <a className="Nav__logo-link" href="">
          <img className="Nav__logo" src="/logo.svg" alt="logo" />
        </a>
        <a className="Nav__link" href="">
          Features
        </a>
        <a className="Nav__link" href="">
          Pricing
        </a>
        <a className="Nav__link" href="">
          Resources
        </a>
      </div>
      <div className="Nav__right-wrapper">
        <button className="Nav__login">Login</button>
        <button className="Nav__sign-up">Sign Up</button>
      </div>
      <div className="Nav__hamburger-menu" onClick={handleClick}>
        <img
          className="Nav__hamburger-icon"
          src="/hamburger-menu.svg"
          alt="menu"
        />
      </div>
      <aside className="Nav__mobile" style={{ display: mobile }}>
        <a className="Nav__mobile-link" href="">
          Reatures
        </a>
        <a className="Nav__mobile-link" href="">
          Pricing
        </a>
        <a className="Nav__mobile-link" href="">
          Resources
        </a>
        <div className="Nav__mobile-div"></div>
        <button className="Nav__mobile-login">Login</button>
        <button className="Nav__mobile-signup">Sign Up</button>
      </aside>
    </nav>
  );
}
