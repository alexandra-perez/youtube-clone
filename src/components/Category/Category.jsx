export default function Category ({setCategory}) {

    const categoryObj ={
        "Film & Animation" : 1,
        "Autos & Vehicles" : 2,
        "Music" : 10,
        "Pets & Animals" : 15,
        "Sports" : 17,
        // "Short Movies" : 18,
        // "Travel & Events" : 19,
        "Gaming" : 20,
        // "Videoblogging" : 21,
        "People & Blogs" : 22,
        "Comedy" : 23,
        "Entertainment" : 24,
        "News & Politics" : 25,
        "Howto & Style" : 26,
        // "Education" : 27,
        "Science & Technology" : 28,
        "Nonprofits & Activism" : 29,
        // "Movies" : 30,
        // "Anime/Animation" : 31,
        // "Action/Adventure" : 32,
        // "Classics" : 33,
        // "Comedy" : 34,
        // "Documentary" : 35,
        // "Drama" : 36,
        // "Family" : 37,
        // "Foreign" : 38,
        // "Horror" : 39,
        // "Sci-Fi/Fantasy" : 40,
        // "Thriller" : 41,
        // "Shorts" : 42,
        // "Shows" : 43,
        // "Trailers" : 44,
    }

    function changeCategory(e) {
        const catNumber = categoryObj[e.target.value]
        setCategory(catNumber)
    }

    return (
        <div className="Category">
            <input type="button" onClick={changeCategory} value="Film & Animation" />
            <input type="button" onClick={changeCategory} value="Autos & Vehicles" />
            <input type="button" onClick={changeCategory} value="Music" />
            <input type="button" onClick={changeCategory} value="Pets & Animals" />
            <input type="button" onClick={changeCategory} value="Sports" />
            {/* <input type="button" onClick={changeCategory} value="Short Movies" /> */}
            {/* <input type="button" onClick={changeCategory} value="Travel & Events" /> */}
            <input type="button" onClick={changeCategory} value="Gaming" />
            {/* <input type="button" onClick={changeCategory} value="Videoblogging" /> */}
            <input type="button" onClick={changeCategory} value="People & Blogs" />
            <input type="button" onClick={changeCategory} value="Comedy" />
            <input type="button" onClick={changeCategory} value="Entertainment" />
            <input type="button" onClick={changeCategory} value="News & Politics" />
            <input type="button" onClick={changeCategory} value="Howto & Style" />
            {/* <input type="button" onClick={changeCategory} value="Education" /> */}
            <input type="button" onClick={changeCategory} value="Science & Technology" />
            <input type="button" onClick={changeCategory} value="Nonprofits & Activism" />
            {/* <input type="button" onClick={changeCategory} value="Movies" /> */}
            {/* <input type="button" onClick={changeCategory} value="Anime/Animation" />
            <input type="button" onClick={changeCategory} value="Action/Adventure" />
            <input type="button" onClick={changeCategory} value="Classics" />
            <input type="button" onClick={changeCategory} value="Comedy" />
            <input type="button" onClick={changeCategory} value="Documentary" />
            <input type="button" onClick={changeCategory} value="Drama" />
            <input type="button" onClick={changeCategory} value="Family" />
            <input type="button" onClick={changeCategory} value="Foreign" />
            <input type="button" onClick={changeCategory} value="Horror" />
            <input type="button" onClick={changeCategory} value="Sci-Fi/Fantasy" />
            <input type="button" onClick={changeCategory} value="Thriller" />
            <input type="button" onClick={changeCategory} value="Shorts" />
            <input type="button" onClick={changeCategory} value="Shows" />
            <input type="button" onClick={changeCategory} value="Trailers" /> */}
        </div>
    )
}