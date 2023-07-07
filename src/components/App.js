import video from "../data/video.js";
import Details from "../components/Details";
import Comments from "../components/Comments";

function App() {
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details video={video} />
    </div>
  );
}

export default App;
