import "./SearchBar.scss";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ setSearch }) {
    const navigate = useNavigate()

    function handleSearch (e) {
        e.preventDefault()
        setSearch(e.target.search.value)
        e.target.search.value = ""
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                />
            </form>

            This is the search bar
            
        </div>
    )
}