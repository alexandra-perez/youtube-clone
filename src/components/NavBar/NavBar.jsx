import "./NavBar.scss";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar({ setSearch }) {
    return (
        <div>
            <SearchBar setSearch={setSearch}/>
            <p>This is the Nav bar</p>
        </div>
    )
}