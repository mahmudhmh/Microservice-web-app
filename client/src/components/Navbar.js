/* eslint-disable jsx-a11y/iframe-has-title */
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
            <Link to="/About">
              <h1 className="header__optionLineTwo">About Us</h1>
            </Link>
          </li>
          <li>
            <Link to="/ContactUs">
              <h1 className="header__optionLineTwo">Contact Us</h1>
            </Link>
          </li>
          <li>
            <Link to="/CartPage">
              <h1 className="header__optionLineTwo">
                Cart <FaShoppingCart />
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
          {/* <div style={{ height: "700px", width: "400px", zIndex: "1" }}>
            <iframe
              src={`https://ora.ai/embed/71f2f1e8-5662-4547-bf77-8911df6878e1`}
              width="100%"
              height="100%"
              style={{ border: "0", borderRadius: "4px" }}
            />
          </div> */}
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
