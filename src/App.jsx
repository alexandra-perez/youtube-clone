import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import VideoList from './components/VideoList/VideoList';
import About from './components/About/About';
import ShowVideo from './components/ShowVideo/ShowVideo';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [id, setId] = useState('');
  const [videoList, setVideoList] = useState([]);
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState(0)

  const singleVideoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${
    import.meta.env.VITE_API_KEY
  }`;

  const mostPopularUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=4&chart=mostPopular&key=${
    import.meta.env.VITE_API_KEY
  }`;

  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${search}&key=${
    import.meta.env.VITE_API_KEY
  }`;

  const categoryUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=1&chart=mostPopular&videoCategoryId=${category}&key=${
    import.meta.env.VITE_API_KEY
  }`

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
            path="/videos/:videoId"
            element={<ShowVideo />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
