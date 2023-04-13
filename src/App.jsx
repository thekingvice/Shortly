import "./App.css";
import Nav from "./Nav/Nav";
import Landing from "./Landing/Landing";
import Stats from "./Stats/Stats";
import GetStarted from "./GetStarted/GetStarted";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Landing></Landing>
      <Stats></Stats>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </div>
  );
}

export default App;

// const [url, setUrl] = useState("");
// const [shortUrl, setShortUrl] = useState("");

// const handleSubmit = (event) => {
//   event.preventDefault();
//   fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.ok) {
//         setShortUrl(data.result.short_link);
//       } else {
//         console.log(data.error_code);
//       }
//     })
//     .catch((error) => console.log(error));
// };

// const handleCopy = () => {
//   navigator.clipboard.writeText(shortUrl);
// };

// <form onSubmit={handleSubmit}>
//   <label>
//     Enter URL:
//     <input
//       type="text"
//       value={url}
//       onChange={(event) => setUrl(event.target.value)}
//     />
//   </label>
//   <button type="submit">Shorten</button>
// </form>;
// {
//   shortUrl && (
//     <p>
//       Shortened URL: {shortUrl}
//       <button onClick={handleCopy}>Copy</button>
//     </p>
//   );
// }
