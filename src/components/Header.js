import { useState } from "react";
import { Link } from "react-router-dom";
const userLoggedIn = () => {
  return false;
};

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://th.bing.com/th/id/OIP.2NnTR9KezuMJGSsW_UFA4AHaHa?rs=1&pid=ImgDetMain"
        alt="logo"
      ></img>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>{" "}
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
