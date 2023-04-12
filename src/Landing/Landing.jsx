import "./Landing.css";

export default function Landing() {
  return (
    <section className="Landing">
      <section className="Landing__left">
        <h1 className="Landing__heading"> More than just shorter links</h1>
        <p className="Landing__paragraph">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="Landing__button"> Get Started</button>
      </section>
      <section className="Landing__right">
        <img
          className="Landing__hero"
          src="/illustration-working.svg"
          alt="hero-image"
        />
      </section>
    </section>
  );
}
