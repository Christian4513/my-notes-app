import "./HeaderComponent.css";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header className="header">
      <h2 className="title">Notes App</h2>
      <ul className="nav-list">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/notes" className="link">
            Notes
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default HeaderComponent;