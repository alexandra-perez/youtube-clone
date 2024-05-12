import "./VideoList.scss";

export default function VideoList({ videoList }) {
  
  return (
    <div>
      <ul>
        {videoList.map((video,i) => (
          <iframe
            key={i}
            // width="640"
            // height="360"
            src={`https://www.youtube.com/embed/${video.id}`}// use "video.id.videoId" when searching
                                                            // use "video.id." when not searching
          ></iframe>
        ))}
      </ul>
    </div>
  );
}
