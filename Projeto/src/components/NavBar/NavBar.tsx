import "./styles.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
  <nav className="Menu">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/posts">Posts</Link>
      </li>

      <li>
        <Link to="/posts/10">Posts 10</Link>
      </li>
      <li>
        <Link to="/redirect">Redirect</Link>
      </li>
    </ul>
  </nav>
    );
};
