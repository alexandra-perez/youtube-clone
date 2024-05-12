import "./Home.scss";
import VideoList from "../VideoList/VideoList";
import NavBar from "../NavBar/NavBar";
export default function Home ({videoList}) {
    return (

        <div className="homepage-container">

            <VideoList videoList={videoList}/>
        </div>
    )

}