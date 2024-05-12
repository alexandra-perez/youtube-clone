import "./SearchBar.scss";

export default function SearchBar({ setSearch }) {

    function handleSearch (e) {
        e.preventDefault()
        setSearch(e.target.search.value)
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