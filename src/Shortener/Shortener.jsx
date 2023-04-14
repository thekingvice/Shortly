import { useState, useEffect } from "react";
import "./Shortener.css";

export default function Shortener() {
  const [url, setUrl] = useState("");

  const [shortUrl, setShortUrl] = useState("");

  const [originalUrl, setOriginalUrl] = useState("");

  const [errorBorder, setErrorBorder] = useState("none");

  const [errorText, setErrorText] = useState("none");

  const [output, setOutput] = useState("none");

  const [buttonColor, setButtonColor] = useState("var(--tiffany)");

  const [text, setText] = useState("Copy");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (url.includes(".") && url.length >= 3) {
      setErrorText("none");
      setErrorBorder("none");
      setOriginalUrl(url);
      fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            setShortUrl(data.result.short_link);
          } else {
            console.log(data.error_code);
          }
        })
        .catch((error) => console.log(error));
      setUrl("");
      setOutput("flex");
    } else {
      setErrorText("block");
      setErrorBorder("2px solid var(--faded-red)");
    }
  };

  const handleCopy = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(shortUrl);
    setButtonColor("var(--dark-purple)");
    setText("Copied!");
    setTimeout(() => {
      setButtonColor("var(--tiffany)");
      setText("Copy");
    }, 2000);
  };

  useEffect(() => {
    if (url.length === 0) {
      setErrorText("none");
      setErrorBorder("none");
    }
  }, [url]);

  return (
    <form className="Shortener" onSubmit={handleSubmit}>
      <div className="Shortener__input-wrapper">
        <input
          placeholder="Shorten a link here.."
          className="Shortener__input"
          type="text"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          style={{ border: errorBorder }}
        />
        <button className="Shortener__submit" type="submit">
          Shorten It!
        </button>
        <aside className="test" style={{ display: errorText }}>
          Please add a link
        </aside>
      </div>

      <div className="Shortener__output" style={{ display: output }}>
        <p className="Shortener__output-original">{originalUrl}</p>
        <div className="Shortener__output-right">
          <p className="Shortener__output-short"> {shortUrl}</p>
          <button
            className="Shortener__copy-button"
            onClick={handleCopy}
            style={{ background: buttonColor }}
          >
            {text}
          </button>
        </div>
      </div>
    </form>
  );
}
