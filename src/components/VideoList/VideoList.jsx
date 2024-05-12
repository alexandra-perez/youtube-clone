import './VideoList.scss';
import { Link } from 'react-router-dom';

export default function VideoList({ videoList }) {

  return (
    <div>
      <ul>
        {videoList.map((video, i) => (
          <Link key={i} to={`/videos/${video.id}`}>
            <div >
              <img src={video.snippet.thumbnails.default.url} alt="" />
          </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
