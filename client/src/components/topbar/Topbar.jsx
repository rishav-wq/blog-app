import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Topbar.css";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    // Additional logout actions can be added here, such as redirecting the user
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here, e.g., redirect to search results page
    console.log("Searching for:", searchQuery);
    // Example: Redirect to search results page
    // history.push(`/search?q=${searchQuery}`);
    setSearchQuery(""); // Clear search input after submission
  };

  return (
    <div className="top">
      <div className="topLeft">
      <a href="https://www.facebook.com/" className="socialLink">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a href="https://twitter.com/" className="socialLink">
          <i className="topIcon fab fa-twitter-square"></i>
        </a>
        <a href="https://www.pinterest.com/" className="socialLink">
          <i className="topIcon fab fa-pinterest-square"></i>
        </a>
        <a href="https://www.instagram.com/" className="socialLink">
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <form className="searchForm" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                className="searchInput"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="searchButton">
                <i className="topSearchIcon fas fa-search"></i>
              </button>
            </form>
            <Link to="/settings">
              <img className="topImg" src={PF + user.profilePic} alt="" />
            </Link>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
