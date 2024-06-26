import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import Sidebar from '../Sidebar/Sidebar';

import './ShowVideo.scss';

export default function ShowVideo() {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});
  const singleVideoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    fetch(singleVideoUrl)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setVideo(res);
      });
  }, []);


  return (
    
    <div className="showVideo">
      <div className='video'>
      <iframe
          width="900"
          height="520"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.items ? video.items[0].snippet.title : 'YouTube video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Sidebar/>
        
      <div className="title">
        {video.items && <h2>{video.items[0].snippet.title}</h2>}
      </div>
      {/* <div className="channelTitle">
        {video.items && <h3>{video.items[0].snippet.channelTitle}</h3>}
      </div> */}
      <br />
      <div className="description">
        <h2>Description</h2>
        {video.items && <h4>{video.items[0].snippet.description}</h4>}
      </div>
      <div className="comments">
        <CommentForm videoId={videoId}/>
      </div>
    </div>
  );
}
