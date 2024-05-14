import "./Home.scss";
import VideoList from "../VideoList/VideoList";
import NavBar from "../NavBar/NavBar";
export default function Home ({ videoList, setCategory }) {

    return (

        <div className="homepage-container">
            <VideoList setCategory={setCategory} videoList={videoList}/>
        </div>
    )

}