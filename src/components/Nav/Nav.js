import React, { useState, useEffect } from "react";
import Netflix_Logo_RGB from "../../images/Netflix_Logo_RGB.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Nav(props) {
  const [show, handleShow] = useState(false);

  // const [sidebar, setSidebar] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  // console.log(sidebar);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      //   window.removeEventListener("scroll");
      try {
        window.removeEventListener("scroll");
      } catch (error) {
        console.log(error.message);
      }
    };
  }, []);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={`nav ${show && "nav__black"}`}>
        <Link to="/">
          <img
            src={Netflix_Logo_RGB}
            alt="Netflix Logo"
            className="nav__logo"
          />
        </Link>
        {props.user ? (
          <>
            <Link to="#">
              <img
                // onClick={props.handleSidebar}
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Profile Avatar"
                className="nav__avatar"
                onClick={showSidebar}
              />
            </Link>
          </>
        ) : (
          <>
            <div className="nav__links">
              <Link to="/signup" className="nav__link">
                Sign Up
              </Link>
              <Link to="/login" className="nav__link">
                Log In
              </Link>
            </div>
          </>
        )}
      </div>
      <Sidebar
        sidebar={sidebar}
        showSidebar={showSidebar}
        user={props.user}
        handleLogout={props.handleLogout}
      />
    </>
  );
}

export default Nav;
