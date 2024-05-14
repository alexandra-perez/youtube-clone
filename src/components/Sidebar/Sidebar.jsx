import { useEffect, useState } from 'react';
import './Sidebar.scss';
import{Link} from 'react-router-dom'

// export default function Sidebar() {
//     return (<div className='sidebar-container'>
//     hello world
    
//     </div>)
// }
export default function Sidebar() {
    const[sideBarVideos,setSideBarVideos]=useState([])
    const mostPopularUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=4&chart=mostPopular&key=${
    import.meta.env.VITE_API_KEY
  }`;
    useEffect(() => {
        fetch(mostPopularUrl)
          .then((res) => res.json())
          .then((res) => {
            // console.log(res.items)
            const newObj = structuredClone(res.items);
            console.log(newObj)
            setSideBarVideos([...newObj]);
          });
      }, []);

    return (
      <div className='sidebar-container'>
          {sideBarVideos.map((video, i) => (
          
            <Link to={`/videos/${video.id}`}>
              <div className='singleimage-container'>
                <img src={video.snippet.thumbnails.default.url} alt="" />
                <h2>{video.snippet.title}</h2>
              </div>
            </Link>
          ))}
      </div>
    );
  }
