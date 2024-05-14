import "./Category.scss"
import { useState } from "react";

export default function Category({ setCategory }) {

  const [categorySelected, setCategorySelected] = useState("")

  const categoryObj = {
    "All": 0,
    "Film & Animation": 1,
    "Autos & Vehicles": 2,
    "Music": 10,
    "Pets & Animals": 15,
    "Sports": 17,
    // "Short Movies" : 18,
    // "Travel & Events" : 19,
    "Gaming": 20,
    // "Videoblogging" : 21,
    "People & Blogs": 22,
    "Comedy": 23,
    "Entertainment": 24,
    "News & Politics": 25,
    "Howto & Style": 26,
    // "Education" : 27,
    "Science & Technology": 28,
    "Nonprofits & Activism": 29,
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
  };

  function changeCategory(e) {
    const catNumber = categoryObj[e.target.value];
    setCategorySelected(e.target.value)
    setCategory(catNumber);
  }

  return (
      <div className="Category">
        <input className="singleCategory" type="button" onClick={changeCategory} value="All" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Film & Animation" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Autos & Vehicles" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Music" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Pets & Animals" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Sports" />
        {/* <input className="singleCategory" type="button" onClick={changeCategory} value="Short Movies" /> */}
        {/* <input className="singleCategory" type="button" onClick={changeCategory} value="Travel & Events" /> */}
        <input className="singleCategory" type="button" onClick={changeCategory} value="Gaming" />
        {/* <input className="singleCategory" type="button" onClick={changeCategory} value="Videoblogging" /> */}
        <input className="singleCategory" type="button" onClick={changeCategory} value="People & Blogs" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Comedy" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Entertainment" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="News & Politics" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Howto & Style" />
        {/* <input className="singleCategory" type="button" onClick={changeCategory} value="Education" /> */}
        <input
          className="singleCategory"
          type="button"
          onClick={changeCategory}
          value="Science & Technology"
        />
        <input
          className="singleCategory"
          type="button"
          onClick={changeCategory}
          value="Nonprofits & Activism"
        />
        {/* <input className="singleCategory" type="button" onClick={changeCategory} value="Movies" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Anime/Animation" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Action/Adventure" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Classics" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Comedy" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Documentary" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Drama" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Family" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Foreign" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Horror" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Sci-Fi/Fantasy" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Thriller" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Shorts" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Shows" />
        <input className="singleCategory" type="button" onClick={changeCategory} value="Trailers" /> */}
      </div>
  );
}
