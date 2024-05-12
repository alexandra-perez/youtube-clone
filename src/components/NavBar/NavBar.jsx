import About from "../About/About";
import "./NavBar.scss";
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (   <div className="navbar-container">
       
    <Link to='/'>    <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="" />
</Link>
   <Link to='/about'><p>About</p> 
    <About/>
   </Link>
</div>)
 
    
}