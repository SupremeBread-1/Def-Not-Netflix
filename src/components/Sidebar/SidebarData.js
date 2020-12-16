// import React from "react";
import search from "../../images/search.png";
import house from "../../images/house.png";
import plus from "../../images/plus.png";

export const SidebarData = [
  {
    title: "",
    path: "/profile",
    icon:
      "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",
    className: "sidebar__text",
    style: true,
  },
  {
    title: "Search",
    path: "/search",
    icon: search,
    className: "sidebar__text",
  },
  {
    title: "Home",
    path: "/",
    icon: house,
    className: "sidebar__text",
  },
  {
    title: "My List",
    path: "/list",
    icon: plus,
    className: "sidebar__text",
  },
];
