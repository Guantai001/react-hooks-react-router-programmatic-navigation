import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
  //
  if (!isLoggedIn) return <Redirect to="/login" />;

  // if the user is logged in, render the home page
  return (
    <div>
      <h1>Home! component</h1>
    </div>
  );
}

export default Home;
