import Shortener from "../Shortener/Shortener";
import "./Stats.css";

export default function Stats() {
  return (
    <section className="Stats">
      <Shortener></Shortener>
      <div className="Stats__text">
        <h1 className="Stats__text-heading">Advanced Statistics</h1>
        <p className="Stats__text-paragraph">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="Stats__card-section">
        <div className="Stats__card-wrapper">
          <div className="Stats__icon-wrapper">
            <img
              className="Stats__icon"
              src="/icon-brand-recognition.svg"
              alt="icon"
            />
          </div>
          <h1 className="Stats__card-heading">Brand Recognition</h1>
          <p className="Stats__card-paragraph">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="Stats__card-wrapper">
          <div className="Stats__icon-wrapper">
            <img
              className="Stats__icon"
              src="/icon-detailed-records.svg"
              alt="icon"
            />
          </div>
          <h1 className="Stats__card-heading"> Detailed Records</h1>
          <p className="Stats__card-paragraph">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="Stats__card-wrapper">
          <div className="Stats__icon-wrapper">
            <img
              className="Stats__icon"
              src="/icon-fully-customizable.svg"
              alt="icon"
            />
          </div>
          <h1 className="Stats__card-heading"> Fully Customizable</h1>
          <p className="Stats__card-paragraph">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
