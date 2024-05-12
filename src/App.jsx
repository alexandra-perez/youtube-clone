import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import VideoList from "./components/VideoList/VideoList";
import About from "./components/About/About";
import ShowVideo from "./components/ShowVideo/ShowVideo";
import "./App.css";

function App() {
  const [video, setVideo] = useState(``);
  const [id, setId] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [search, setSearch] = useState("")

  const singleVideoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${
    import.meta.env.VITE_API_KEY
  }`;

  const mostPopularUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=1&chart=mostPopular&key=${
    import.meta.env.VITE_API_KEY
  }`;

  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&key=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    fetch(searchUrl)
      .then((res) => res.json())
      .then((res) => {
        const newObj = structuredClone(res.items);
        setVideoList([...newObj]);
      });
  }, [search]);

  return (
    <>
      <Router>
        <NavBar setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<Home videoList={videoList} />} />
          <Route
            path="/videos/:id"
            element={<ShowVideo singleVideoUrl={singleVideoUrl} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
