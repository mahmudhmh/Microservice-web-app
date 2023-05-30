import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaShoppingCart, FaUser, FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState(""); // State to store the username

  useEffect(() => {
    // Retrieve the username from localStorage
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleClick = () => setClick(!click);

  return (
    <div className="Navbar">
      <div className="container">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">
              <h1 className="header__optionLineTwo">SPACE</h1>
            </Link>
          </li>
          <li>
            <Link to="/Card">
              <h1 className="header__optionLineTwo">About Us</h1>
            </Link>
          </li>
          <li>
            <Link to="/ContactUs">
              <h1 className="header__optionLineTwo">Contact Us</h1>
            </Link>
          </li>
          <li>
            <Link to="/Details">
              <h1 className="header__optionLineTwo">
                <FaShoppingCart />
              </h1>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <h1 className="header__optionLineTwo">
                <FaUser />
              </h1>
            </Link>
          </li>
          <li>
            {username ? (
              // Display the username if available
              <h1 className="header__optionLineTwo">{username}</h1>
            ) : (
              <Link to="/Login">
                <h1 className="header__optionLineTwo">Login</h1>
              </Link>
            )}
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
