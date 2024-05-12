import './VideoList.scss';
import { Link } from 'react-router-dom';

export default function VideoList({ videoList }) {

  return (
    <div className='listimage-container'>
        {videoList.map((video, i) => (
          <Link to={`/videos/${video.id}`}>
            <div className='singleimage-container'>
              <img src={video.snippet.thumbnails.default.url} alt="" />
              <br />
              <p>{video.snippet.title}</p>
          </div>
          </Link>
        ))}
    </div>
  );
}
