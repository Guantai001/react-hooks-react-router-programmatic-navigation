import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar({ setIsLoggedIn }) {
  const history = useHistory();

  function handleLogout() {
    setIsLoggedIn(false);
    // after logging the user out, redirect to the login page!
    history.push("/login");
  }

  return (
    <div>
      <NavLink to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        to="/login"
      >
        Login
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
