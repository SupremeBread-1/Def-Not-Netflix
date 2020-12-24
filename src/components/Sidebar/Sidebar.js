// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";

function Sidebar(props) {
  // function multi() {
  //   props.handleLogout();
  //   props.showSidebar();
  // }

  function logoutCloseSide() {
    props.handleLogout();
    props.showSidebar();
  }

  return (
    <nav className={props.sidebar ? "sidebar__active" : "sidebar__menu"}>
      <ul className="sidebar__menuItems" onClick={props.showSidebar}>
        <li className="sidebar__toggle">
          <Link to="#" className="sidebar__exitButton">
            &times;
          </Link>
        </li>
        {/* <li className="sidebar__text">
          <div className="sidebar__profile ctr">
            <img
              src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
              alt="Profile Avatar"
              className="sidebar__avatar"
              style={{ width: "30px", objectFit: "contain" }}
            />
            <span className="sidebar__profileName">{props.user?.name}</span>
          </div>
        </li> */}

        {SidebarData.map((item, idx) => {
          return (
            <li key={idx} className={item.className}>
              <Link to={item.path}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className={`${item.style && "sidebar__profile--styling"}`}
                />
                <span>{item.title || props.user?.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to="/">
        <div className="sidebar__logoutContainer">
          <button
            className="sidebar__logoutButton"
            // onClick={props.handleLogout}
            onClick={() => logoutCloseSide()}
          >
            Log Out
          </button>
        </div>
      </Link>
    </nav>
  );
}

export default Sidebar;
