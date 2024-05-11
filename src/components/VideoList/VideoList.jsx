import "./VideoList.scss";

export default function VideoList({ videoList }) {
  console.log(videoList);

  return (
    <div>
        <p>hello world</p>
      <ul>
        {videoList.map((video) => (
          <iframe
            key={video.id}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </ul>
    </div>
  );
}
