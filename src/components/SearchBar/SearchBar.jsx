import "./SearchBar.scss";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ setSearch }) {
    let navigate=useNavigate()

    function handleSearch (e) {
        e.preventDefault()
        setSearch(e.target.search.value)
        // e.target.search.value=``
        // navigate(`/`)

    }

    return (
        <div className="searchbar-container">
            <form onSubmit={handleSearch}>
                <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                />
            </form>

  
            
        </div>
    )
}