import './ShowVideo.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ShowVideo() {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});
  const singleVideoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    console.log(singleVideoUrl)
    fetch(singleVideoUrl)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setVideo(res);
      });
  }, []);

  return (
    <div className="showVideo">
      <div className="showVideo__window"></div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={video.items ? video.items[0].snippet.title : 'YouTube video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {video.items && <h2>{video.items[0].snippet.title}</h2>}
      <div className="showVideo__description">
        {video.items && <h3>{video.items[0].snippet.description}</h3>}
      </div>
    </div>
  );
}
    //  <iframe
    //    width="560"
    //    height="315"
    //    src={`https://www.youtube.com/embed/${video.id.videoID}`}
    //    title="YouTube video player"
    //    frameBorder="0"
    //    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //    allowFullScreen
    //  ></iframe>;
