import About from "../About/About";
import "./NavBar.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function NavBar({ setSearch }) {
  return (
    <div className="navbar-container">
      <Link to="/">
        {" "}
        <img
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt=""
        />
      </Link>
      <SearchBar setSearch={setSearch} />

      <Link to="/about">
        <h1>About us</h1>
      </Link>
    </div>
  );
}
