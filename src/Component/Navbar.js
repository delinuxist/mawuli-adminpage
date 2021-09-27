import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/users">Users</Link>
      <Link to="/Items">Items</Link>
      <Link to="/Prices">Prices</Link>
    </div>
  );
}
