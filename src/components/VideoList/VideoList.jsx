import './VideoList.scss';
import { Link } from 'react-router-dom';
import Category from '../Category/Category';

export default function VideoList({ videoList, setCategory }) {
  return (
    <div>
    
      <Category setCategory={setCategory}/>
      <div className='listimage-container'>
        {videoList.map((video, i) => (

          <Link to={`/videos/${video.id.videoId ? video.id.videoId : video.id}`}>
            <div className='singleimage-container'>
              <img src={video.snippet.thumbnails.high.url} alt="" />
              <h2>{video.snippet.title}</h2>
            </div>
          </Link>
        ))}
    </div>
    </div>
  );
}
