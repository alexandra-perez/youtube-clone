import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import VideoList from './components/VideoList/VideoList'
import About from './components/About/About'
import ShowVideo from './components/ShowVideo/ShowVideo'
import './App.css'

function App() {

  const [video, setVideo] = useState(``);
  const [id, setId] = useState("");
  const [videoList, setVideoList] = useState([]);

  // const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${import.meta.env.VITE_API_KEY}`
  const mostPopularUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${import.meta.env.VITE_API_KEY}`


  // useEffect(() =>{
  //   fetch(url)
  //   .then((res) => res.json())
  //   .then(console.log)

  // },[])

  // searching for specific id
  // useEffect(() =>{
  //   fetch(mostPopularUrl)
  //   .then((res) => res.json())
  //   .then((res) => setId(res.items[0].id))
  //   // .then(setVideo(mostPopularUrl))
  // },[id])

  useEffect(() =>{
    fetch(mostPopularUrl)
    .then((res) => res.json())
    .then((res) => setVideoList([...res.items]))
    // .then(setVideo(mostPopularUrl))
  },[id])

console.log(videoList)
  return (
    <>
     {/* <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe> */}
    
      <Router>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<VideoList videoList={videoList}/>} />
          <Route path="/videos/:id" element={<ShowVideo />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
