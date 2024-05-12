import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import VideoList from './components/VideoList/VideoList';
import About from './components/About/About';
import ShowVideo from './components/ShowVideo/ShowVideo';
import './App.css';

function App() {
  const [id, setId] = useState('');
  const [videoList, setVideoList] = useState([]);

 
  const singleVideoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${import.meta.env.VITE_API_KEY}`

  const mostPopularUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=1&chart=mostPopular&key=${import.meta.env.VITE_API_KEY}`

  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=pokemon&key=${
    import.meta.env.VITE_API_KEY
  }`;

  //https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&id=1&key=${import.meta.env.VITE_API_KEY}

  // useEffect(() =>{
  //   fetch(singleVideoUrl)
  //   .then((res) => res.json())
  //   .then(console.log)

  // },[])

  // searching for specific id
  // useEffect(() =>{
  //   fetch(mostPopularUrl)
  //   .then((res) => res.json())
  //   .then((res) => setId(res.items[0].id))
  // },[id])

  useEffect(() => {
    fetch(mostPopularUrl)
      .then((res) => res.json())
      .then((res) => {
        const newObj = structuredClone(res.items);
        setVideoList([...newObj]);
      });
  }, [id]);

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home videoList={videoList} />} />
          <Route
            path="/videos/:videoId"
            element={<ShowVideo />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
