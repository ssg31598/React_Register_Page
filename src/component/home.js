import React from "react";
import { Redirect, useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      {localStorage.getItem("login") == "x" ? (
        <div>Welcome to home Page</div>
      ) : (
        <Redirect to="/registration" />
      )}
      <button
        onClick={() => {
          localStorage.setItem("login", false);
          history.push("/registration");
        }}
      >
        Log out
      </button>
    </div>
  );
};
export default Home;
