export default function Category ({setCategory}) {

    const categoryObj ={
        "Film & Animation" : 1,
        "Autos & Vehicles" : 2,
        "Music" : 10,
        "Pets & Animals" : 15,
        "Sports" : 17,
        "Short Movies" : 18,
        "Travel & Events" : 19,
        "Gaming" : 20,
        "Videoblogging" : 21,
        "People & Blogs" : 22,
        "Comedy" : 23,
        "Entertainment" : 24,
        "News & Politics" : 25,
        "Howto & Style" : 26,
        "Education" : 27,
        "Science & Technology" : 28,
        "Nonprofits & Activism" : 29,
        "Movies" : 30,
        "Anime/Animation" : 31,
        "Action/Adventure" : 32,
        "Classics" : 33,
        "Comedy" : 34,
        "Documentary" : 35,
        "Drama" : 36,
        "Family" : 37,
        "Foreign" : 38,
        "Horror" : 39,
        "Sci-Fi/Fantasy" : 40,
        "Thriller" : 41,
        "Shorts" : 42,
        "Shows" : 43,
        "Trailers" : 44,
    }

    function changeCategory(e) {
        console.log(e.target.value)
        setCategory(categoryObj[e.target.value])
    }

    return (
        <div className="Category">
            <input type="button" onClick={changeCategory} value="Film & Animation" />
            <input type="button" onClick={changeCategory} value="Autos & Vehicles" />
            <input type="button" value="Music" />
            <input type="button" value="Pets & Animals" />
            <input type="button" value="Sports" />
            <input type="button" value="Travel & Events" />
            <input type="button" value="Gaming" />
            <input type="button" value="Videoblogging" />
            <input type="button" value="Comedy" />
            <input type="button" value="Entertainment" />
            <input type="button" value="News & Politics" />
            <input type="button" value="Howto & Style" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
            <input type="button" value="Autos & Vehicles" />
        </div>
    )
}