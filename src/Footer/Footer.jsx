import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <a className="Footer__" href="">
        <img className="Footer__logo" src="/logo.svg" alt="" />
      </a>
      <div className="Footer__column">
        <h1 className="Footer__heading">Features</h1>
        <a className="Footer__link" href="">
          Link Shortening
        </a>
        <a className="Footer__link" href="">
          Branded Links
        </a>
        <a className="Footer__link" href="">
          Analytics
        </a>
      </div>
      <div className="Footer__column">
        <h1 className="Footer__heading">Resources</h1>
        <a className="Footer__link" href="">
          Blog
        </a>
        <a className="Footer__link" href="">
          Developers
        </a>
        <a className="Footer__link" href="">
          Support
        </a>
      </div>
      <div className="Footer__column">
        <h1 className="Footer__heading">Company</h1>
        <a className="Footer__link" href="">
          About
        </a>
        <a className="Footer__link" href="">
          Our Team
        </a>
        <a className="Footer__link" href="">
          Careers
        </a>
        <a className="Footer__link" href="">
          Contact
        </a>
      </div>
      <div className="Footer__social-wrapper">
        <a className="Footer__social-link" href="">
          <img
            className="Footer__social-icon"
            src="/icon-facebook.svg"
            alt=""
          />
        </a>
        <a className="Footer__social-link" href="">
          <img className="Footer__social-icon" src="/icon-twitter.svg" alt="" />
        </a>
        <a className="Footer__social-link" href="">
          <img
            className="Footer__social-icon"
            src="/icon-pinterest.svg"
            alt=""
          />
        </a>
        <a className="Footer__social-link" href="">
          <img
            className="Footer__social-icon"
            src="/icon-instagram.svg"
            alt=""
          />
        </a>
      </div>
    </footer>
  );
}
