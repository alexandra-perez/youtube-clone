import "./Home.scss";
import VideoList from "../VideoList/VideoList";

export default function Home ({videoList}) {

    return (

        <div>
            <VideoList videoList={videoList}/>
        </div>
    )

}