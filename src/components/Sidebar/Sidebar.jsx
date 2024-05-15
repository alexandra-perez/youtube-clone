import { useEffect, useState } from 'react';
import './Sidebar.scss';
import{Link, useParams} from 'react-router-dom'

// export default function Sidebar() {
//     return (<div className='sidebar-container'>
//     hello world

//     </div>)
// }
export default function Sidebar() {
  function random(){
    return Math.floor(Math.random()*30)
  }
  let number=random()


  const { videoId } = useParams();
    const[sideBarVideos,setSideBarVideos]=useState([])
    const categoryUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=2&chart=mostPopular&videoCategoryId=${number}&key=${
      import.meta.env.VITE_API_KEY
    }`;
    useEffect(() => {
        fetch(categoryUrl)
          .then((res) => res.json())
          .then((res) => {
            // console.log(res.items)
            const newObj = structuredClone(res.items);
            console.log(newObj)
            setSideBarVideos([...newObj]);
          });
      }, [videoId]);

    return (
      <div className='sidebar-container'>
          {sideBarVideos.map((video, i) => (

            <Link to={`/videos/${video.id}`}onClick={() => {window.location.href=`/videos/${video.id}`}}>
              <div className='singleimage-container'>
                <img src={video.snippet.thumbnails.high.url} alt="" />
                <h2>{video.snippet.title}</h2>
              </div>
            </Link>
          ))}
      </div>
    );
  }
