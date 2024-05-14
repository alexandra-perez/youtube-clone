import './VideoList.scss';
import { Link } from 'react-router-dom';

export default function VideoList({ videoList }) {
  return (
    <div className='listimage-container'>
      <p>This is the category bar</p>
        {videoList.map((video, i) => (

          <Link to={`/videos/${video.id.videoId ? video.id.videoId : video.id}`}>
            <div className='singleimage-container'>
              <img src={video.snippet.thumbnails.high.url} alt="" />
              <h2>{video.snippet.title}</h2>
            </div>
          </Link>
        ))}
    </div>
  );
}
