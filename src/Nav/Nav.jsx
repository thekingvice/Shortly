import "./Nav.css";

export default function Nav() {
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
    </nav>
  );
}
