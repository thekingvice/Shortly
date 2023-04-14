import { useState, useEffect } from "react";
import "./Shortener.css";

export default function Shortener() {
  const [url, setUrl] = useState("");

  const [shortUrl, setShortUrl] = useState("");

  const [originalUrl, setOriginalUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  const [error, setError] = useState("none");
  const [errorText, setErrorText] = useState("none");

  // useEffect(() => {
  //   if (url.includes(".")  url.length = 0) {
  //     setError("none");
  //     setErrorText("none");
  //   } else {
  //     setError("2px solid var(--faded-red)");
  //     setErrorText("block");
  //   }
  // }, [url]);

  return (
    <form className="Shortener" onSubmit={handleSubmit}>
      <div className="Shortener__input-wrapper">
        <input
          pattern="\d+\.\d+"
          required
          placeholder="Shorten a link here.."
          className="Shortener__input"
          type="text"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          style={{ border: error }}
        />
        <button className="Shortener__submit" type="submit">
          Shorten It!
        </button>
        <aside className="test" style={{ display: errorText }}>
          Please add a link
        </aside>
      </div>

      <div className="Shortener__output">
        <p className="Shortener__output-original">{originalUrl}</p>
        <div className="Shortener__output-right">
          <p className="Shortener__output-short"> {shortUrl}</p>
          <button className="Shortener__copy-button" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
    </form>
  );
}
