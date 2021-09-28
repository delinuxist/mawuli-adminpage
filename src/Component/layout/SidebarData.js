import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  { title: "Home", path: "/", icon: <AiIcons.AiFillHome />, cName: "nav-text" },
  {
    title: "Users",
    path: "/users",
    icon: <FaIcons.FaUsers />,
    cName: "nav-text",
  },
  {
    title: "Items",
    path: "/items",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];
